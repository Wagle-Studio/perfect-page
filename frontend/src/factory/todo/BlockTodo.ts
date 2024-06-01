import { MarkupConf } from "@/types/Markup";
import { FactoryBlock } from "@/factory/_FactoryBlock";
import { MarkupTodo } from "@/factory/todo/MarkupTodo";

export class BlockTodo extends FactoryBlock {
  public constructor(conf: MarkupConf) {
    super(conf);
  }

  public createMarkup() {
    return new MarkupTodo(this.conf);
  }
}
