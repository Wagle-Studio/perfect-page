import { Fragment } from "react";
import {
  FactoryCustomBlockTypes,
  FactoryBlockConf,
} from "@/factory/types/FactoryTypes";
import "./list.scss";

export function List(props: FactoryBlockConf<null>) {
  let Tag: keyof JSX.IntrinsicElements | undefined = undefined;

  switch (props.type) {
    case FactoryCustomBlockTypes.BULLETED_LIST:
      Tag = "ul";
      break;
    case FactoryCustomBlockTypes.NUMBERED_LIST:
      Tag = "ol";
      break;
    case FactoryCustomBlockTypes.TODO_LIST:
      Tag = "ul";
      break;
    default:
      Tag = undefined;
      break;
  }

  return (
    <Fragment key={props.key}>
      {Tag && (
        <Tag className={`factory__list factory__list--${props.type}`}>{props.children}</Tag>
      )}
    </Fragment>
  );
}
