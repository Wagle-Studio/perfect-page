import { HTMLAttributes } from "react";

export type IconProps = {
  size: "small" | "medium" | "large";
} & HTMLAttributes<HTMLOrSVGElement>;
