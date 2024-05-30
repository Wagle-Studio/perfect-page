import { ReactNode } from "react";
import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import Tag from "@/components/Tag";

export enum BlockTypes {
  HEADING_1 = "heading_1",
  HEADING_2 = "heading_2",
  HEADING_3 = "heading_3",
  PARAGRAPH = "paragraph",
  BULLETED_LIST_ITEM = "bulleted_list_item",
  NUMBERED_LIST_ITEM = "numbered_list_item",
}

export enum BlockTags {
  HEADING_1 = "h1",
  HEADING_2 = "h2",
  HEADING_3 = "h3",
  PARAGRAPH = "p",
  ORDONED_LIST = "ol",
  UNORDONED_LIST = "ul",
  BULLETED_LIST_ITEM = "li",
  NUMBERED_LIST_ITEM = "li",
}

export default function getBlocksMarkup(
  blocks: BlockObjectResponse[]
): ReactNode[] {
  let stackedMarkup: ReactNode[] = [];
  let stackedBulletedListItems: ReactNode[] = [];
  let stackedNumberedListItems: ReactNode[] = [];

  blocks.forEach((block, index) => {
    const configuration = getBlockConfiguration(block);

    if (configuration.type === BlockTypes.BULLETED_LIST_ITEM) {
      stackedBulletedListItems = [
        ...stackedBulletedListItems,
        Tag({ tag: configuration.tag, content: configuration.content }),
      ];
    } else if (configuration.type === BlockTypes.NUMBERED_LIST_ITEM) {
      stackedNumberedListItems = [
        ...stackedNumberedListItems,
        Tag({ tag: configuration.tag, content: configuration.content }),
      ];
    } else {
      if (stackedBulletedListItems.length > 0) {
        stackedMarkup = [
          ...stackedMarkup,
          Tag({
            tag: BlockTags.UNORDONED_LIST,
            children: stackedBulletedListItems,
          }),
        ];
        stackedBulletedListItems = [];
      } else if (stackedNumberedListItems.length > 0) {
        stackedMarkup = [
          ...stackedMarkup,
          Tag({
            tag: BlockTags.ORDONED_LIST,
            children: stackedNumberedListItems,
          }),
        ];
        stackedNumberedListItems = [];
      } else {
        stackedMarkup = [
          ...stackedMarkup,
          Tag({ tag: configuration.tag, content: configuration.content }),
        ];
      }
    }
  });

  if (stackedBulletedListItems.length > 0) {
    stackedMarkup = [
      ...stackedMarkup,
      Tag({
        tag: BlockTags.UNORDONED_LIST,
        children: stackedBulletedListItems,
      }),
    ];
    stackedBulletedListItems = [];
  }

  if (stackedNumberedListItems.length > 0) {
    stackedMarkup = [
      ...stackedMarkup,
      Tag({ tag: BlockTags.ORDONED_LIST, children: stackedNumberedListItems }),
    ];
    stackedNumberedListItems = [];
  }

  return stackedMarkup;
}

function getBlockConfiguration(block: BlockObjectResponse): {
  type: BlockTypes;
  tag: BlockTags;
  content: string;
} {
  return {
    type: getType(block),
    tag: getTag(block),
    content: getContent(block),
  };
}

function getType(block: BlockObjectResponse): BlockTypes {
  switch (block.type) {
    case BlockTypes.HEADING_1:
      return BlockTypes.HEADING_1;
    case BlockTypes.HEADING_2:
      return BlockTypes.HEADING_2;
    case BlockTypes.HEADING_3:
      return BlockTypes.HEADING_3;
    case BlockTypes.PARAGRAPH:
      return BlockTypes.PARAGRAPH;
    case BlockTypes.BULLETED_LIST_ITEM:
      return BlockTypes.BULLETED_LIST_ITEM;
    case BlockTypes.NUMBERED_LIST_ITEM:
      return BlockTypes.NUMBERED_LIST_ITEM;
    default:
      return BlockTypes.PARAGRAPH;
  }
}

function getTag(block: BlockObjectResponse): BlockTags {
  switch (block.type) {
    case BlockTypes.HEADING_1:
      return BlockTags.HEADING_1;
    case BlockTypes.HEADING_2:
      return BlockTags.HEADING_2;
    case BlockTypes.HEADING_3:
      return BlockTags.HEADING_3;
    case BlockTypes.PARAGRAPH:
      return BlockTags.PARAGRAPH;
    case BlockTypes.BULLETED_LIST_ITEM:
      return BlockTags.BULLETED_LIST_ITEM;
    case BlockTypes.NUMBERED_LIST_ITEM:
      return BlockTags.NUMBERED_LIST_ITEM;
    default:
      return BlockTags.PARAGRAPH;
  }
}

function getContent(block: BlockObjectResponse): string {
  switch (block.type) {
    case BlockTypes.HEADING_1:
      return block.heading_1.rich_text[0].plain_text;
    case BlockTypes.HEADING_2:
      return block.heading_2.rich_text[0].plain_text;
    case BlockTypes.HEADING_3:
      return block.heading_3.rich_text[0].plain_text;
    case BlockTypes.PARAGRAPH:
      return block.paragraph.rich_text[0].plain_text;
    case BlockTypes.BULLETED_LIST_ITEM:
      return block.bulleted_list_item.rich_text[0].plain_text;
    case BlockTypes.NUMBERED_LIST_ITEM:
      return block.numbered_list_item.rich_text[0].plain_text;
    default:
      return "Block service - get content error";
  }
}
