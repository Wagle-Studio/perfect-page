import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { FactoryNotionQuoteData } from "@/factory/types/NotionTypes";
import { FactoryNotionBlockTypes } from "@/factory/types/FactoryTypes";
import { FactoryBlock } from "@/factory/_FactoryBlock";
import { MarkupQuote } from "@/factory/blocks/quote/MarkupQuote";

export class BlockQuote extends FactoryBlock<FactoryNotionQuoteData> {
  public constructor(block: BlockObjectResponse) {
    super(block.type as FactoryNotionBlockTypes, block, undefined);
  }

  public createMarkup() {
    return new MarkupQuote(this.conf);
  }
}
