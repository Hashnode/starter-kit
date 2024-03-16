import { extraNavItems } from '../constants';
import { PostsByPublicationQuery } from '../generated/graphql';

type TAddExtraNavBarItemsArgs = {
	// TODO: WRITE AN ARTICLE ABOUT THIS
	publication: PostsByPublicationQuery['publication'] & {};
};

function addExtraNavBarItems(
	args: TAddExtraNavBarItemsArgs,
): TAddExtraNavBarItemsArgs['publication'] {
	const { publication } = args;
	const modifiedPublication = {
		...publication,
		preferences: {
			...publication.preferences,
			navbarItems: [...extraNavItems, ...publication.preferences.navbarItems],
		},
	};

	return modifiedPublication;
}

export default addExtraNavBarItems;
