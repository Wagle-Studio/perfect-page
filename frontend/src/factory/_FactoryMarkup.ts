import { ReactNode } from "react";
import { FactoryBlockConf } from "@/factory/types/FactoryTypes";

export interface FactoryMarkupInterface {
  render(): ReactNode;
}

export abstract class FactoryMarkup<T> implements FactoryMarkupInterface {
  protected conf: FactoryBlockConf<T>;

  public constructor(conf: FactoryBlockConf<T>) {
    this.conf = conf;
  }

  public getConf(): FactoryBlockConf<T> {
    return this.conf;
  }

  abstract render(): ReactNode;
}
