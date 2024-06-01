import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { BlockTypes } from "@/types/Block";
import { Markup } from "@/types/Markup";
import { AbstractTypo } from "@/factory/typo/AbstractTypo";
import { AbstractCode } from "@/factory/code/AbstractCode";

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
    const tag = new AbstractTypo(AbstractTypo.buildConfFromBlock(block));

    if (tag.getConf().type === BlockTypes.UNORDERED_LIST_ITEM) {
      unorderedListItems = stackTag(unorderedListItems, tag.createMarkup());
    } else if (tag.getConf().type === BlockTypes.ORDERED_LIST_ITEM) {
      orderedListItems = stackTag(orderedListItems, tag.createMarkup());
    } else {
      if (unorderedListItems.length > 0) {
        markups = stackTag(markups, createUnorderedListItemsMarkup());
        unorderedListItems = [];
      }
      if (orderedListItems.length > 0) {
        markups = stackTag(markups, createOrderedListItemsMarkup());
        orderedListItems = [];
      }
      if (tag.getConf().type === BlockTypes.CODE) {
        const tag = new AbstractCode(AbstractCode.buildConfFromBlock(block));
        const markup = tag.createMarkup();

        markups = stackTag(markups, markup);
      } else {
        markups = stackTag(markups, tag.createMarkup());
      }
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
  return new AbstractTypo(
    AbstractTypo.buildConfFromCustom(
      listType,
      listItems.map((item) => item.render())
    )
  ).createMarkup();
}
