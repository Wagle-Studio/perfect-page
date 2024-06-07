import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionBlockTypes, NotionQuoteData } from "@/types/Block";
import { FactoryBlock } from "@/factory/_FactoryBlock";
import { MarkupQuote } from "@/factory/quote/MarkupQuote";

export class BlockQuote extends FactoryBlock<NotionQuoteData> {
  public constructor(block: BlockObjectResponse) {
    super(block.type as NotionBlockTypes, block, undefined);
  }

  public createMarkup() {
    return new MarkupQuote(this.conf);
  }
}
