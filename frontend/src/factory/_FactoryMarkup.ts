import { ReactNode } from "react";
import { BlockConf } from "@/types/Block";

export interface FactoryMarkupInterface {
  render(): ReactNode;
}

export abstract class FactoryMarkup<T> implements FactoryMarkupInterface {
  protected conf: BlockConf<T>;

  public constructor(conf: BlockConf<T>) {
    this.conf = conf;
  }

  public getConf(): BlockConf<T> {
    return this.conf;
  }

  abstract render(): ReactNode;
}
