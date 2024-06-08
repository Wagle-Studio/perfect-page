import { Fragment } from "react";
import {
  FactoryBlockConf,
  FactoryNotionBlockTypes,
} from "@/factory/types/FactoryTypes";
import {
  FactoryNotionHeadingData,
  FactoryNotionParagraphData,
} from "@/factory/types/NotionTypes";
import { RichText } from "@/ui/factory/components/RichText";
import "./typo.scss";

export function Typo(
  props: FactoryBlockConf<FactoryNotionHeadingData | FactoryNotionParagraphData>
) {
  let Tag: keyof JSX.IntrinsicElements | undefined = undefined;

  switch (props.type) {
    case FactoryNotionBlockTypes.HEADING_1:
      Tag = "h1";
      break;
    case FactoryNotionBlockTypes.HEADING_2:
      Tag = "h2";
      break;
    case FactoryNotionBlockTypes.HEADING_3:
      Tag = "h3";
      break;
    case FactoryNotionBlockTypes.BULLETED_LIST_ITEM:
    case FactoryNotionBlockTypes.NUMBERED_LIST_ITEM:
      Tag = "li";
      break;
    case FactoryNotionBlockTypes.PARAGRAPH:
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
