import React, { ReactNode } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'

import { IoMdList } from "react-icons/io";
import { Button } from './ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
type TOCPopoverProps = {
    children: ReactNode;
}
export default function TOCpopover({ children }: TOCPopoverProps) {
    return (
        <Popover>
            <PopoverTrigger className='rounded-full p-2 w-8 h-8 bg-primary'>


                <IoMdList className='text-white' />

            </PopoverTrigger>
            <PopoverContent className="w-80 bg-transparent shadow-none border-none">
                {children}

            </PopoverContent>
        </Popover>
    )
}
