import { ReactNode } from "react";
import { MarkupConf, MarkupConfFields } from "@/types/Markup";
import { FactoryMarkup } from "@/factory/_FactoryMarkup";
import { Todo as Component, TodoProps } from "@/components/factory/Todo";
import { Error } from "@/components/factory/Error";

const mandatoryConf: MarkupConfFields[] = [
  MarkupConfFields.KEY,
  MarkupConfFields.CONTENT,
];

export class MarkupTodo extends FactoryMarkup<TodoProps> {
  public constructor(conf: MarkupConf) {
    super(conf, mandatoryConf);
  }

  public render(): ReactNode {
    if (this.props) {
      return Component(this.props);
    } else {
      return Error();
    }
  }
}
