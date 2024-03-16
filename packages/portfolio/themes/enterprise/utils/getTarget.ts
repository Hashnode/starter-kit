import { PublicationNavbarItem } from '../generated/graphql';

function getTargetAttr(item: PublicationNavbarItem & { url: string; openInNewTab?: boolean }) {
	if ('openInNewTab' in item) {
		return item.openInNewTab ? '_blank' : '_self';
	} else return '_blank';
}

export default getTargetAttr;
