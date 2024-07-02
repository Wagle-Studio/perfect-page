import classNames from "classnames";
import { IconProps } from "@/ui/admin/atoms/icons/IconProps";
import "./icon.scss";

export function PlusIcon({ size, className, ...props }: IconProps) {
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
        d="M12 4v16m8-8H4"
      ></path>
    </svg>
  );
}
