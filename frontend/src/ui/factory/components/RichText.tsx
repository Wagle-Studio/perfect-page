import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import { Link } from "@/ui/factory/components/Link";
import "./rich_text.scss";

type RichTextProps = {
  content: RichTextItemResponse;
};

export function RichText(props: RichTextProps) {
  if (props.content.href) {
    return <Link href={props.content.href}>{props.content.plain_text}</Link>;
  }

  const annotations = props.content.annotations;

  const baseClass = "rich-text";
  const backgroundColorClass = `${baseClass}__background-color--${props.content.annotations.color}`;
  const textColorClass = `${baseClass}__text-color--${annotations.color}`;
  const boldClass = annotations.bold ? `${baseClass}__text--bold` : "";
  const italicClass = annotations.italic ? `${baseClass}__text--italic` : "";
  const strikethroughClass = annotations.strikethrough
    ? `${baseClass}__text--strikethrough`
    : "";
  const underlineClass = annotations.underline
    ? `${baseClass}__text--underline`
    : "";
  const codeClass = annotations.code ? `${baseClass}__text--code` : "";

  const className = [
    baseClass,
    "rich-text__background-color",
    backgroundColorClass,
    "rich-text__text-color",
    textColorClass,
    boldClass,
    italicClass,
    strikethroughClass,
    underlineClass,
    codeClass,
  ]
    .filter(Boolean)
    .join(" ");

  return <span className={className}>{props.content.plain_text}</span>;
}
