import { ReactNode } from "react";
import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import { BlockCallout } from "@/factory/callout/BlockCallout";
import { BlockCode } from "@/factory/code/BlockCode";
import { BlockImage } from "@/factory/image/BlockImage";
// import { BlockLink } from "@/factory/link/BlockLink";
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
// | BlockLink;

export enum CustomBlockTypes {
  BULLETED_LIST = "ul",
  NUMBERED_LIST = "ol",
  TODO_LIST = "to_do",
  SPAN = "span",
  LINK = "link",
}
export enum NotionBlockTypes {
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

export type BlockConf<T> = {
  key: number;
  type: NotionBlockTypes | CustomBlockTypes;
  data?: T;
  children?: ReactNode[];
};

export type NotionBlockData =
  | NotionHeadingData
  | NotionParagraphData
  | NotionListData
  | NotionQuoteData
  | NotionTodoData
  | NotionCodeData
  | NotionCalloutData
  | NotionImageData;

export type NotionHeadingData = {
  rich_text: Array<RichTextItemResponse>;
  color: NotionColor;
  is_toggleable: boolean;
};

export type NotionParagraphData = {
  rich_text: Array<RichTextItemResponse>;
  color: NotionColor;
};

export type NotionListData = {
  rich_text: Array<RichTextItemResponse>;
  color: NotionColor;
};

export type NotionQuoteData = {
  rich_text: Array<RichTextItemResponse>;
  color: NotionColor;
};

export type NotionTodoData = {
  rich_text: Array<RichTextItemResponse>;
  color: NotionColor;
  checked: boolean;
};

export type NotionCodeData = {
  rich_text: Array<RichTextItemResponse>;
  caption: Array<RichTextItemResponse>;
  language: string;
};

export type NotionCalloutData = {
  rich_text: Array<RichTextItemResponse>;
  color: NotionColor;
  icon: {
    type: "emoji";
    emoji: string;
  };
};

export type NotionExternalImageData = {
  type: "external";
  external: {
    url: string;
  };
  caption: Array<RichTextItemResponse>;
};

export type NotionFileImageData = {
  type: "file";
  file: {
    url: string;
    expiry_time: string;
  };
  caption: Array<RichTextItemResponse>;
};

export type NotionImageData = NotionExternalImageData | NotionFileImageData;

export type NotionRichTextAnnotation = {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: NotionColor;
};

export type NotionColor =
  | "default"
  | "gray"
  | "brown"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "purple"
  | "pink"
  | "red"
  | "gray_background"
  | "brown_background"
  | "orange_background"
  | "yellow_background"
  | "green_background"
  | "blue_background"
  | "purple_background"
  | "pink_background"
  | "red_background";
