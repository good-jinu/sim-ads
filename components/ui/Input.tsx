import { ComponentProps, FC } from "react";

const Input: FC<ComponentProps<"input">> = ({
  className,
  type,
  ref,
  ...props
}) => {
  return (
    <input
      type={type}
      className={[
        "flex h-10 w-full rounded-md border border-input bg-white dark:bg-black px-3 py-2 text-black dark:text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className,
      ].join(" ")}
      ref={ref}
      {...props}
    />
  );
};

export default Input;
