import { ReactNode } from "react";
import { BlockTypo } from "@/factory/blocks/typo/BlockTypo";
import { MarkupTypo } from "@/factory/blocks/typo/MarkupTypo";
import { BlockCode } from "@/factory/blocks/code/BlockCode";
import { MarkupCode } from "@/factory/blocks/code/MarkupCode";
import { BlockList } from "@/factory/blocks/list/BlockList";
import { MarkupList } from "@/factory/blocks/list/MarkupList";
import { BlockTodo } from "@/factory/blocks/todo/BlockTodo";
import { MarkupTodo } from "@/factory/blocks/todo/MarkupTodo";
import { MarkupImage } from "@/factory/blocks/image/MarkupImage";
import { BlockImage } from "@/factory/blocks/image/BlockImage";
import { BlockQuote } from "@/factory/blocks/quote/BlockQuote";
import { MarkupQuote } from "@/factory/blocks/quote/MarkupQuote";
import { BlockCallout } from "@/factory/blocks/callout/BlockCallout";
import { MarkupCallout } from "@/factory/blocks/callout/MarkupCallout";

export type FactoryAbstractBlock =
  | BlockTypo
  | BlockCode
  | BlockList
  | BlockTodo
  | BlockImage
  | BlockQuote
  | BlockCallout;

export type FactoryAbstractMarkup =
  | MarkupTypo
  | MarkupCode
  | MarkupList
  | MarkupTodo
  | MarkupImage
  | MarkupQuote
  | MarkupCallout;

export enum FactoryCustomBlockTypes {
  BULLETED_LIST = "ul",
  NUMBERED_LIST = "ol",
  TODO_LIST = "to_do",
}

export enum FactoryNotionBlockTypes {
  HEADING_1 = "heading_1",
  HEADING_2 = "heading_2",
  HEADING_3 = "heading_3",
  PARAGRAPH = "paragraph",
  BULLETED_LIST_ITEM = "bulleted_list_item",
  NUMBERED_LIST_ITEM = "numbered_list_item",
  CODE = "code",
  TO_DO = "to_do",
  IMAGE = "image",
  QUOTE = "quote",
  CALLOUT = "callout",
}

export type FactoryBlockConf<T> = {
  key: number;
  type: FactoryNotionBlockTypes | FactoryCustomBlockTypes;
  data?: T;
  children?: ReactNode[];
};
