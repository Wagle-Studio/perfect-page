import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { BlockTypes } from "@/types/Block";
import { Markup } from "@/types/Markup";
import { AbstractTag } from "@/factory/tag/AbstractTag";

export function blockParser(blocks: BlockObjectResponse[]): Markup[] {
  let markups: Markup[] = [];
  let unorderedListItems: Markup[] = [];
  let orderedListItems: Markup[] = [];

  function createUnorderedListItemsMarkup() {
    return createListTagMarkup(BlockTypes.UNORDERED_LIST, unorderedListItems);
  }

  function createOrderedListItemsMarkup() {
    return createListTagMarkup(BlockTypes.ORDERED_LIST, orderedListItems);
  }

  blocks.forEach((block) => {
    const tag = new AbstractTag(AbstractTag.buildConfFromBlock(block));
    const markup = tag.createMarkup();

    if (tag.getConf().type === BlockTypes.UNORDERED_LIST_ITEM) {
      unorderedListItems = stackTag(unorderedListItems, markup);
    } else if (tag.getConf().type === BlockTypes.ORDERED_LIST_ITEM) {
      orderedListItems = stackTag(orderedListItems, markup);
    } else {
      if (unorderedListItems.length > 0) {
        markups = stackTag(markups, createUnorderedListItemsMarkup());
        unorderedListItems = [];
      }
      if (orderedListItems.length > 0) {
        markups = stackTag(markups, createOrderedListItemsMarkup());
        orderedListItems = [];
      }
      markups = stackTag(markups, markup);
    }
  });

  if (unorderedListItems.length > 0) {
    markups = stackTag(markups, createUnorderedListItemsMarkup());
    unorderedListItems = [];
  }

  if (orderedListItems.length > 0) {
    markups = stackTag(markups, createOrderedListItemsMarkup());
  }

  return markups;
}

function stackTag(tags: Markup[], tag: Markup): Markup[] {
  return [...tags, tag];
}

function createListTagMarkup(
  listType: BlockTypes.UNORDERED_LIST | BlockTypes.ORDERED_LIST,
  listItems: Markup[]
): Markup {
  return new AbstractTag(
    AbstractTag.buildConfFromCustom(
      listType,
      listItems.map((item) => item.render())
    )
  ).createMarkup();
}
