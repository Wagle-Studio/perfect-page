import { HTMLAttributes } from "react";
import classNames from "classnames";
import "./section.scss";

export function Section({ className, ...props }: HTMLAttributes<HTMLElement>) {
  const classes = classNames("section", className);

  return (
    <section className={classes} {...props}>
      {props.children}
    </section>
  );
}
