import { Fragment } from "react";
import {
  BlockConf,
  NotionBlockTypes,
  NotionHeadingData,
  NotionParagraphData,
} from "@/types/Block";
import { RichText } from "@/components/factory/RichText";
import "./typo.scss";

export function Typo(
  props: BlockConf<NotionHeadingData | NotionParagraphData>
) {
  let Tag: keyof JSX.IntrinsicElements | undefined = undefined;

  switch (props.type) {
    case NotionBlockTypes.HEADING_1:
      Tag = "h1";
      break;
    case NotionBlockTypes.HEADING_2:
      Tag = "h2";
      break;
    case NotionBlockTypes.HEADING_3:
      Tag = "h3";
      break;
    case NotionBlockTypes.BULLETED_LIST_ITEM:
    case NotionBlockTypes.NUMBERED_LIST_ITEM:
      Tag = "li";
      break;
    case NotionBlockTypes.PARAGRAPH:
      Tag = "p";
      break;
    default:
      Tag = undefined;
      break;
  }

  return (
    <Fragment key={props.key}>
      {Tag && (
        <Tag className={`typo--${props.type}`}>
          {props.data?.rich_text.map((rich_text, index) => (
            <RichText key={props.key + "_" + index} content={rich_text} />
          ))}
        </Tag>
      )}
    </Fragment>
  );
}
