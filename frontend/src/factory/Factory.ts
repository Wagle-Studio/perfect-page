import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import {
  FactoryNotionBlockTypes,
  FactoryCustomBlockTypes,
  FactoryAbstractBlock,
} from "@/factory/types/FactoryTypes";
import { BlockTypo } from "@/factory/blocks/typo/BlockTypo";
import { BlockList } from "@/factory/blocks/list/BlockList";
import { BlockImage } from "@/factory/blocks/image/BlockImage";
import { BlockCode } from "@/factory/blocks/code/BlockCode";
import { BlockTodo } from "@/factory/blocks/todo/BlockTodo";
import { BlockQuote } from "@/factory/blocks/quote/BlockQuote";
import { BlockCallout } from "@/factory/blocks/callout/BlockCallout";

export function blockParser(
  notionBlocks: BlockObjectResponse[]
): FactoryAbstractBlock[] {
  let blocks: FactoryAbstractBlock[] = [];
  let bullListItemBlocks: FactoryAbstractBlock[] = [];
  let numeListItemBlocks: FactoryAbstractBlock[] = [];
  let todoListItemBlocks: FactoryAbstractBlock[] = [];

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
      notionBlock.type !== FactoryNotionBlockTypes.BULLETED_LIST_ITEM &&
      notionBlock.type !== FactoryNotionBlockTypes.NUMBERED_LIST_ITEM &&
      notionBlock.type !== FactoryNotionBlockTypes.TO_DO
    ) {
      // Flushs block lists before create next block.
      flushLists();

      // Creates and stacks block.
      blocks = stackBlocks(blocks, createAbstractBlock(notionBlock));
    }

    // Handles Notion blocks that need list.
    if (
      notionBlock.type === FactoryNotionBlockTypes.BULLETED_LIST_ITEM ||
      notionBlock.type === FactoryNotionBlockTypes.NUMBERED_LIST_ITEM ||
      notionBlock.type === FactoryNotionBlockTypes.TO_DO
    ) {
      const block = createAbstractBlock(notionBlock);

      // Creates and stacks block for Notion list items block.
      switch (notionBlock.type) {
        case FactoryNotionBlockTypes.BULLETED_LIST_ITEM:
          bullListItemBlocks = stackBlocks(bullListItemBlocks, block);
          break;
        case FactoryNotionBlockTypes.NUMBERED_LIST_ITEM:
          numeListItemBlocks = stackBlocks(numeListItemBlocks, block);
          break;
        case FactoryNotionBlockTypes.TO_DO:
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
  blocks: FactoryAbstractBlock[],
  listItemBlocks: FactoryAbstractBlock[]
): FactoryAbstractBlock[] {
  let listType = listItemBlocks[0].createMarkup()?.getConf().type;
  let blockType: FactoryCustomBlockTypes | undefined = undefined;

  switch (listType) {
    case FactoryNotionBlockTypes.BULLETED_LIST_ITEM:
      blockType = FactoryCustomBlockTypes.BULLETED_LIST;
      break;
    case FactoryNotionBlockTypes.NUMBERED_LIST_ITEM:
      blockType = FactoryCustomBlockTypes.NUMBERED_LIST;
      break;
    case FactoryNotionBlockTypes.TO_DO:
      blockType = FactoryCustomBlockTypes.TODO_LIST;
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
  blocks: FactoryAbstractBlock[],
  block?: FactoryAbstractBlock
): FactoryAbstractBlock[] {
  if (block) blocks = [...blocks, block];
  return blocks;
}

function createAbstractBlock(
  block: BlockObjectResponse
): FactoryAbstractBlock | undefined {
  switch (block.type) {
    case FactoryNotionBlockTypes.HEADING_1:
    case FactoryNotionBlockTypes.HEADING_2:
    case FactoryNotionBlockTypes.HEADING_3:
    case FactoryNotionBlockTypes.PARAGRAPH:
    case FactoryNotionBlockTypes.BULLETED_LIST_ITEM:
    case FactoryNotionBlockTypes.NUMBERED_LIST_ITEM:
      return new BlockTypo(block);
    case FactoryNotionBlockTypes.CODE:
      return new BlockCode(block);
    case FactoryNotionBlockTypes.TO_DO:
      return new BlockTodo(block);
    // case NotionBlockTypes.IMAGE:
    //   return new BlockImage(block);
    case FactoryNotionBlockTypes.QUOTE:
      return new BlockQuote(block);
    case FactoryNotionBlockTypes.CALLOUT:
      return new BlockCallout(block);
    default:
      return undefined;
  }
}
