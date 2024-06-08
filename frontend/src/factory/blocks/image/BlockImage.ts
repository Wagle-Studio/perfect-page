import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { FactoryNotionImageData } from "@/factory/types/NotionTypes";
import { FactoryNotionBlockTypes } from "@/factory/types/FactoryTypes";
import { FactoryBlock } from "@/factory/_FactoryBlock";
import { MarkupImage } from "@/factory/blocks/image/MarkupImage";

export class BlockImage extends FactoryBlock<FactoryNotionImageData> {
  public constructor(block: BlockObjectResponse) {
    super(block.type as FactoryNotionBlockTypes, block, undefined);
  }

  public createMarkup() {
    return new MarkupImage(this.conf);
  }
}
