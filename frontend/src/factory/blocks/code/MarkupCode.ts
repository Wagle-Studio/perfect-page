import { ReactNode } from "react";
import { FactoryNotionCodeData } from "@/factory/types/NotionTypes";
import { FactoryBlockConf } from "@/factory/types/FactoryTypes";
import { FactoryMarkup } from "@/factory/_FactoryMarkup";
import { Code as Component } from "@/ui/factory/blocks/code/Code";

export class MarkupCode extends FactoryMarkup<FactoryNotionCodeData> {
  public constructor(conf: FactoryBlockConf<FactoryNotionCodeData>) {
    super(conf);
  }

  public render(): ReactNode {
    return Component(this.conf);
  }
}
