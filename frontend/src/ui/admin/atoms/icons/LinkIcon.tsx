import classNames from "classnames";
import { IconProps } from "@/ui/admin/atoms/icons/IconProps";
import "./icon.scss";

export function LinkIcon({ size, className, ...props }: IconProps) {
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
        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
      ></path>
    </svg>
  );
}
