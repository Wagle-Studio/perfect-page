import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import {
  NotionBlockTypes,
  NotionHeadingData,
  NotionParagraphData,
} from "@/types/Block";
import { FactoryBlock } from "@/factory/_FactoryBlock";
import { MarkupTypo } from "@/factory/typo/MarkupTypo";

export class BlockTypo extends FactoryBlock<
  NotionHeadingData | NotionParagraphData
> {
  public constructor(block: BlockObjectResponse) {
    super(block.type as NotionBlockTypes, block, undefined);
  }

  public createMarkup() {
    return new MarkupTypo(this.conf);
  }
}
