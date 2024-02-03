import { Publication } from '@/generated/graphql';
import { gql, request } from 'graphql-request';

export const getPublicationId = async (host: string) => {
	let hashNodeUrl = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;

	const data = (await request(
		hashNodeUrl,
		gql`
			query getPublicationId($host: String!) {
				publication(host: $host) {
					id
				}
			}
		`,
		{
			host,
		},
	)) as { publication: Publication };

	return data.publication;
};
