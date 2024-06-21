import { HTMLAttributes } from "react";
import classNames from "classnames";
import "./toast.scss";

export type ToastProps = {
  title: string;
  message: string;
} & HTMLAttributes<HTMLElement>;

export function Toast({ className, ...props }: ToastProps) {
  const toastClasses = classNames("admin__toast", className);

  return (
    <div className={toastClasses} {...props}>
      <p className="admin__toast__title">{props.title}</p>
      <p className="admin__toast__message">{props.message}</p>
    </div>
  );
}
