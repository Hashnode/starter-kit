import request, { type RequestDocument } from 'graphql-request';
import type { TypedDocumentNode } from '@graphql-typed-document-node/core';

// Hashnode'un GraphQL endpoint'i hem build hem ISR çağrılarında zaman zaman
// `ENOTFOUND` / `ECONNRESET` / "fetch failed" gibi geçici ağ hatası üretiyor.
// Bu sarmalayıcı `graphql-request`'in `request` fonksiyonuyla aynı imzaya
// sahiptir, ama yalnızca **geçici ağ hataları** için exponential backoff ile
// yeniden dener. GraphQL semantik hataları (4xx, validation) ilk denemede
// fırlatılır.

const TRANSIENT_NETWORK_CODES = new Set([
	'ENOTFOUND',
	'ECONNRESET',
	'ETIMEDOUT',
	'EAI_AGAIN',
	'ECONNREFUSED',
	'UND_ERR_SOCKET',
	'UND_ERR_CONNECT_TIMEOUT',
	'UND_ERR_HEADERS_TIMEOUT',
	'UND_ERR_BODY_TIMEOUT',
]);

const TRANSIENT_MESSAGE_RE = /fetch failed|network|socket hang up|ENOTFOUND|ECONNRESET|ETIMEDOUT|EAI_AGAIN|ECONNREFUSED|timeout/i;

export const isTransientNetworkError = (error: unknown): boolean => {
	if (!error || typeof error !== 'object') return false;
	const err = error as { code?: string; message?: string; cause?: unknown };
	if (err.code && TRANSIENT_NETWORK_CODES.has(err.code)) return true;
	if (err.message && TRANSIENT_MESSAGE_RE.test(err.message)) return true;
	if (err.cause) return isTransientNetworkError(err.cause);
	return false;
};

export interface HashnodeRequestOptions {
	maxAttempts?: number;
	baseDelayMs?: number;
}

type Variables = Record<string, any>;

// Overloads: TypedDocumentNode geçildiğinde TData/TVariables otomatik çıkarılır;
// düz `RequestDocument` (string/DocumentNode) geçildiğinde TData açıkça verilir.
export function hashnodeRequest<TData, TVariables extends Variables = Variables>(
	endpoint: string,
	document: TypedDocumentNode<TData, TVariables>,
	variables?: TVariables,
	options?: HashnodeRequestOptions,
): Promise<TData>;
export function hashnodeRequest<TData = unknown, TVariables extends Variables = Variables>(
	endpoint: string,
	document: RequestDocument,
	variables?: TVariables,
	options?: HashnodeRequestOptions,
): Promise<TData>;
export async function hashnodeRequest<TData = unknown, TVariables extends Variables = Variables>(
	endpoint: string,
	document: any,
	variables?: TVariables,
	options: HashnodeRequestOptions = {},
): Promise<TData> {
	const { maxAttempts = 3, baseDelayMs = 250 } = options;
	let lastError: unknown;

	const authToken = process.env.HASHNODE_AUTH_TOKEN;
	const requestHeaders = authToken ? { Authorization: authToken } : undefined;

	for (let attempt = 1; attempt <= maxAttempts; attempt++) {
		try {
			return (await request(endpoint, document, variables, requestHeaders)) as TData;
		} catch (error) {
			lastError = error;
			const transient = isTransientNetworkError(error);
			if (!transient || attempt === maxAttempts) {
				throw error;
			}
			const delayMs = baseDelayMs * 2 ** (attempt - 1) + Math.floor(Math.random() * 150);
			// eslint-disable-next-line no-console
			console.warn(
				`[hashnode-request] transient failure (attempt ${attempt}/${maxAttempts}), retrying in ${delayMs}ms:`,
				error instanceof Error ? error.message : error,
			);
			await new Promise((resolve) => setTimeout(resolve, delayMs));
		}
	}

	throw lastError;
}
