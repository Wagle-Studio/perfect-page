import { HTMLAttributes } from "react";
import "./section.scss";

export function Section({ className, ...props }: HTMLAttributes<HTMLElement>) {
  let classes = ["section"];

  if (className) {
    classes = [...classes, className];
  }

  return (
    <section className={classes.join(" ")} {...props}>
      {props.children}
    </section>
  );
}
