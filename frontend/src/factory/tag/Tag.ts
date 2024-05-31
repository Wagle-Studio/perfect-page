import { ReactNode } from "react";
import { MarkupConf } from "@/types/Markup";
import { FactoryInterface } from "@/factory/_Factory";
import { Tag as Component } from "@/components/Tag";

export class Tag implements FactoryInterface {
  protected conf: MarkupConf;

  public constructor(conf: MarkupConf) {
    this.conf = conf;
  }

  public render(): ReactNode {
    return Component(this.conf);
  }
}
