import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import {
  FactoryNotionHeadingData,
  FactoryNotionParagraphData,
} from "@/factory/types/NotionTypes";
import { FactoryNotionBlockTypes } from "@/factory/types/FactoryTypes";
import { FactoryBlock } from "@/factory/_FactoryBlock";
import { MarkupTypo } from "@/factory/blocks/typo/MarkupTypo";

export class BlockTypo extends FactoryBlock<
  FactoryNotionHeadingData | FactoryNotionParagraphData
> {
  public constructor(block: BlockObjectResponse) {
    super(block.type as FactoryNotionBlockTypes, block, undefined);
  }

  public createMarkup() {
    return new MarkupTypo(this.conf);
  }
}
