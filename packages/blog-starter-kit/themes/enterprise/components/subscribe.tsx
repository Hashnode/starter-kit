import * as Popover from '@radix-ui/react-popover';
import { Button } from './button';
import { NewsletterPlusSVG } from './icons';
import { SubscribeForm } from './subscribe-form';

export const Subscribe = () => {
	return (
		<div className="fixed z-50 bottom-10 right-10">
			<Popover.Root>
				<Popover.Trigger asChild>
					<Button
						label="Subscribe"
						type="outline"
						icon={<NewsletterPlusSVG className="w-5 h-5 fill-current" />}
						className="!bg-white dark:!bg-neutral-950"
					/>
				</Popover.Trigger>
				<Popover.Portal>
					<Popover.Content
						className="w-[350px] rounded-xl border bg-white p-5 shadow-xl dark:border-neutral-800 dark:bg-neutral-900 md:w-[500px]"
						align="end"
						sideOffset={5}
					>
						<h3 className="mb-2 text-base font-semibold text-center text-primary-600">
							Subscribe to our newsletter for updates and changelog.
						</h3>
						<SubscribeForm />
					</Popover.Content>
				</Popover.Portal>
			</Popover.Root>
		</div>
	);
};
