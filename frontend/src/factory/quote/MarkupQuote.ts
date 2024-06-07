import { ReactNode } from "react";
import { BlockConf, NotionQuoteData } from "@/types/Block";
import { FactoryMarkup } from "@/factory/_FactoryMarkup";
import { Quote as Component } from "@/components/factory/Quote";

export class MarkupQuote extends FactoryMarkup<NotionQuoteData> {
  public constructor(conf: BlockConf<NotionQuoteData>) {
    super(conf);
  }

  public render(): ReactNode {
    return Component(this.conf);
  }
}
