import { ReactNode } from "react";
import Link from "next/link";

export type LinkProps = {
  className?: string;
  href: string;
  children: ReactNode;
};

function LinkComponent(props: LinkProps) {
  return (
    <Link className={props.className} href={props.href}>
      {props.children}
    </Link>
  );
}

export { LinkComponent as Link };
