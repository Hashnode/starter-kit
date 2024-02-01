import { SubscribeForm } from "./subscribe-form";

const SubscribeFormContainer = () => {
	return (
        
		<div className=" bg-primary-50 outline  outline-1 outline-gray-200 mx-auto mb-8  rounded-md px-6 py-12 flex flex-col gap-2 items-center dark:outline-gray-700 max-w-[300px]">
			<h2 className=" dark:text-white mb-5 text-3xl text-center font-semibold">
				Subscribe to our newsletter for updates and changelog.
			</h2>
			<SubscribeForm />
		</div>
	);
};

export default SubscribeFormContainer;
