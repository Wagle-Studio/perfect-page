import { ReactNode } from "react";
import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionBlockTypes, CustomBlockTypes } from "@/types/Block";
import { AbstractMarkup } from "@/types/Markup";
import { AbstractTypo } from "@/factory/typo/AbstractTypo";
import { AbstractList } from "@/factory/list/AbstractList";
import { AbstractCode } from "@/factory/code/AbstractCode";

export function blockParser(blocks: BlockObjectResponse[]): AbstractMarkup[] {
  let markups: AbstractMarkup[] = [];
  let unorderedListItems: AbstractMarkup[] = [];
  let orderedListItems: AbstractMarkup[] = [];

  blocks.forEach((block) => {
    // Creates and stacks markups for unordered list items in Notion block.
    if (block.type === NotionBlockTypes.UNORDERED_LIST_ITEM) {
      const markup = createMarkupInstanceFromBlock(block);

      if (markup) {
        unorderedListItems = [...unorderedListItems, markup];
      }
    }

    // Creates and stacks markups for ordered list items in Notion block.
    if (block.type === NotionBlockTypes.ORDERED_LIST_ITEM) {
      const markup = createMarkupInstanceFromBlock(block);

      if (markup) {
        orderedListItems = [...orderedListItems, markup];
      }
    }

    if (
      block.type !== NotionBlockTypes.UNORDERED_LIST_ITEM &&
      block.type !== NotionBlockTypes.ORDERED_LIST_ITEM
    ) {
      // Creates and stacks markup for unordered list in current markups stack.
      if (unorderedListItems.length > 0) {
        const markup = createMarkupInstanceFromCustom(
          CustomBlockTypes.UNORDERED_LIST,
          unorderedListItems.map((item) => item.render())
        );

        if (markup) {
          markups = [...markups, markup];
          unorderedListItems = [];
        }
      }

      // Creates and stacks markup for ordered list in current markups stack.
      if (orderedListItems.length > 0) {
        const markup = createMarkupInstanceFromCustom(
          CustomBlockTypes.ORDERED_LIST,
          orderedListItems.map((item) => item.render())
        );

        if (markup) {
          markups = [...markups, markup];
          orderedListItems = [];
        }
      }

      // Creates and stacks markup for code block in current markups stack.
      if (block.type === NotionBlockTypes.CODE) {
        const markup = createMarkupInstanceFromBlock(block);

        if (markup) {
          markups = [...markups, markup];
        }
      }

      if (
        block.type === NotionBlockTypes.HEADING_1 ||
        block.type === NotionBlockTypes.HEADING_2 ||
        block.type === NotionBlockTypes.HEADING_3 ||
        block.type === NotionBlockTypes.PARAGRAPH
      ) {
        const markup = createMarkupInstanceFromBlock(block);

        if (markup) {
          markups = [...markups, markup];
        }
      }
    }
  });

  // Creates and stacks markup for unordered list in current markups stack.
  if (unorderedListItems.length > 0) {
    const markup = createMarkupInstanceFromCustom(
      CustomBlockTypes.UNORDERED_LIST,
      unorderedListItems.map((item) => item.render())
    );

    if (markup) {
      markups = [...markups, markup];
      unorderedListItems = [];
    }
  }

  // Creates and stacks markup for ordered list in current markups stack.
  if (orderedListItems.length > 0) {
    const markup = createMarkupInstanceFromCustom(
      CustomBlockTypes.ORDERED_LIST,
      orderedListItems.map((item) => item.render())
    );

    if (markup) {
      markups = [...markups, markup];
      orderedListItems = [];
    }
  }

  return markups;
}

function createMarkupInstanceFromBlock(
  block: BlockObjectResponse
): AbstractMarkup | undefined {
  switch (block.type) {
    case NotionBlockTypes.HEADING_1:
    case NotionBlockTypes.HEADING_2:
    case NotionBlockTypes.HEADING_3:
    case NotionBlockTypes.PARAGRAPH:
    case NotionBlockTypes.UNORDERED_LIST_ITEM:
    case NotionBlockTypes.ORDERED_LIST_ITEM:
      return new AbstractTypo(
        AbstractTypo.buildConfFromBlock(block)
      ).createMarkup();
    case NotionBlockTypes.CODE:
      return new AbstractCode(
        AbstractCode.buildConfFromBlock(block)
      ).createMarkup();
    default:
      return undefined;
  }
}

function createMarkupInstanceFromCustom(
  type: CustomBlockTypes,
  content: string | ReactNode
): AbstractMarkup | undefined {
  switch (type) {
    case CustomBlockTypes.UNORDERED_LIST:
      return new AbstractList(
        AbstractList.buildConfFromCustom(type, content)
      ).createMarkup();
    case CustomBlockTypes.ORDERED_LIST:
      return new AbstractList(
        AbstractList.buildConfFromCustom(type, content)
      ).createMarkup();
    default:
      return undefined;
  }
}
