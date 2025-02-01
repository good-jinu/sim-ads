import * as React from "react";

import { cn } from "@/lib/utils";

const Card: React.FC<
  React.HTMLAttributes<HTMLDivElement> & {
    ref?: React.RefObject<HTMLDivElement>;
  }
> = ({ className, ref, ...props }) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border border-neutral-200 bg-white text-neutral-950 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50",
      className,
    )}
    {...props}
  />
);

const CardHeader: React.FC<
  React.HTMLAttributes<HTMLDivElement> & {
    ref?: React.RefObject<HTMLDivElement>;
  }
> = ({ className, ref, ...props }) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
);

const CardTitle: React.FC<
  React.HTMLAttributes<HTMLDivElement> & {
    ref?: React.RefObject<HTMLDivElement>;
  }
> = ({ className, ref, ...props }) => (
  <div
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className,
    )}
    {...props}
  />
);

const CardDescription: React.FC<
  React.HTMLAttributes<HTMLDivElement> & {
    ref?: React.RefObject<HTMLDivElement>;
  }
> = ({ className, ref, ...props }) => (
  <div
    ref={ref}
    className={cn("text-sm text-neutral-500 dark:text-neutral-400", className)}
    {...props}
  />
);

const CardContent: React.FC<
  React.HTMLAttributes<HTMLDivElement> & {
    ref?: React.RefObject<HTMLDivElement>;
  }
> = ({ className, ref, ...props }) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
);

const CardFooter: React.FC<
  React.HTMLAttributes<HTMLDivElement> & {
    ref?: React.RefObject<HTMLDivElement>;
  }
> = ({ className, ref, ...props }) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
);

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
