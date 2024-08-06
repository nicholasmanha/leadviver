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
        "flex items-center justify-center w-full mt-3"
        , className)}>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <Button variant="muted" className="rounded-r-none h-6">
              <Typography variant="button-4" className="text-text-secondary/30">
                Prev
              </Typography>
            </Button>
            <Button className="rounded-l-none h-6" variant="default">
              <Typography variant="button-4" className="text-white">
                Next
              </Typography>
            </Button>

          </div>
          <Typography variant="subtitle" color="secondary">
            Page 1 of many
          </Typography>
        </div>

      </div>
    </>

  )
}
