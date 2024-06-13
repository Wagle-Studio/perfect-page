import { ReactNode } from "react";
import "./button.scss";

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  severity: "invisible";
};

export function Button(props: ButtonProps) {
  return (
    <button
      className={`button button--${props.severity}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
