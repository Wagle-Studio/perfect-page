import { Client } from "@notionhq/client";
import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { blockParser } from "@/services/blockParser";

export default async function Home() {
  const notionClient = new Client({
    auth: process.env.NOTION_API_KEY,
  });

  const data = await notionClient.blocks.children.list({
    block_id: process.env.NOTION_BLOCK_TEST_ID ?? "",
  });

  const blocks = data.results as BlockObjectResponse[];

  return (
    <div>{blocks && blockParser(blocks).map((markup) => markup.render())}</div>
  );
}
