// Typography.tsx
import React, { FC, HTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from "@/lib/utils"

const typographyVariants = cva('text-base', {
  variants: {
    variant: {
      p: 'text-base font-thin',
      'p-bold': 'text-xl font-semibold',
      h1: 'text-base',
      h2: 'text-sm text-gray-600',
    },
    color: {
      primary: 'text-blue-600',
      secondary: 'text-gray-700',
      success: 'text-green-600',
      danger: 'text-red-600',
    },
  },
  defaultVariants: {
    variant: 'p',
  },
});

interface TypographyProps extends HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof typographyVariants> {
  variant?: 'p' | 'p-bold' | 'h1' | 'h2';
  color?: 'primary' | 'secondary' | 'success' | 'danger';
  className?: string;
}

const Typography: FC<TypographyProps> = ({ variant = 'p', color, className, children, ...props }) => {
  return (
    <p className={cn(typographyVariants({ variant, color }), className)} {...props}>
      {children}
    </p>
  );
};

export default Typography;
