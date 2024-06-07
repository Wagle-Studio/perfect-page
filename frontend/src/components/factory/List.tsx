import { Fragment } from "react";
import { CustomBlockTypes, BlockConf } from "@/types/Block";
import "./list.scss";

export function List(props: BlockConf<null>) {
  let Tag: keyof JSX.IntrinsicElements | undefined = undefined;

  switch (props.type) {
    case CustomBlockTypes.BULLETED_LIST:
      Tag = "ul";
      break;
    case CustomBlockTypes.NUMBERED_LIST:
      Tag = "ol";
      break;
    case CustomBlockTypes.TODO_LIST:
      Tag = "ul";
      break;
    default:
      Tag = undefined;
      break;
  }

  return (
    <Fragment key={props.key}>
      {Tag && (
        <Tag className={`list list--${props.type}`}>{props.children}</Tag>
      )}
    </Fragment>
  );
}
