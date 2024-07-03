import classNames from "classnames";
import { IconProps } from "@/ui/admin/atoms/icons/IconProps";
import "./icon.scss";

export function EditIcon({ size, className, ...props }: IconProps) {
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
        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
      ></path>
    </svg>
  );
}
