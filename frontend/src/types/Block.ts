import { BlockCallout } from "@/factory/callout/BlockCallout";
import { BlockCode } from "@/factory/code/BlockCode";
import { BlockImage } from "@/factory/image/BlockImage";
import { BlockList } from "@/factory/list/BlockList";
import { BlockQuote } from "@/factory/quote/BlockQuote";
import { BlockTodo } from "@/factory/todo/BlockTodo";
import { BlockTypo } from "@/factory/typo/BlockTypo";

export type AbstractBlock =
  | BlockTypo
  | BlockCode
  | BlockList
  | BlockTodo
  | BlockImage
  | BlockQuote
  | BlockCallout;

export enum NotionBlockTypes {
  HEADING_1 = "heading_1",
  HEADING_2 = "heading_2",
  HEADING_3 = "heading_3",
  PARAGRAPH = "paragraph",
  BULLETED_LIST_ITEM = "bulleted_list_item",
  NUMBERED_LIST_ITEM = "numbered_list_item",
  CODE = "code",
  TODO = "to_do",
  IMAGE = "image",
  QUOTE = "quote",
  CALLOUT = "callout",
}

export enum CustomBlockTypes {
  UNORDERED_LIST = "ul",
  ORDERED_LIST = "ol",
}

export enum BlockTags {
  HEADING_1 = "h1",
  HEADING_2 = "h2",
  HEADING_3 = "h3",
  PARAGRAPH = "p",
  UNORDERED_LIST = "ul",
  ORDERED_LIST = "ol",
  LIST_ITEM = "li",
}
