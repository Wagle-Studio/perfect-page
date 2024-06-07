import { ReactNode } from "react";
import { BlockConf, NotionTodoData } from "@/types/Block";
import { FactoryMarkup } from "@/factory/_FactoryMarkup";
import { Todo as Component } from "@/components/factory/Todo";

export class MarkupTodo extends FactoryMarkup<NotionTodoData> {
  public constructor(conf: BlockConf<NotionTodoData>) {
    super(conf);
  }

  public render(): ReactNode {
    return Component(this.conf);
  }
}
