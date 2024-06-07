import { ReactNode } from "react";
import { BlockConf, NotionCalloutData } from "@/types/Block";
import { FactoryMarkup } from "@/factory/_FactoryMarkup";
import { Callout as Component } from "@/components/factory/Callout";

export class MarkupCallout extends FactoryMarkup<NotionCalloutData> {
  public constructor(conf: BlockConf<NotionCalloutData>) {
    super(conf);
  }

  public render(): ReactNode {
    return Component(this.conf);
  }
}
