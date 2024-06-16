"use client";

import { HTMLAttributes } from "react";
import classNames from "classnames";
import "./button.scss";

type ButtonProps = {
  severity?: "default" | "black" | "invisible";
} & HTMLAttributes<HTMLElement>;

export function Button({
  severity = "default",
  className,
  onClick,
  ...props
}: ButtonProps) {
  const buttonClasses = classNames("admin__button", `admin__button--${severity}`, className);

  return (
    <button className={buttonClasses} onClick={onClick} {...props}>
      {props.children}
    </button>
  );
}
