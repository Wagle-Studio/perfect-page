import { ReactNode } from "react";
import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionBlockTypes, CustomBlockTypes } from "@/types/Block";
import { AbstractMarkup } from "@/types/Markup";
import { BlockTypo } from "@/factory/typo/BlockTypo";
import { BlockList } from "@/factory/list/BlockList";
import { BlockCode } from "@/factory/code/BlockCode";
import { BlockTodo } from "@/factory/todo/BlockTodo";
import { BlockImage } from "@/factory/image/BlockImage";
import { BlockQuote } from "@/factory/quote/BlockQuote";
import { BlockCallout } from "@/factory/callout/BlockCallout";

export function blockParser(blocks: BlockObjectResponse[]): AbstractMarkup[] {
  let markups: AbstractMarkup[] = [];
  let unorderedListItems: AbstractMarkup[] = [];
  let orderedListItems: AbstractMarkup[] = [];
  let todoListItems: AbstractMarkup[] = [];

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

    // Creates and stacks markups for todo list items in Notion block.
    if (block.type === NotionBlockTypes.TODO) {
      const markup = createMarkupInstanceFromBlock(block);

      if (markup) {
        todoListItems = [...todoListItems, markup];
      }
    }

    if (
      block.type !== NotionBlockTypes.UNORDERED_LIST_ITEM &&
      block.type !== NotionBlockTypes.ORDERED_LIST_ITEM &&
      block.type !== NotionBlockTypes.TODO
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

      // Creates and stacks markup for todo list in current markups stack.
      if (todoListItems.length > 0) {
        const markup = createMarkupInstanceFromCustom(
          CustomBlockTypes.UNORDERED_LIST,
          todoListItems.map((item) => item.render())
        );

        if (markup) {
          markups = [...markups, markup];
          todoListItems = [];
        }
      }

      // Creates and stacks markup for code block in current markups stack.
      if (block.type === NotionBlockTypes.CODE) {
        const markup = createMarkupInstanceFromBlock(block);

        if (markup) {
          markups = [...markups, markup];
        }
      }

      // Creates and stacks markup for code block in current markups stack.
      if (block.type === NotionBlockTypes.IMAGE) {
        const markup = createMarkupInstanceFromBlock(block);

        if (markup) {
          markups = [...markups, markup];
        }
      }

      // Creates and stacks markup for quote block in current markups stack.
      if (block.type === NotionBlockTypes.QUOTE) {
        const markup = createMarkupInstanceFromBlock(block);

        if (markup) {
          markups = [...markups, markup];
        }
      }

      // Creates and stacks markup for callout block in current markups stack.
      if (block.type === NotionBlockTypes.CALLOUT) {
        const markup = createMarkupInstanceFromBlock(block);

        if (markup) {
          markups = [...markups, markup];
        }
      }

      // Creates and stacks markup for typo block in current markups stack.
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

  // Creates and stacks markup for todo list in current markups stack.
  if (todoListItems.length > 0) {
    const markup = createMarkupInstanceFromCustom(
      CustomBlockTypes.UNORDERED_LIST,
      todoListItems.map((item) => item.render())
    );

    if (markup) {
      markups = [...markups, markup];
      todoListItems = [];
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
      return new BlockTypo(BlockTypo.buildConfFromBlock(block)).createMarkup();
    case NotionBlockTypes.CODE:
      return new BlockCode(BlockCode.buildConfFromBlock(block)).createMarkup();
    case NotionBlockTypes.TODO:
      return new BlockTodo(BlockTodo.buildConfFromBlock(block)).createMarkup();
    case NotionBlockTypes.IMAGE:
      return new BlockImage(
        BlockImage.buildConfFromBlock(block)
      ).createMarkup();
    case NotionBlockTypes.QUOTE:
      return new BlockQuote(
        BlockQuote.buildConfFromBlock(block)
      ).createMarkup();
    case NotionBlockTypes.CALLOUT:
      return new BlockCallout(
        BlockCallout.buildConfFromBlock(block)
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
      return new BlockList(
        BlockList.buildConfFromCustom(type, content)
      ).createMarkup();
    case CustomBlockTypes.ORDERED_LIST:
      return new BlockList(
        BlockList.buildConfFromCustom(type, content)
      ).createMarkup();
    default:
      return undefined;
  }
}
