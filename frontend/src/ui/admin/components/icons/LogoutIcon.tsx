import classNames from "classnames";
import { IconProps } from "@/ui/web/components/icons/IconProps";
import "./icon.scss";

export function LogoutIcon({ size, className, ...props }: IconProps) {
  const iconClasses = classNames("admin__icon", `admin__icon--${size}`, className);

  return (
    <svg
      className={iconClasses}
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
      ></path>
    </svg>
  );
}
