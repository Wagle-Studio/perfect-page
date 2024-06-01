import { ReactNode } from "react";
import { MarkupConf, MarkupConfFields } from "@/types/Markup";
import { FactoryMarkup } from "@/factory/_FactoryMarkup";
import { Code as Component, CodeProps } from "@/components/factory/Code";
import { Error } from "@/components/factory/Error";

const mandatoryConf: MarkupConfFields[] = [
  MarkupConfFields.KEY,
  MarkupConfFields.TAG,
  MarkupConfFields.CONTENT,
  MarkupConfFields.CODE_LANGUAGE,
];

export class MarkupCode extends FactoryMarkup<CodeProps> {
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
