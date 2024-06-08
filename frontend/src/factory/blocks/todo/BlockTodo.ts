import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { FactoryNotionTodoData } from "@/factory/types/NotionTypes";
import { FactoryNotionBlockTypes } from "@/factory/types/FactoryTypes";
import { FactoryBlock } from "@/factory/_FactoryBlock";
import { MarkupTodo } from "@/factory/blocks/todo/MarkupTodo";

export class BlockTodo extends FactoryBlock<FactoryNotionTodoData> {
  public constructor(block: BlockObjectResponse) {
    super(block.type as FactoryNotionBlockTypes, block, undefined);
  }

  public createMarkup() {
    return new MarkupTodo(this.conf);
  }
}
