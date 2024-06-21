import classNames from "classnames";
import { IconProps } from "@/ui/web/components/icons/IconProps";
import "./icon.scss";

export function EyeOpenIcon({ size, className, ...props }: IconProps) {
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
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      ></path>
    </svg>
  );
}