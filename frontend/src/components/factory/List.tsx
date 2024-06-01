import { BlockTags } from "@/types/Block";

export type ListProps = {
  key: number;
  tag: BlockTags;
  content: string;
};

export function List(props: ListProps) {
  const Tag = props.tag;

  return <Tag key={props.key}>{props.content}</Tag>;
}
