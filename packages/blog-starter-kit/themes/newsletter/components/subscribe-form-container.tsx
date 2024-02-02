import { useAppContext } from "./contexts/appContext";
import { SubscribeForm } from "./subscribe-form";

const SubscribeFormContainer = () => {
	const {publication} = useAppContext()
	return (
        
		<div className="outline outline-1 outline-neutral-300 dark:outline-neutral-800 mx-auto dark:bg-neutral-800 shadow-sm rounded-md py-12 p-4 flex flex-col gap-4 items-center max-w-[640px]">
			<div className="flex flex-col items-center gap-4 dark:text-white mb-4">
				{publication.author.profilePicture && <img className="w-32 rounded-md" src={publication.author.profilePicture} />}
				<h2 className=" text-2xl text-center font-bold">
					Subscribe to {publication.author.name}'s newsletter
				</h2>
				{publication.descriptionSEO && <h4 className="text-center w-[80%] text-neutral-700 dark:text-neutral-200">{publication.descriptionSEO}</h4>}
			</div>
			<SubscribeForm />
		</div>
	);
};

export default SubscribeFormContainer;
