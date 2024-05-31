import { ReactNode } from "react";
import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { BlockTags, BlockTypes } from "@/types/Block";
import { Markup, MarkupConf } from "@/types/Markup";

export interface FactoryInterface {
  render(): ReactNode;
}

export abstract class Factory {
  protected conf: MarkupConf;

  public constructor(conf: MarkupConf) {
    this.conf = conf;
  }

  protected abstract createMarkup(): Markup;

  public getConf(): MarkupConf {
    return this.conf;
  }

  public render(): ReactNode {
    const markup: Markup = this.createMarkup();
    return markup.render();
  }

  public static buildConfFromBlock(block: BlockObjectResponse): MarkupConf {
    return {
      key: this._getRandomKey(),
      type: this._getType(block.type),
      tag: this._getTag(block.type),
      content: this._getContent(block),
    };
  }

  public static buildConfFromCustom(
    type: BlockTypes,
    content: string | ReactNode
  ): MarkupConf {
    return {
      key: this._getRandomKey(),
      type: this._getType(type),
      tag: this._getTag(type),
      content,
    };
  }

  private static _getRandomKey(): number {
    return Math.floor(Math.random() * (10000 - 100 + 1)) + 100;
  }

  private static _getType(type: string): MarkupConf["type"] {
    switch (type) {
      case BlockTypes.HEADING_1:
        return BlockTypes.HEADING_1;
      case BlockTypes.HEADING_2:
        return BlockTypes.HEADING_2;
      case BlockTypes.HEADING_3:
        return BlockTypes.HEADING_3;
      case BlockTypes.PARAGRAPH:
        return BlockTypes.PARAGRAPH;
      case BlockTypes.UNORDERED_LIST:
        return BlockTypes.UNORDERED_LIST;
      case BlockTypes.ORDERED_LIST:
        return BlockTypes.ORDERED_LIST;
      case BlockTypes.UNORDERED_LIST_ITEM:
        return BlockTypes.UNORDERED_LIST_ITEM;
      case BlockTypes.ORDERED_LIST_ITEM:
        return BlockTypes.ORDERED_LIST_ITEM;
      case BlockTypes.CODE:
        return BlockTypes.CODE;
      default:
        throw new Error("Unsupported block type.");
    }
  }

  private static _getTag(type: string): MarkupConf["tag"] {
    switch (type) {
      case BlockTypes.HEADING_1:
        return BlockTags.HEADING_1;
      case BlockTypes.HEADING_2:
        return BlockTags.HEADING_2;
      case BlockTypes.HEADING_3:
        return BlockTags.HEADING_3;
      case BlockTypes.PARAGRAPH:
        return BlockTags.PARAGRAPH;
      case BlockTypes.UNORDERED_LIST:
        return BlockTags.UNORDERED_LIST;
      case BlockTypes.ORDERED_LIST:
        return BlockTags.ORDERED_LIST;
      case BlockTypes.UNORDERED_LIST_ITEM:
        return BlockTags.LIST_ITEM;
      case BlockTypes.ORDERED_LIST_ITEM:
        return BlockTags.LIST_ITEM;
      case BlockTypes.CODE:
        return BlockTags.CODE;
      default:
        throw new Error("Unsupported block type.");
    }
  }

  private static _getContent(block: BlockObjectResponse): string {
    switch (block.type) {
      case BlockTypes.HEADING_1:
        return block.heading_1?.rich_text?.[0]?.plain_text || "";
      case BlockTypes.HEADING_2:
        return block.heading_2?.rich_text?.[0]?.plain_text || "";
      case BlockTypes.HEADING_3:
        return block.heading_3?.rich_text?.[0]?.plain_text || "";
      case BlockTypes.PARAGRAPH:
        return block.paragraph?.rich_text?.[0]?.plain_text || "";
      case BlockTypes.UNORDERED_LIST_ITEM:
        return block.bulleted_list_item?.rich_text?.[0]?.plain_text || "";
      case BlockTypes.ORDERED_LIST_ITEM:
        return block.numbered_list_item?.rich_text?.[0]?.plain_text || "";
      case BlockTypes.CODE:
        return block.code?.rich_text?.[0]?.plain_text || "";
      default:
        throw new Error("Unsupported block type.");
    }
  }
}
