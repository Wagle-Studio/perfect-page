import { Client } from "@notionhq/client";
import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { FactoryPage } from "@/ui/factory/layouts/FactoryPage";

export default async function PageId(props: { params: { id: string } }) {
  const notionClient = new Client({
    auth: process.env.NOTION_API_KEY,
  });

  const data = await notionClient.blocks.children.list({
    block_id: props.params.id ?? "",
  });

  const blocks = data.results as BlockObjectResponse[];

  return <div>{blocks && <FactoryPage blocks={blocks} />}</div>;
}
