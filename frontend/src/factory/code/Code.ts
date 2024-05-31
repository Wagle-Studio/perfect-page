import { ReactNode } from "react";
import { MarkupConf } from "@/types/Markup";
import { FactoryInterface } from "@/factory/_Factory";
import { Code as Component } from "@/components/Code";

export class Code implements FactoryInterface {
  protected conf: MarkupConf;

  public constructor(conf: MarkupConf) {
    this.conf = conf;
  }

  public render(): ReactNode {
    return Component(this.conf);
  }
}
