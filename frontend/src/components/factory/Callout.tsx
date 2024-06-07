import { BlockConf, NotionCalloutData } from "@/types/Block";
import { RichText } from "@/components/factory/RichText";
import "./callout.scss";

export function Callout(props: BlockConf<NotionCalloutData>) {
  return (
    <div key={props.key} className="callout">
      <span className="callout__icon">{props.data?.icon.emoji}</span>
      <p className="callout__content">
        {props.data?.rich_text.map((rich_text, index) => (
          <RichText key={props.key + "_" + index} content={rich_text} />
        ))}
      </p>
    </div>
  );
}
