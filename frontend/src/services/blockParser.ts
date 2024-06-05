import { ReactNode } from "react";
import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionBlockTypes, CustomBlockTypes, BlockTags } from "@/types/Block";
import { AbstractMarkup } from "@/types/Markup";
import { BlockTypo } from "@/factory/typo/BlockTypo";
import { BlockList } from "@/factory/list/BlockList";
import { BlockCode } from "@/factory/code/BlockCode";
import { BlockTodo } from "@/factory/todo/BlockTodo";
import { BlockImage } from "@/factory/image/BlockImage";
import { BlockQuote } from "@/factory/quote/BlockQuote";
import { BlockCallout } from "@/factory/callout/BlockCallout";

enum ListTypes {
  BULLETED_LIST_ITEM = "bulleted_list_item",
  NUMBERED_LIST_ITEM = "numbered_list_item",
  TO_DO = "to_do",
}

type MarkupLists = Record<ListTypes, AbstractMarkup[]>;

const singleBlocks = [
  NotionBlockTypes.CODE,
  NotionBlockTypes.IMAGE,
  NotionBlockTypes.QUOTE,
  NotionBlockTypes.CALLOUT,
  NotionBlockTypes.HEADING_1,
  NotionBlockTypes.HEADING_2,
  NotionBlockTypes.HEADING_3,
  NotionBlockTypes.PARAGRAPH,
];

const listBlocks = [
  NotionBlockTypes.BULLETED_LIST_ITEM,
  NotionBlockTypes.NUMBERED_LIST_ITEM,
  NotionBlockTypes.TO_DO,
];

export function blockParser(blocks: BlockObjectResponse[]): AbstractMarkup[] {
  let markups: AbstractMarkup[] = [];
  let markupLists: MarkupLists = {
    bulleted_list_item: [],
    numbered_list_item: [],
    to_do: [],
  };

  blocks.forEach((block) => {
    // Handles Notion blocks that do not need list.
    if (singleBlocks.includes(block.type as NotionBlockTypes)) {
      // Flushs markup lists before create next Notion block markup.
      if (
        Object.values(markupLists).find((markupList) => markupList.length > 0)
      ) {
        const flushResult = flushLists(markups, markupLists);
        markups = flushResult.markups;
        markupLists = flushResult.markupLists;
      }

      // Creates and stacks markup for the manipulated Notion block.
      markups = stackMarkup(markups, createMarkupInstanceFromBlock(block));
    }

    // Handles Notion blocks that need list.
    if (listBlocks.includes(block.type as NotionBlockTypes)) {
      const markup = createMarkupInstanceFromBlock(block);

      // Creates and stacks markups for list items in Notion block.
      markupLists[block.type as ListTypes] = stackMarkup(
        markupLists[block.type as ListTypes],
        markup
      );
    }
  });

  // Flushs markup lists after the end of the loop.
  if (Object.values(markupLists).find((markupList) => markupList.length > 0)) {
    const flushResult = flushLists(markups, markupLists);
    markups = flushResult.markups;
    markupLists = flushResult.markupLists;
  }

  return markups;
}

function stackMarkup(
  markups: AbstractMarkup[],
  markup: AbstractMarkup | undefined
): AbstractMarkup[] {
  let stack = markups;

  if (markup) {
    return (stack = [...stack, markup]);
  }

  return stack;
}

function flushLists(
  markups: AbstractMarkup[],
  markupLists: MarkupLists
): {
  markups: AbstractMarkup[];
  markupLists: MarkupLists;
} {
  Object.keys(markupLists).forEach((listType) => {
    const listItems = markupLists[listType as ListTypes];

    if (listItems.length > 0) {
      const items = listItems.map((item) => item.render());

      switch (listType) {
        case ListTypes.BULLETED_LIST_ITEM:
          markups = stackMarkup(
            markups,
            new BlockList(
              BlockList.buildConfFromCustom(
                CustomBlockTypes.UNORDERED_LIST,
                BlockTags.UNORDERED_LIST,
                items
              )
            ).createMarkup()
          );
          break;
        case ListTypes.NUMBERED_LIST_ITEM:
          markups = stackMarkup(
            markups,
            new BlockList(
              BlockList.buildConfFromCustom(
                CustomBlockTypes.ORDERED_LIST,
                BlockTags.ORDERED_LIST,
                items
              )
            ).createMarkup()
          );
          break;
        case ListTypes.TO_DO:
          markups = stackMarkup(
            markups,
            new BlockList(
              BlockList.buildConfFromCustom(
                CustomBlockTypes.TODO_LIST,
                BlockTags.UNORDERED_LIST,
                items
              )
            ).createMarkup()
          );
          break;
        default:
      }

      markupLists[listType as ListTypes] = [];
    }
  });

  return { markups, markupLists };
}

function createMarkupInstanceFromBlock(
  block: BlockObjectResponse
): AbstractMarkup | undefined {
  switch (block.type) {
    case NotionBlockTypes.HEADING_1:
    case NotionBlockTypes.HEADING_2:
    case NotionBlockTypes.HEADING_3:
    case NotionBlockTypes.PARAGRAPH:
    case NotionBlockTypes.BULLETED_LIST_ITEM:
    case NotionBlockTypes.NUMBERED_LIST_ITEM:
      return new BlockTypo(BlockTypo.buildConfFromBlock(block)).createMarkup();
    case NotionBlockTypes.CODE:
      return new BlockCode(BlockCode.buildConfFromBlock(block)).createMarkup();
    case NotionBlockTypes.TO_DO:
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
