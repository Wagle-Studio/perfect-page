import { IconProps } from "@/ui/web/components/icons/IconProps";
import "./icon.scss";

export function MenuIcon(props: IconProps) {
  return (
    <svg
      className={`icon icon--${props.size}`}
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );
}
