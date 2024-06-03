"use client";

import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { blockParser } from "@/services/blockParser";

type ArticleProps = {
  blocks: BlockObjectResponse[];
};

export function Article(props: ArticleProps) {
  return (
    <article style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {props.blocks &&
        blockParser(props.blocks).map((markup) => markup.render())}
    </article>
  );
}
