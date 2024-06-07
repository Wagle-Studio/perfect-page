import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import { Link } from "@/components/factory/Link";

type RichTextProps = {
  content: RichTextItemResponse;
};

export function RichText(props: RichTextProps) {
  if (props.content.href) {
    return <Link href={props.content.href}>{props.content.plain_text}</Link>;
  } else {
    return <span>{props.content.plain_text}</span>;
  }
}
