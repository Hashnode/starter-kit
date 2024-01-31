import { gql, request } from 'graphql-request';

type Response = {
	subscribeToNewsletter: {
		status: 'PENDING';
	};
};

export const subscribeNewsletter = async (email: string, publicationId: string) => {
	let hashNodeUrl = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;

	const data = await request<Response>(
		hashNodeUrl,
		gql`
			mutation subscribeNewsletter($publicationId: ObjectId!, $email: String!) {
				subscribeToNewsletter(input: { publicationId: $publicationId, email: $email }) {
					status
				}
			}
		`,
		{
			email,
			publicationId,
		},
	);

	return data;
};
