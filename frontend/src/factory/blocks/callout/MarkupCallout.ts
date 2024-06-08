import { ReactNode } from "react";
import { FactoryNotionCalloutData } from "@/factory/types/NotionTypes";
import { FactoryBlockConf } from "@/factory/types/FactoryTypes";
import { FactoryMarkup } from "@/factory/_FactoryMarkup";
import { Callout as Component } from "@/ui/factory/blocks/callout/Callout";

export class MarkupCallout extends FactoryMarkup<FactoryNotionCalloutData> {
  public constructor(conf: FactoryBlockConf<FactoryNotionCalloutData>) {
    super(conf);
  }

  public render(): ReactNode {
    return Component(this.conf);
  }
}
