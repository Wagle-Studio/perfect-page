import classNames from "classnames";
import { IconProps } from "@/ui/admin/atoms/icons/IconProps";
import "./icon.scss";

export function ThemeIcon({ size, className, ...props }: IconProps) {
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
        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
      ></path>
    </svg>
  );
}
