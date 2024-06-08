import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { blockParser } from "@/factory/Factory";
import "./factory_page.scss";

type FactoryPageProps = {
  blocks: BlockObjectResponse[];
};

export function FactoryPage(props: FactoryPageProps) {
  return (
    <article className="article">
      {props.blocks && blockParser(props.blocks).map((block) => block.render())}
    </article>
  );
}
