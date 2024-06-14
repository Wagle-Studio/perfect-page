import classNames from "classnames";
import { IconProps } from "@/ui/web/components/icons/IconProps";
import "./icon.scss";

export function CrossIcon({ size, className, ...props }: IconProps) {
  const iconClasses = classNames("icon", `icon--${size}`, className);

  return (
    <svg className={iconClasses} viewBox="0 0 512 512" {...props}>
      <path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path>
    </svg>
  );
}
