type PostType = {
  id: string;
  slug: string;
  title: string;
  publishedAt: string;
  coverImage: {
    url: string;
  };
  author: {
    username: string;
    name: string;
    profilePicture: string;
  };
  ogMetaData: {
    image: string;
  };
  content: {
    markdown: string;
    html: string;
  };
  brief: string;
  url: string;
};

export default PostType;
