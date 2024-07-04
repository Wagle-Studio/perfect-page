import { HTMLAttributes } from "react";
import Link from "next/link";
import classNames from "classnames";
import "./link.scss";

type LinkProps = {
  href: string;
  variant?: "inline" | "button";
  severity?: "primary" | "secondary";
  targetBlank?: boolean;
} & HTMLAttributes<HTMLElement>;

function LinkComponent({
  href,
  variant,
  severity,
  className,
  targetBlank = false,
  ...props
}: LinkProps) {
  const linkClasses = classNames(
    "admin__link",
    {
      [`admin__link--inline`]: variant === "inline",
      [`admin__link--button admin__link--button--${severity}`]:
        variant === "button" && severity,
    },
    className
  );

  return (
    <Link
      href={href}
      className={linkClasses}
      target={targetBlank ? "_blank" : "_self"}
      {...props}
    >
      {props.children}
    </Link>
  );
}

export { LinkComponent as Link };
