// Typography.tsx
import React, { FC, HTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from "@/lib/utils"

const typographyVariants = cva('text-base', {
  variants: {
    variant: {
      heading: 'text-base font-bold',
      subheading: 'text-xl font-semibold',
      body: 'text-base',
      caption: 'text-sm text-gray-600',
    },
    color: {
      primary: 'text-blue-600',
      secondary: 'text-gray-700',
      success: 'text-green-600',
      danger: 'text-red-600',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});

interface TypographyProps extends HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof typographyVariants> {
  variant?: 'heading' | 'subheading' | 'body' | 'caption';
  color?: 'primary' | 'secondary' | 'success' | 'danger';
  className?: string;
}

const Typography: FC<TypographyProps> = ({ variant = 'body', color, className, children, ...props }) => {
  return (
    <p className={cn(typographyVariants({ variant, color }), className)} {...props}>
      {children}
    </p>
  );
};

export default Typography;
