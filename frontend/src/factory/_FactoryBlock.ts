import { ReactNode } from "react";
import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { BlockTags, NotionBlockTypes, CustomBlockTypes } from "@/types/Block";
import { AbstractMarkup, MarkupConf } from "@/types/Markup";

export interface FactoryBlockInterface<ComponentConf> {
  conf: ComponentConf;
  render(): ReactNode;
}

export abstract class FactoryBlock {
  protected conf: MarkupConf;

  public constructor(conf: MarkupConf) {
    this.conf = conf;
  }

  protected abstract createMarkup(): AbstractMarkup;

  public getConf(): MarkupConf {
    return this.conf;
  }

  public render(): ReactNode {
    const markup: AbstractMarkup = this.createMarkup();
    return markup.render();
  }

  public static buildConfFromBlock(block: BlockObjectResponse): MarkupConf {
    return {
      key: this._getRandomKey(),
      type: this._getType(block.type),
      tag: this._getTag(block.type),
      content: this._getContent(block),
      code_language: this._getCodeLanguage(block),
      todo_check: this._getTodoState(block),
      image_url: this._getImageUrl(block),
      callout_icon: this._getCalloutIcon(block),
    };
  }

  public static buildConfFromCustom(
    type: CustomBlockTypes,
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

  private static _getType(type: string): MarkupConf["type"] | undefined {
    switch (type) {
      case NotionBlockTypes.HEADING_1:
        return NotionBlockTypes.HEADING_1;
      case NotionBlockTypes.HEADING_2:
        return NotionBlockTypes.HEADING_2;
      case NotionBlockTypes.HEADING_3:
        return NotionBlockTypes.HEADING_3;
      case NotionBlockTypes.PARAGRAPH:
        return NotionBlockTypes.PARAGRAPH;
      case CustomBlockTypes.UNORDERED_LIST:
        return CustomBlockTypes.UNORDERED_LIST;
      case CustomBlockTypes.ORDERED_LIST:
        return CustomBlockTypes.ORDERED_LIST;
      case NotionBlockTypes.BULLETED_LIST_ITEM:
        return NotionBlockTypes.BULLETED_LIST_ITEM;
      case NotionBlockTypes.NUMBERED_LIST_ITEM:
        return NotionBlockTypes.NUMBERED_LIST_ITEM;
      case NotionBlockTypes.CODE:
        return NotionBlockTypes.CODE;
      case NotionBlockTypes.TODO:
        return NotionBlockTypes.TODO;
      case NotionBlockTypes.QUOTE:
        return NotionBlockTypes.QUOTE;
      case NotionBlockTypes.CALLOUT:
        return NotionBlockTypes.CALLOUT;
      default:
        undefined;
    }
  }

  private static _getTag(type: string): MarkupConf["tag"] | undefined {
    switch (type) {
      case NotionBlockTypes.HEADING_1:
        return BlockTags.HEADING_1;
      case NotionBlockTypes.HEADING_2:
        return BlockTags.HEADING_2;
      case NotionBlockTypes.HEADING_3:
        return BlockTags.HEADING_3;
      case NotionBlockTypes.PARAGRAPH:
        return BlockTags.PARAGRAPH;
      case CustomBlockTypes.UNORDERED_LIST:
        return BlockTags.UNORDERED_LIST;
      case CustomBlockTypes.ORDERED_LIST:
        return BlockTags.ORDERED_LIST;
      case NotionBlockTypes.BULLETED_LIST_ITEM:
        return BlockTags.LIST_ITEM;
      case NotionBlockTypes.NUMBERED_LIST_ITEM:
        return BlockTags.LIST_ITEM;
      default:
        return undefined;
    }
  }

  private static _getContent(block: BlockObjectResponse): string | undefined {
    switch (block.type) {
      case NotionBlockTypes.HEADING_1:
        return block.heading_1?.rich_text?.[0]?.plain_text;
      case NotionBlockTypes.HEADING_2:
        return block.heading_2?.rich_text?.[0]?.plain_text;
      case NotionBlockTypes.HEADING_3:
        return block.heading_3?.rich_text?.[0]?.plain_text;
      case NotionBlockTypes.PARAGRAPH:
        return block.paragraph?.rich_text?.[0]?.plain_text;
      case NotionBlockTypes.BULLETED_LIST_ITEM:
        return block.bulleted_list_item?.rich_text?.[0]?.plain_text;
      case NotionBlockTypes.NUMBERED_LIST_ITEM:
        return block.numbered_list_item?.rich_text?.[0]?.plain_text;
      case NotionBlockTypes.CODE:
        return block.code?.rich_text?.[0]?.plain_text;
      case NotionBlockTypes.TODO:
        return block.to_do?.rich_text?.[0]?.plain_text;
      case NotionBlockTypes.IMAGE:
        return block.image?.caption?.[0]?.plain_text;
      case NotionBlockTypes.QUOTE:
        return block.quote?.rich_text?.[0]?.plain_text;
      case NotionBlockTypes.CALLOUT:
        return block.callout?.rich_text?.[0]?.plain_text;
      default:
        return undefined;
    }
  }

  private static _getCodeLanguage(
    block: BlockObjectResponse
  ): string | undefined {
    switch (block.type) {
      case NotionBlockTypes.CODE:
        return block.code?.language;
      default:
        return undefined;
    }
  }

  private static _getTodoState(
    block: BlockObjectResponse
  ): boolean | undefined {
    switch (block.type) {
      case NotionBlockTypes.TODO:
        return block.to_do?.checked;
      default:
        return undefined;
    }
  }

  private static _getImageUrl(block: BlockObjectResponse): string | undefined {
    switch (block.type) {
      case NotionBlockTypes.IMAGE:
        const image = block.image as any;
        return image.external?.url;
      default:
        return undefined;
    }
  }

  private static _getCalloutIcon(
    block: BlockObjectResponse
  ): string | undefined {
    switch (block.type) {
      case NotionBlockTypes.CALLOUT:
        const icon = block.callout?.icon as any;
        return icon.emoji;
      default:
        return undefined;
    }
  }
}
