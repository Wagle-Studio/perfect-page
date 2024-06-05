import "./typo.scss";
import { BlockTags, CustomBlockTypes, NotionBlockTypes } from "@/types/Block";

export type TypoProps = {
  key: number;
  type: NotionBlockTypes | CustomBlockTypes;
  tag: BlockTags;
  content: string;
};

export function Typo(props: TypoProps) {
  const Tag = props.tag;

  return (
    <Tag key={props.key} className={`typo--${props.type}`}>
      {props.content}
    </Tag>
  );
}
