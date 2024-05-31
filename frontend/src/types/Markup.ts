import { ReactNode } from "react";
import { BlockTags, BlockTypes } from "@/types/Block";
import { Tag } from "@/factory/tag/Tag";
import { Code } from "@/factory/code/Code";

export type Markup = Tag | Code;

export type MarkupConf = {
  key: number;
  type: BlockTypes;
  tag: BlockTags;
  content: string | ReactNode;
};
