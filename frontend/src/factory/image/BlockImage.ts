import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionBlockTypes, NotionImageData } from "@/types/Block";
import { FactoryBlock } from "@/factory/_FactoryBlock";
import { MarkupImage } from "@/factory/image/MarkupImage";

export class BlockImage extends FactoryBlock<NotionImageData> {
  public constructor(block: BlockObjectResponse) {
    super(block.type as NotionBlockTypes, block, undefined);
  }

  public createMarkup() {
    return new MarkupImage(this.conf);
  }
}
