import { ReactNode } from "react";
import {
  FactoryNotionHeadingData,
  FactoryNotionParagraphData,
} from "@/factory/types/NotionTypes";
import { FactoryBlockConf } from "@/factory/types/FactoryTypes";
import { FactoryMarkup } from "@/factory/_FactoryMarkup";
import { Typo as Component } from "@/ui/factory/blocks/typo/Typo";

export class MarkupTypo extends FactoryMarkup<
  FactoryNotionHeadingData | FactoryNotionParagraphData
> {
  public constructor(
    conf: FactoryBlockConf<
      FactoryNotionHeadingData | FactoryNotionParagraphData
    >
  ) {
    super(conf);
  }

  public render(): ReactNode {
    return Component(this.conf);
  }
}
