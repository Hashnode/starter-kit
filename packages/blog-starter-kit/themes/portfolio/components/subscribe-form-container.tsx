import { useAppContext } from "./contexts/appContext";
import { SubscribeForm } from "./subscribe-form";

const SubscribeFormContainer = () => {
	const {publication} = useAppContext()
	return (
        
		<div className="outline outline-1 mb-8 outline-neutral-300 dark:outline-neutral-800 mx-auto dark:bg-neutral-800 shadow-sm rounded-xl py-12 px-4 flex flex-col  gap-4 items-center w-full max-w-[640px]">
			<div className="flex flex-col md:flex-row items-center gap-4 md:gap-8dark:text-white mb-4 w-[90%]">
				{publication.author.profilePicture && <img className="w-32 rounded-md" src={publication.author.profilePicture} />}
				<div className="text-center md:text-left">
                    <h2 className=" text-2xl  font-bold">
                        Subscribe to {publication.author.name}&apos;s newsletter
                    </h2>
                    {publication.descriptionSEO && <h4 className=" w-[80%] mx-auto text-neutral-700 dark:text-neutral-200">{publication.descriptionSEO}</h4>}
                </div>
			</div>
			<SubscribeForm />
		</div>
	);
};

export default SubscribeFormContainer;