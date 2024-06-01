import { ReactNode } from "react";
import { FactoryInterface } from "@/factory/_Factory";
import { Error as Component } from "@/components/Error";

export class Error implements FactoryInterface<null> {
  public conf: null;

  public constructor(conf: null) {
    this.conf = conf;
  }

  public render(): ReactNode {
    return Component();
  }
}
