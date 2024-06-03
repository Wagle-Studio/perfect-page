import { BlockTags } from "@/types/Block";
import "./list.css";

export type ListProps = {
  key: number;
  tag: BlockTags;
  content: string;
};

export function List(props: ListProps) {
  const Tag = props.tag;

  return (
    <Tag key={props.key} className="list_container">
      {props.content}
    </Tag>
  );
}
