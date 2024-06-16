import { FactoryBlockConf } from "@/factory/types/FactoryTypes";
import { FactoryNotionCalloutData } from "@/factory/types/NotionTypes";
import { RichText } from "@/ui/factory/components/richText/RichText";
import "./callout.scss";

export function Callout(props: FactoryBlockConf<FactoryNotionCalloutData>) {
  return (
    <div key={props.key} className="factory__callout">
      <span className="factory__callout__icon">{props.data?.icon.emoji}</span>
      <p className="factory__callout__content">
        {props.data?.rich_text.map((rich_text, index) => (
          <RichText key={props.key + "_" + index} content={rich_text} />
        ))}
      </p>
    </div>
  );
}
