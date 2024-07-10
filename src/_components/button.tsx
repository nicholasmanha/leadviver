import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default: "bg-button text-text-primary hover:bg-secondary dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",
        secondary:
          "bg-button text-text-primary dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
        muted:
          "bg-button/50 text-text-primary/30 cursor-default dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
        red:
          "bg-red text-text-primary hover:bg-red/80 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",
        blue:
          "bg-blue border-slate-200 hover:bg-blue/80 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-14 w-60 rounded-xl px-8",
        icon: "h-10 w-10",
      },

    },
    defaultVariants: {
      variant: "default",
      size: "default",

    },
  }
)

type ButtonVariantProps = VariantProps<typeof buttonVariants>;
type NativeProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export interface ButtonProps
  extends Omit<NativeProps, keyof ButtonVariantProps>,
  ButtonVariantProps { asChild?: boolean }



const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, color, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
