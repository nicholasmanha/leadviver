import Typography from "./Typography"
import { Button } from "./button"
import { ReactElement } from "react"
import { cn } from "@/lib/utils"
import { LuSearch } from "react-icons/lu";

interface InputSearchProps {
  className?: string;
}

export default function InputSearch({ className }: InputSearchProps) {
  return (
    <>
      <div className={cn("relative flex items-center w-full mr-4", className)}>
        <LuSearch className="w-4 h-4 absolute ml-2 pointer-events-none" />
        <input
          className="focus:ring-transparent focus:!ring-offset-0 pl-8 py-2 flex h-7 w-full rounded-md  bg-background text-left text-lg ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
    </>

  )
}
