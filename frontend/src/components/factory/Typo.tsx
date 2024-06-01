import { BlockTags } from "@/types/Block";

export type TypoProps = {
  key: number;
  tag: BlockTags;
  content: string;
};

export function Typo(props: TypoProps) {
  const Tag = props.tag;

  return <Tag key={props.key}>{props.content}</Tag>;
}
