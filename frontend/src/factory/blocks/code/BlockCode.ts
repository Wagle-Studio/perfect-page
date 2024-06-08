import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { FactoryNotionCodeData } from "@/factory/types/NotionTypes";
import { FactoryNotionBlockTypes } from "@/factory/types/FactoryTypes";
import { FactoryBlock } from "@/factory/_FactoryBlock";
import { MarkupCode } from "@/factory/blocks/code/MarkupCode";

export class BlockCode extends FactoryBlock<FactoryNotionCodeData> {
  public constructor(block: BlockObjectResponse) {
    super(block.type as FactoryNotionBlockTypes, block, undefined);
  }

  public createMarkup() {
    return new MarkupCode(this.conf);
  }
}
