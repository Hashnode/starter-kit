import { ChevronDownSVG } from './icons/svgs';

import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu';

interface Props {
  elements: { name: string; key: string }[];
  onElementSelect: (key: string) => void;
  defaultName: string;
}

function Dropdown(props: Props) {
  const { elements, onElementSelect, defaultName } = props;
  return (
    <DropdownPrimitive.Root>
      <DropdownPrimitive.Trigger className="flex flex-row items-center justify-start rounded-lg border px-2 py-1 font-medium text-slate-600 hover:bg-slate-50 focus:outline-none dark:border-slate-800 dark:text-slate-100 dark:hover:bg-slate-800">
        <div className="mr-2 truncate font-heading text-sm capitalize">
          <span title={defaultName}>{defaultName}</span>
        </div>
        <ChevronDownSVG className="h-3 w-3 fill-current" />
      </DropdownPrimitive.Trigger>

      <DropdownPrimitive.Portal>
        <DropdownPrimitive.Content
          align="start"
          sideOffset={10}
          className="z-50 w-36 overflow-hidden rounded-lg border shadow-lg dark:border-slate-700"
        >
          {elements.map((element, index) => (
            <div key={element.key}>
              <DropdownPrimitive.Item
                onClick={() => onElementSelect(element.key)}
                className="relative flex items-center bg-white hover:bg-slate-100 focus:bg-slate-100 focus:outline-none dark:bg-slate-800 dark:hover:bg-slate-700 dark:focus:bg-slate-700"
              >
                <button
                  type="button"
                  className="px-4 py-3 text-sm text-slate-700 active:outline-none dark:text-slate-200"
                >
                  {element.name}
                </button>
              </DropdownPrimitive.Item>
              {index !== elements.length - 1 && <hr className="dark:border-slate-700" />}
            </div>
          ))}
        </DropdownPrimitive.Content>
      </DropdownPrimitive.Portal>
    </DropdownPrimitive.Root>
  );
}

export default Dropdown;
