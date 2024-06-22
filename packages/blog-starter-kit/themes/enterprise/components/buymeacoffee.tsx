import * as Popover from '@radix-ui/react-popover';
import { Button } from './button';
import BuyMeACoffeeSVG from './icons/svgs/BuyMeACoffeeSVG';

export const BuyMeACoffee = () => {
  return (
    <div className="fixed  rounded-full z-50 bottom-10 right-10">
      <Popover.Root>
        <Popover.Trigger asChild>
          <Button
            label=""
            type="outline"
            icon={<BuyMeACoffeeSVG className="w-5 h-5 fill-current" />}
            className="!bg-primary-300 dark:!bg-neutral-950 rounded-full p-3"
          />
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            className="w-[350px] rounded-xl border bg-white p-5 shadow-xl dark:border-neutral-800 dark:bg-neutral-900 md:w-[500px]"
            align="end"
            sideOffset={5}
          >
            <h3 className="mb-2 text-base font-semibold text-center text-primary-600">
              Like what you read? A small monthly contribution helps me share more awesome content
            </h3>
            <div className="w-full flex justify-center">
              <iframe
                src="https://www.buymeacoffee.com/widget/page/pdamasceno"
                width="300"
                height="500"
                className="w-full"
              ></iframe>
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
};
