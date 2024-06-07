import { MarkupCode } from "@/factory/code/MarkupCode";
import { MarkupList } from "@/factory/list/MarkupList";
import { MarkupTypo } from "@/factory/typo/MarkupTypo";
import { MarkupTodo } from "@/factory/todo/MarkupTodo";
import { MarkupImage } from "@/factory/image/MarkupImage";
import { MarkupQuote } from "@/factory/quote/MarkupQuote";
import { MarkupCallout } from "@/factory/callout/MarkupCallout";
// import { MarkupLink } from "@/factory/link/MarkupLink";

export type AbstractMarkup =
  | MarkupTypo
  | MarkupCode
  | MarkupList
  | MarkupTodo
  | MarkupImage
  | MarkupQuote
  | MarkupCallout;
// | MarkupLink;
