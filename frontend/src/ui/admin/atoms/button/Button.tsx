"use client";

import { HTMLAttributes } from "react";
import classNames from "classnames";
import "./button.scss";

type ButtonProps = {
  severity: "primary" | "secondary" | "invisible";
} & HTMLAttributes<HTMLElement>;

export function Button({
  severity,
  className,
  onClick,
  ...props
}: ButtonProps) {
  const buttonClasses = classNames(
    "admin__button",
    `admin__button--${severity}`,
    className
  );

  return (
    <button className={buttonClasses} onClick={onClick} {...props}>
      {props.children}
    </button>
  );
}
