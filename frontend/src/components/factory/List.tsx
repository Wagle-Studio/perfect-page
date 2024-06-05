import { BlockTags, CustomBlockTypes, NotionBlockTypes } from "@/types/Block";
import "./list.scss";

export type ListProps = {
  key: number;
  type: NotionBlockTypes | CustomBlockTypes;
  tag: BlockTags;
  content: string;
};

export function List(props: ListProps) {
  const Tag = props.tag;

  return (
    <Tag key={props.key} className={`list list--${props.type}`}>
      {props.content}
    </Tag>
  );
}
