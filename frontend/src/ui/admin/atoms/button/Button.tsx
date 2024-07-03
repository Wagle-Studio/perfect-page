"use client";

import { HTMLAttributes } from "react";
import classNames from "classnames";
import "./button.scss";

type ButtonProps = {
  severity: "primary" | "secondary" | "invisible";
  disabled?: boolean;
} & HTMLAttributes<HTMLElement>;

export function Button({
  severity,
  className,
  disabled = false,
  onClick,
  ...props
}: ButtonProps) {
  const buttonClasses = classNames(
    "admin__button",
    `admin__button--${severity}`,
    { "admin__button--disabled": disabled },
    className
  );

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {props.children}
    </button>
  );
}
