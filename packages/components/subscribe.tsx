import * as Popover from "@radix-ui/react-popover";
import Button from "./button";
import SubscribeForm from "./subscribe-form";
import { NewsletterPlusSVG } from "./icons";

const Subscribe = () => {
  return (
    <div className="fixed z-50 bottom-10 right-10">
      <Popover.Root>
        <Popover.Trigger asChild>
          <div>
            <Button
              label="Subscribe"
              type="outline"
              icon={<NewsletterPlusSVG className="w-5 h-5 fill-current" />}
            />
          </div>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            className="w-[350px] md:w-[500px] p-2 md:p-5 bg-white shadow-xl dark:bg-neutral-800 rounded-xl border dark:border-neutral-800"
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

export default Subscribe;
