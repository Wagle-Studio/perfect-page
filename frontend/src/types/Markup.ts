import { ReactNode } from "react";
import { BlockTags, BlockTypes } from "@/types/Block";
import { Tag } from "@/factory/tag/Tag";

export type Markup = Tag;

export type MarkupConf = {
  key: number;
  type: BlockTypes;
  tag: BlockTags;
  content: string | ReactNode;
};
