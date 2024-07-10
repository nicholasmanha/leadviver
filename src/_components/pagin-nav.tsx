import Typography from "./Typography"
import { Button } from "./button"
import { ReactElement } from "react"
import { cn } from "@/lib/utils"
import { LuSearch } from "react-icons/lu";

interface PaginationNavigationProps {
  className?: string;
}

export default function PaginationNavigation({ className }: PaginationNavigationProps) {
  return (
    <>
      <div className={cn(
        "flex items-center justify-center w-full"
        , className)}>
        <Button>Prev</Button><Button>Next</Button>
      </div>
    </>

  )
}
