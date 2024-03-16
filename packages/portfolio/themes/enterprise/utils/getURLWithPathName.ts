type TPath = 'blogs';

function getURLWithPathName(path: TPath, slug?: string): string {
	if (path === 'blogs') return `/${path}${slug ? '/' + slug : ''}`;
	return `/${slug}`;
}

export default getURLWithPathName;
