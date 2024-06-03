import { ReactNode } from "react";
import { BlockTags, NotionBlockTypes, CustomBlockTypes } from "@/types/Block";
import { MarkupCode } from "@/factory/code/MarkupCode";
import { MarkupList } from "@/factory/list/MarkupList";
import { MarkupTypo } from "@/factory/typo/MarkupTypo";
import { MarkupTodo } from "@/factory/todo/MarkupTodo";
import { MarkupImage } from "@/factory/image/MarkupImage";
import { MarkupQuote } from "@/factory/quote/MarkupQuote";
import { MarkupCallout } from "@/factory/callout/MarkupCallout";

export type AbstractMarkup =
  | MarkupTypo
  | MarkupCode
  | MarkupList
  | MarkupTodo
  | MarkupImage
  | MarkupQuote
  | MarkupCallout;

export enum MarkupConfFields {
  KEY = "key",
  TYPE = "type",
  TAG = "tag",
  CONTENT = "content",
  CODE_LANGUAGE = "code_language",
  TODO_CHECK = "todo_check",
  IMAGE_URL = "image_url",
  ICON = "icon",
  CALLOUT_ICON = "callout_icon",
}

export type MarkupConf = {
  key: number;
  type?: NotionBlockTypes | CustomBlockTypes;
  tag?: BlockTags;
  content?: string | ReactNode;
  code_language?: string;
  todo_check?: boolean;
  image_url?: string;
  callout_icon?: string;
};
