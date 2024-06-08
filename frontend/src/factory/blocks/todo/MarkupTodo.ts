import { ReactNode } from "react";
import { FactoryNotionTodoData } from "@/factory/types/NotionTypes";
import { FactoryBlockConf } from "@/factory/types/FactoryTypes";
import { FactoryMarkup } from "@/factory/_FactoryMarkup";
import { Todo as Component } from "@/ui/factory/blocks/todo/Todo";

export class MarkupTodo extends FactoryMarkup<FactoryNotionTodoData> {
  public constructor(conf: FactoryBlockConf<FactoryNotionTodoData>) {
    super(conf);
  }

  public render(): ReactNode {
    return Component(this.conf);
  }
}
