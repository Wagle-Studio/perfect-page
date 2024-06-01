import { AbstractCode } from "@/factory/code/AbstractCode";
import { AbstractList } from "@/factory/list/AbstractList";
import { AbstractTypo } from "@/factory/typo/AbstractTypo";

export type AbstractBlock = AbstractTypo | AbstractCode | AbstractList;

export enum NotionBlockTypes {
  HEADING_1 = "heading_1",
  HEADING_2 = "heading_2",
  HEADING_3 = "heading_3",
  PARAGRAPH = "paragraph",
  UNORDERED_LIST_ITEM = "bulleted_list_item",
  ORDERED_LIST_ITEM = "numbered_list_item",
  CODE = "code",
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
  CODE = "code",
}
