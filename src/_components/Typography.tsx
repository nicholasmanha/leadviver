// Typography.tsx
import React, { FC, HTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from "@/lib/utils"

const typographyVariants = cva('text-base', {
  variants: {
    variant: {
      p: 'text-base font-normal',
      'p-bold': 'text-base font-semibold',
      h1: 'text-4xl font-semibold',
      h2: 'text-3xl font-semibold',
      h3: 'text-2xl font-semibold',
      h4: 'text-xl font-medium',
      h5: 'text-lg font-medium',
      'table-content': 'text-table-content font-normal font-table text-sm',
      'table-header': 'text-table-content font-semibold font-table text-sm',
      subtitle: 'text-sm font-normal',
      'button-1': 'text-xl font-semibold',
      'button-2': 'text-base font-semibold',
      'button-3': 'text-sm font-semibold',
      'button-4': 'text-xs font-semibold',
    },
    color: {
      primary: 'text-text-primary',
      secondary: 'text-text-secondary',
      success: 'text-success-light',
      danger: 'text-failure-light',
    },
  },
  defaultVariants: {
    variant: 'p',
    color: 'primary'
  },
});

interface TypographyProps extends HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof typographyVariants> {
  variant?: 'p' | 'p-bold' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'table-content' | 'table-header' | 'subtitle' | 'button-1' | 'button-2' | 'button-3' | 'button-4';
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