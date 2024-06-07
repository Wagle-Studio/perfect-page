import { ReactNode } from "react";
import "./typo.scss";
import Link from "next/link";

export type LinkProps = {
  href: string;
  children: ReactNode;
};

function LinkComponent(props: LinkProps) {
  return <Link href={props.href}>{props.children}</Link>;
}

export { LinkComponent as Link };
