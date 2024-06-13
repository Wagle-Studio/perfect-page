import Link from "next/link";
import "./link.scss";

type LinkProps = {
  href: string;
  content: string;
  variant?: "button";
  severity?: "gray" | "black";
};

function LinkComponent(props: LinkProps) {
  let classes = ["link"];

  if (props.variant) classes = [...classes, `link--${props.variant}`];
  if (props.severity) classes = [...classes, `link--${props.severity}`];

  return (
    <Link className={classes.join(" ")} href={props.href}>
      {props.content}
    </Link>
  );
}

export { LinkComponent as Link };
