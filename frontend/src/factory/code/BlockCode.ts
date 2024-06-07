import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionBlockTypes, NotionCodeData } from "@/types/Block";
import { FactoryBlock } from "@/factory/_FactoryBlock";
import { MarkupCode } from "@/factory/code/MarkupCode";

export class BlockCode extends FactoryBlock<NotionCodeData> {
  public constructor(block: BlockObjectResponse) {
    super(block.type as NotionBlockTypes, block, undefined);
  }

  public createMarkup() {
    return new MarkupCode(this.conf);
  }
}
