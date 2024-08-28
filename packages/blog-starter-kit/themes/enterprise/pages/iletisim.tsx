import { GetStaticProps } from 'next';
import Contact from '../components/Contact';
import { request } from 'graphql-request';
import { PublicationByHostDocument, PublicationByHostQuery, PublicationByHostQueryVariables, PublicationFragment } from '../generated/graphql';

const GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;

const IletisimPage: React.FC<{ publication: PublicationFragment }> = ({ publication }) => {
  return <Contact publication={publication} />;
};

export default IletisimPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  try {
    const data = await request<PublicationByHostQuery, PublicationByHostQueryVariables>(
      GQL_ENDPOINT,
      PublicationByHostDocument,
      {
        host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
      }
    );

    const publication = data.publication;
    if (!publication) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        publication,
      },
      revalidate: 1,
    };
  } catch (error) {
    console.error('Error fetching publication data:', error);
    return {
      props: {
        publication: null,
      },
      revalidate: 1,
    };
  }
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { locale: 'default' } },
      { params: { locale: 'tr' } },
      { params: { locale: 'en' } },
    ],
    fallback: false,
  };
}