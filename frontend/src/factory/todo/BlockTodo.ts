import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionBlockTypes, NotionTodoData } from "@/types/Block";
import { FactoryBlock } from "@/factory/_FactoryBlock";
import { MarkupTodo } from "@/factory/todo/MarkupTodo";

export class BlockTodo extends FactoryBlock<NotionTodoData> {
  public constructor(block: BlockObjectResponse) {
    super(block.type as NotionBlockTypes, block, undefined);
  }

  public createMarkup() {
    return new MarkupTodo(this.conf);
  }
}
