import { GetStaticProps, GetStaticPaths } from 'next';
import KopekPage, { getStaticProps as kopekGetStaticProps } from '../../kopek';

export default KopekPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const kopekProps = await kopekGetStaticProps(context);
  
  if ('props' in kopekProps) {
    return {
      ...kopekProps,
      props: {
        ...kopekProps.props,
        currentPage: context.params?.sayfa ? parseInt(context.params.sayfa as string) : 1,
      },
    };
  }
  
  return kopekProps;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { sayfa: '1' } }, { params: { sayfa: '2' } }],
    fallback: 'blocking',
  };
};