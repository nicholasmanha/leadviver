"use client"

import * as React from "react"
import './tile.css';
import { LuChevronUp } from "react-icons/lu";
import { LuChevronDown } from "react-icons/lu";
import { ReactNode } from 'react';


import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./Collapsible"
import Typography from "../Typography";

interface CollapsibleProps {
  left: ReactNode
  right?: ReactNode
  children?: any
}



function Tile({ children, left, right }: CollapsibleProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full bg-secondary rounded-md"
    >
      <div className="flex items-center justify-between space-x-4 px-4 py-2">
        <div className="w-full">
          <div className="inline-flex"><Typography>{left}</Typography></div>
          <div className="float-right inline-flex"><Typography>{right}</Typography></div>
        </div>

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



export default Tile;