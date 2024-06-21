import { HTMLAttributes } from "react";
import classNames from "classnames";
import "./loader.scss";

export function Loader(props: HTMLAttributes<HTMLElement>) {
  const loaderClasses = classNames("loader", props.className);

  return (
    <div className={loaderClasses} {...props}>
      <div className="loader__circle"></div>
    </div>
  );
}
