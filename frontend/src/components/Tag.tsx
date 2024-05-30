import { HTMLAttributes, ReactNode } from "react";
import { BlockTags } from "@/services/blockService";

type Tag = {
  tag: BlockTags;
  content?: string;
  children?: ReactNode | ReactNode[];
} & HTMLAttributes<
  | HTMLHeadingElement
  | HTMLParagraphElement
  | HTMLLIElement
  | HTMLUListElement
  | HTMLOListElement
>;

export default function Tag({ tag, content, children, ...props }: Tag) {
  const Tag = tag as BlockTags;

  return (
    <>
      {content && !children && <Tag {...props}>{content}</Tag>}
      {!content && children && <Tag {...props}>{children}</Tag>}
    </>
  );
}
