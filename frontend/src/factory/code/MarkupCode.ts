import { ReactNode } from "react";
import { BlockConf, NotionCodeData } from "@/types/Block";
import { FactoryMarkup } from "@/factory/_FactoryMarkup";
import { Code as Component } from "@/components/factory/Code";

export class MarkupCode extends FactoryMarkup<NotionCodeData> {
  public constructor(conf: BlockConf<NotionCodeData>) {
    super(conf);
  }

  public render(): ReactNode {
    return Component(this.conf);
  }
}
