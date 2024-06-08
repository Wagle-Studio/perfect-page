import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { FactoryNotionCalloutData } from "@/factory/types/NotionTypes";
import { FactoryNotionBlockTypes } from "@/factory/types/FactoryTypes";
import { FactoryBlock } from "@/factory/_FactoryBlock";
import { MarkupCallout } from "@/factory/blocks/callout/MarkupCallout";

export class BlockCallout extends FactoryBlock<FactoryNotionCalloutData> {
  public constructor(block: BlockObjectResponse) {
    super(block.type as FactoryNotionBlockTypes, block, undefined);
  }

  public createMarkup() {
    return new MarkupCallout(this.conf);
  }
}
