import { ReactNode } from "react";
import { BlockTags, BlockTypes } from "@/types/Block";
import { Error } from "@/factory/error/Error";
import { Typo } from "@/factory/typo/Typo";
import { Code } from "@/factory/code/Code";

export type Markup = Error | Typo | Code;

export enum MarkupConfFields {
  KEY = "key",
  TYPE = "type",
  TAG = "tag",
  CONTENT = "content",
  LANGUAGE = "language",
}

export type MarkupConf = {
  key: number;
  type?: BlockTypes;
  tag?: BlockTags;
  content?: string | ReactNode;
  language?: string;
};
