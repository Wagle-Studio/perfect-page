import { MarkupConf } from "@/types/Markup";

export function Tag(props: MarkupConf) {
  const TagElement = props.tag;

  return <TagElement key={props.key}>{props.content}</TagElement>;
}
