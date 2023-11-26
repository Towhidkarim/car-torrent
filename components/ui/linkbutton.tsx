import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import Link, { LinkProps } from 'next/link';
import React from 'react';

const buttonVariants = cva(
  'active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow hover:opacity-90',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          'border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

interface LinkButtonProps
  extends VariantProps<typeof buttonVariants>,
    LinkProps {
  className?: string;
  children?: React.ReactNode;
}

const LinkButton = ({
  className,
  variant,
  children,
  ...props
}: LinkButtonProps) => {
  return (
    <Link className={cn(buttonVariants({ variant, className }))} {...props}>
      {children}
    </Link>
  );
};

export default LinkButton;
