import { ReactNode } from "react";
import { FactoryBlockConf } from "@/factory/types/FactoryTypes";
import { FactoryMarkup } from "@/factory/_FactoryMarkup";
import { List as Component } from "@/ui/factory/blocks/list/List";

export class MarkupList extends FactoryMarkup<null> {
  public constructor(conf: FactoryBlockConf<null>) {
    super(conf);
  }

  public render(): ReactNode {
    return Component(this.conf);
  }
}
