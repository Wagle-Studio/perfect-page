import { ReactNode } from "react";
import { FactoryNotionQuoteData } from "@/factory/types/NotionTypes";
import { FactoryBlockConf } from "@/factory/types/FactoryTypes";
import { FactoryMarkup } from "@/factory/_FactoryMarkup";
import { Quote as Component } from "@/ui/factory/blocks/quote/Quote";

export class MarkupQuote extends FactoryMarkup<FactoryNotionQuoteData> {
  public constructor(conf: FactoryBlockConf<FactoryNotionQuoteData>) {
    super(conf);
  }

  public render(): ReactNode {
    return Component(this.conf);
  }
}
