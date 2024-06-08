import { FactoryBlockConf } from "@/factory/types/FactoryTypes";
import { FactoryNotionQuoteData } from "@/factory/types/NotionTypes";
import { RichText } from "@/ui/factory/components/richText/RichText";
import "./quote.scss";

export function Quote(props: FactoryBlockConf<FactoryNotionQuoteData>) {
  return (
    <blockquote key={props.key} className="quote">
      {props.data?.rich_text.map((rich_text, index) => (
        <RichText key={props.key + "_" + index} content={rich_text} />
      ))}
    </blockquote>
  );
}
