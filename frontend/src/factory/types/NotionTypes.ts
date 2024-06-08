import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

export type FactoryNotionBlockData =
  | FactoryNotionHeadingData
  | FactoryNotionParagraphData
  | FactoryNotionListData
  | FactoryNotionQuoteData
  | FactoryNotionTodoData
  | FactoryNotionCodeData
  | FactoryNotionCalloutData
  | FactoryNotionImageData;

export type FactoryNotionHeadingData = {
  rich_text: Array<RichTextItemResponse>;
  color: FactoryNotionColor;
  is_toggleable: boolean;
};

export type FactoryNotionParagraphData = {
  rich_text: Array<RichTextItemResponse>;
  color: FactoryNotionColor;
};

export type FactoryNotionListData = {
  rich_text: Array<RichTextItemResponse>;
  color: FactoryNotionColor;
};

export type FactoryNotionQuoteData = {
  rich_text: Array<RichTextItemResponse>;
  color: FactoryNotionColor;
};

export type FactoryNotionTodoData = {
  rich_text: Array<RichTextItemResponse>;
  color: FactoryNotionColor;
  checked: boolean;
};

export type FactoryNotionCodeData = {
  rich_text: Array<RichTextItemResponse>;
  caption: Array<RichTextItemResponse>;
  language: string;
};

export type FactoryNotionCalloutData = {
  rich_text: Array<RichTextItemResponse>;
  color: FactoryNotionColor;
  icon: {
    type: "emoji";
    emoji: string;
  };
};

export type FactoryNotionExternalImageData = {
  type: "external";
  external: {
    url: string;
  };
  caption: Array<RichTextItemResponse>;
};

export type FactoryNotionFileImageData = {
  type: "file";
  file: {
    url: string;
    expiry_time: string;
  };
  caption: Array<RichTextItemResponse>;
};

export type FactoryNotionImageData =
  | FactoryNotionExternalImageData
  | FactoryNotionFileImageData;

export type FactoryNotionRichTextAnnotation = {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: FactoryNotionColor;
};

export type FactoryNotionColor =
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
