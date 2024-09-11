import { GetStaticProps, GetStaticPaths } from 'next';
import KediPage, { getStaticProps as kediGetStaticProps } from '../../kedi';

export default KediPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const kediProps = await kediGetStaticProps(context);
  
  if ('props' in kediProps) {
    return {
      ...kediProps,
      props: {
        ...kediProps.props,
        currentPage: context.params?.sayfa ? parseInt(context.params.sayfa as string) : 1,
      },
    };
  }
  
  return kediProps;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { sayfa: '1' } }, { params: { sayfa: '2' } }],
    fallback: 'blocking',
  };
};