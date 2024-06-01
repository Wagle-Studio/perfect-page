import { ReactNode } from "react";
import { BlockTags, NotionBlockTypes, CustomBlockTypes } from "@/types/Block";
import { MarkupCode } from "@/factory/code/MarkupCode";
import { MarkupList } from "@/factory/list/MarkupList";
import { MarkupTypo } from "@/factory/typo/MarkupTypo";
import { MarkupTodo } from "@/factory/todo/MarkupTodo";

export type AbstractMarkup = MarkupTypo | MarkupCode | MarkupList | MarkupTodo;

export enum MarkupConfFields {
  KEY = "key",
  TYPE = "type",
  TAG = "tag",
  CONTENT = "content",
  CODE_LANGUAGE = "code_language",
}

export type MarkupConf = {
  key: number;
  type?: NotionBlockTypes | CustomBlockTypes;
  tag?: BlockTags;
  content?: string | ReactNode;
  code_language?: string;
};
