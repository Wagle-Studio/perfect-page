import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import {
  NotionBlockTypes,
  CustomBlockTypes,
  AbstractBlock,
} from "@/types/Block";
import { BlockTypo } from "@/factory/typo/BlockTypo";
import { BlockList } from "@/factory/list/BlockList";
import { BlockImage } from "@/factory/image/BlockImage";
import { BlockCode } from "@/factory/code/BlockCode";
import { BlockTodo } from "@/factory/todo/BlockTodo";
import { BlockQuote } from "@/factory/quote/BlockQuote";
import { BlockCallout } from "@/factory/callout/BlockCallout";

export function blockParser(
  notionBlocks: BlockObjectResponse[]
): AbstractBlock[] {
  let blocks: AbstractBlock[] = [];
  let bullListItemBlocks: AbstractBlock[] = [];
  let numeListItemBlocks: AbstractBlock[] = [];
  let todoListItemBlocks: AbstractBlock[] = [];

  // Merges list item blocks into an list block.
  function flushLists() {
    if (bullListItemBlocks.length > 0) {
      blocks = flushListItemBlocks(blocks, bullListItemBlocks);
      bullListItemBlocks = [];
    } else if (numeListItemBlocks.length > 0) {
      blocks = flushListItemBlocks(blocks, numeListItemBlocks);
      numeListItemBlocks = [];
    } else if (todoListItemBlocks.length > 0) {
      blocks = flushListItemBlocks(blocks, todoListItemBlocks);
      todoListItemBlocks = [];
    }
  }

  notionBlocks.forEach((notionBlock) => {
    // Handles Notion blocks that do not need list.
    if (
      notionBlock.type !== NotionBlockTypes.BULLETED_LIST_ITEM &&
      notionBlock.type !== NotionBlockTypes.NUMBERED_LIST_ITEM &&
      notionBlock.type !== NotionBlockTypes.TO_DO
    ) {
      // Flushs block lists before create next block.
      flushLists();

      // Creates and stacks block.
      blocks = stackBlocks(blocks, createAbstractBlock(notionBlock));
    }

    // Handles Notion blocks that need list.
    if (
      notionBlock.type === NotionBlockTypes.BULLETED_LIST_ITEM ||
      notionBlock.type === NotionBlockTypes.NUMBERED_LIST_ITEM ||
      notionBlock.type === NotionBlockTypes.TO_DO
    ) {
      const block = createAbstractBlock(notionBlock);

      // Creates and stacks block for Notion list items block.
      switch (notionBlock.type) {
        case NotionBlockTypes.BULLETED_LIST_ITEM:
          bullListItemBlocks = stackBlocks(bullListItemBlocks, block);
          break;
        case NotionBlockTypes.NUMBERED_LIST_ITEM:
          numeListItemBlocks = stackBlocks(numeListItemBlocks, block);
          break;
        case NotionBlockTypes.TO_DO:
          todoListItemBlocks = stackBlocks(todoListItemBlocks, block);
          break;
        default:
          break;
      }
    }
  });

  // Flushs block lists after the end of the loop.
  flushLists();

  return blocks;
}

function flushListItemBlocks(
  blocks: AbstractBlock[],
  listItemBlocks: AbstractBlock[]
): AbstractBlock[] {
  let listType = listItemBlocks[0].createMarkup()?.getConf().type;
  let blockType: CustomBlockTypes | undefined = undefined;

  switch (listType) {
    case NotionBlockTypes.BULLETED_LIST_ITEM:
      blockType = CustomBlockTypes.BULLETED_LIST;
      break;
    case NotionBlockTypes.NUMBERED_LIST_ITEM:
      blockType = CustomBlockTypes.NUMBERED_LIST;
      break;
    case NotionBlockTypes.TO_DO:
      blockType = CustomBlockTypes.TODO_LIST;
      break;
    default:
      blockType = undefined;
      break;
  }

  if (blockType) {
    blocks = stackBlocks(blocks, new BlockList(blockType, listItemBlocks));
  }

  return blocks;
}

function stackBlocks(
  blocks: AbstractBlock[],
  block?: AbstractBlock
): AbstractBlock[] {
  if (block) blocks = [...blocks, block];
  return blocks;
}

function createAbstractBlock(
  block: BlockObjectResponse
): AbstractBlock | undefined {
  switch (block.type) {
    case NotionBlockTypes.HEADING_1:
    case NotionBlockTypes.HEADING_2:
    case NotionBlockTypes.HEADING_3:
    case NotionBlockTypes.PARAGRAPH:
    case NotionBlockTypes.BULLETED_LIST_ITEM:
    case NotionBlockTypes.NUMBERED_LIST_ITEM:
      return new BlockTypo(block);
    case NotionBlockTypes.CODE:
      return new BlockCode(block);
    case NotionBlockTypes.TO_DO:
      return new BlockTodo(block);
    case NotionBlockTypes.IMAGE:
      return new BlockImage(block);
    case NotionBlockTypes.QUOTE:
      return new BlockQuote(block);
    case NotionBlockTypes.CALLOUT:
      return new BlockCallout(block);
    default:
      return undefined;
  }
}
