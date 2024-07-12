import { twJoin } from 'tailwind-merge';
import { Publication } from '../generated/graphql';
import { resizeImage } from '../utils/image';

// TODO: this component name is confusing.
const PublicationMeta = (
	props: Pick<Publication, 'isTeam'> & {
		author: Pick<Publication['author'], 'name' | 'username' | 'followersCount' | 'profilePicture'>;
		aboutHTML?: string | null;
	},
) => {
	const { isTeam, aboutHTML, author } = props;
	const authorImageURL = resizeImage(
		author.profilePicture ||
			'https://cdn.hashnode.com/res/hashnode/image/upload/v1720783929907/OSTT0QVJ9.png',
		{ w: 400, h: 400, c: 'face' },
	);

	return (
		<div className="blog-author-card mx-auto px-2 py-8 md:px-8 md:py-10">
			<div className="flex flex-col flex-wrap items-center">
				<div className="flex w-full flex-col items-center">
					{aboutHTML ? (
						<div
							className={twJoin(
								'prose dark:prose-dark text-center',
								isTeam ? 'lg:prose-xl max-w-full' : '',
							)}
							// eslint-disable-next-line react/no-danger
							dangerouslySetInnerHTML={{ __html: aboutHTML }}
						/>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default PublicationMeta;
