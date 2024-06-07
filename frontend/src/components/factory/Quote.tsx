import { BlockConf, NotionQuoteData } from "@/types/Block";
import { RichText } from "@/components/factory/RichText";
import "./quote.scss";

export function Quote(props: BlockConf<NotionQuoteData>) {
  return (
    <blockquote key={props.key} className="quote">
      {props.data?.rich_text.map((rich_text, index) => (
        <RichText key={props.key + "_" + index} content={rich_text} />
      ))}
    </blockquote>
  );
}
