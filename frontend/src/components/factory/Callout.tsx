import { BlockConf, NotionCalloutData } from "@/types/Block";
import "./callout.scss";

export function Callout(props: BlockConf<NotionCalloutData>) {
  return (
    <div key={props.key} className="callout">
      <span className="callout__icon">{props.data?.icon.emoji}</span>
      <p className="callout__content">{props.data?.rich_text[0].plain_text}</p>
    </div>
  );
}
