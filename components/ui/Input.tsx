import { ComponentProps, FC, PropsWithChildren } from "react";

const Input: FC<PropsWithChildren<ComponentProps<"input">>> = ({
  className,
  type,
  ref,
  ...props
}) => {
  return (
    <input
      type={type}
      className={[
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className,
      ].join(" ")}
      ref={ref}
      {...props}
    />
  );
};

export default Input;
