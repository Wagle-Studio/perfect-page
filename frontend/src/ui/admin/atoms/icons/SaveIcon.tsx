import classNames from "classnames";
import { IconProps } from "@/ui/admin/atoms/icons/IconProps";
import "./icon.scss";

export function SaveIcon({ size, className, ...props }: IconProps) {
  const iconClasses = classNames(
    "admin__icon",
    `admin__icon--${size}`,
    className
  );

  return (
    <svg
      className={iconClasses}
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
      ></path>
    </svg>
  );
}
