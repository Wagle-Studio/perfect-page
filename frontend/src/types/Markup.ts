import { ReactNode } from "react";
import { BlockTags, NotionBlockTypes, CustomBlockTypes } from "@/types/Block";
import { MarkupCode } from "@/factory/code/MarkupCode";
import { MarkupList } from "@/factory/list/MarkupList";
import { MarkupTypo } from "@/factory/typo/MarkupTypo";

export type AbstractMarkup = MarkupTypo | MarkupCode | MarkupList;

export enum MarkupConfFields {
  KEY = "key",
  TYPE = "type",
  TAG = "tag",
  CONTENT = "content",
  LANGUAGE = "language",
}

export type MarkupConf = {
  key: number;
  type?: NotionBlockTypes | CustomBlockTypes;
  tag?: BlockTags;
  content?: string | ReactNode;
  language?: string;
};
