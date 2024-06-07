import { ReactNode } from "react";
import { BlockConf } from "@/types/Block";
import { FactoryMarkup } from "@/factory/_FactoryMarkup";
import { List as Component } from "@/components/factory/List";

export class MarkupList extends FactoryMarkup<null> {
  public constructor(conf: BlockConf<null>) {
    super(conf);
  }

  public render(): ReactNode {
    return Component(this.conf);
  }
}
