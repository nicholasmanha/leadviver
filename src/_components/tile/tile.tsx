"use client"

import * as React from "react"
import './tile.css';
import { LuChevronUp } from "react-icons/lu";
import { LuChevronDown } from "react-icons/lu";
import { useState, createContext, useContext, ReactNode } from 'react';


import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "./Collapsible"

interface CollapsibleProps {
    children?: any
  }

export function CollapsibleDemo({children}: CollapsibleProps) {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-full bg-secondary rounded-md"
        >
            <div className="flex items-center justify-between space-x-4 px-4 py-2">
                <h4 className="text-sm font-semibold">
                    house on da market
                </h4>
                <CollapsibleTrigger asChild>
                    {isOpen ? <LuChevronDown /> : <LuChevronUp />}
                </CollapsibleTrigger>
            </div>

            <CollapsibleContent className="CollapsibleContent bg-secondary-light rounded-b-md">
                <div className="px-4 py-2 font-mono text-sm shadow-sm">
                    {children}
                </div>
                
            </CollapsibleContent>
        </Collapsible>
    )
}
