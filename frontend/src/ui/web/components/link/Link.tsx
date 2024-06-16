import { HTMLAttributes } from "react";
import Link from "next/link";
import classNames from "classnames";
import "./link.scss";

type LinkProps = {
  href: string;
  variant?: "button";
  severity?: "gray" | "black";
} & HTMLAttributes<HTMLElement>;

function LinkComponent({
  href,
  variant,
  severity,
  className,
  ...props
}: LinkProps) {
  const linkClasses = classNames(
    "web__link",
    {
      [`web__link--${variant}`]: variant,
      [`web__link--${severity}`]: severity,
    },
    className
  );

  return (
    <Link href={href} className={linkClasses} {...props}>
      {props.children}
    </Link>
  );
}

export { LinkComponent as Link };
