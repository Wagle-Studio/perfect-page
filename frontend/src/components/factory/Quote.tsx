import { BlockConf, NotionQuoteData } from "@/types/Block";
import "./quote.scss";

export function Quote(props: BlockConf<NotionQuoteData>) {
  return (
    <blockquote key={props.key} className="quote">
      {props.data?.rich_text[0].plain_text}
    </blockquote>
  );
}
