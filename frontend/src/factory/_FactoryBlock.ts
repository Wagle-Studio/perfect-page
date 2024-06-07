import { ReactNode } from "react";
import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import {
  BlockConf,
  NotionBlockTypes,
  CustomBlockTypes,
  AbstractBlock,
  NotionBlockData,
} from "@/types/Block";
import { AbstractMarkup } from "@/types/Markup";

export abstract class FactoryBlock<T> {
  protected conf: BlockConf<T>;

  public constructor(
    type: NotionBlockTypes | CustomBlockTypes,
    block: BlockObjectResponse | undefined,
    children: AbstractBlock[] | undefined
  ) {
    this.conf = this._generateConf(type, block, children);
  }

  protected abstract createMarkup(): AbstractMarkup;

  public getConf(): BlockConf<T> | undefined {
    return this.conf;
  }

  public render(): ReactNode {
    return this.createMarkup().render();
  }

  private _generateConf(
    type: NotionBlockTypes | CustomBlockTypes,
    block?: BlockObjectResponse,
    children?: AbstractBlock[]
  ): BlockConf<T> {
    return {
      key: Math.floor(Math.random() * (1000000 - 100 + 1)) + 100,
      type,
      data: (block && block[block.type as keyof NotionBlockData]) ?? undefined,
      children: children?.map((child) => child.createMarkup().render()),
    };
  }
}
