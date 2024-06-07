import { ReactNode } from "react";
import {
  BlockConf,
  NotionHeadingData,
  NotionParagraphData,
} from "@/types/Block";
import { FactoryMarkup } from "@/factory/_FactoryMarkup";
import { Typo as Component } from "@/components/factory/Typo";

export class MarkupTypo extends FactoryMarkup<
  NotionHeadingData | NotionParagraphData
> {
  public constructor(conf: BlockConf<NotionHeadingData | NotionParagraphData>) {
    super(conf);
  }

  public render(): ReactNode {
    return Component(this.conf);
  }
}
