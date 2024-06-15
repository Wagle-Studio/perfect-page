import classNames from "classnames";
import { IconProps } from "@/ui/web/components/icons/IconProps";
import "./icon.scss";

export function PageIcon({ size, className, ...props }: IconProps) {
  const iconClasses = classNames("icon", `icon--${size}`, className);

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
        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
      ></path>
    </svg>
  );
}
