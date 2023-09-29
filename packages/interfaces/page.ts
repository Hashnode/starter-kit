type PageType = {
    slug: string;
    title: string;
    content?: {
        markdown?: string;
        html?: string;
    };
};

export default PageType;