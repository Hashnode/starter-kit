// pages/api/search.ts
import type { NextApiRequest, NextApiResponse } from 'next';

const query = `
mutation SubscribeToNewsletter($input: SubscribeToNewsletterInput!) {
    subscribeToNewsletter(input: $input) {
      status
    }
  }
`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { email, publication } = req.body;

	const variables = {
		input: {
			publicationId: publication,
			email: email,
		},
	};

	const response = await fetch(process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query,
			variables,
		}),
	});
	const data = await response.json();
	const status = data.data.subscribeToNewsletter.status;
	return res.json({ status });
}
