import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionBlockTypes, NotionCalloutData } from "@/types/Block";
import { FactoryBlock } from "@/factory/_FactoryBlock";
import { MarkupCallout } from "@/factory/callout/MarkupCallout";

export class BlockCallout extends FactoryBlock<NotionCalloutData> {
  public constructor(block: BlockObjectResponse) {
    super(block.type as NotionBlockTypes, block, undefined);
  }

  public createMarkup() {
    return new MarkupCallout(this.conf);
  }
}
