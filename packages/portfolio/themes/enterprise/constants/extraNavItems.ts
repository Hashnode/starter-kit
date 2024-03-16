import { PublicationNavbarItem, PublicationNavigationType } from '../generated/graphql';

const extraNavItems: (PublicationNavbarItem & {
	url: string;
	openInNewTab?: boolean;
})[] = [
	{
		label: 'Blogs',
		url: '/blogs',
		id: '#blogs',
		type: PublicationNavigationType.Link,
		openInNewTab: false,
	},
];

export default extraNavItems;
