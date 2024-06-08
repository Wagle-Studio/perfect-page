import { ReactNode } from "react";
import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import {
  FactoryBlockConf,
  FactoryNotionBlockTypes,
  FactoryCustomBlockTypes,
  FactoryAbstractBlock,
  FactoryAbstractMarkup,
} from "@/factory/types/FactoryTypes";
import { FactoryNotionBlockData } from "./types/NotionTypes";

export abstract class FactoryBlock<T> {
  protected conf: FactoryBlockConf<T>;

  public constructor(
    type: FactoryNotionBlockTypes | FactoryCustomBlockTypes,
    block: BlockObjectResponse | undefined,
    children: FactoryAbstractBlock[] | undefined
  ) {
    this.conf = this._generateConf(type, block, children);
  }

  protected abstract createMarkup(): FactoryAbstractMarkup;

  public getConf(): FactoryBlockConf<T> | undefined {
    return this.conf;
  }

  public render(): ReactNode {
    return this.createMarkup().render();
  }

  private _generateConf(
    type: FactoryNotionBlockTypes | FactoryCustomBlockTypes,
    block?: BlockObjectResponse,
    children?: FactoryAbstractBlock[]
  ): FactoryBlockConf<T> {
    return {
      key: Math.floor(Math.random() * (1000000 - 100 + 1)) + 100,
      type,
      data:
        (block && block[block.type as keyof FactoryNotionBlockData]) ??
        undefined,
      children: children?.map((child) => child.createMarkup().render()),
    };
  }
}
