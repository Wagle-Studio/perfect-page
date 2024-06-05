import { ReactNode } from "react";
import { MarkupConf, MarkupConfFields } from "@/types/Markup";
import { FactoryMarkup } from "@/factory/_FactoryMarkup";
import { Typo as Component, TypoProps } from "@/components/factory/Typo";
import { Error } from "@/components/factory/Error";

const mandatoryConf: MarkupConfFields[] = [
  MarkupConfFields.KEY,
  MarkupConfFields.TYPE,
  MarkupConfFields.TAG,
  MarkupConfFields.CONTENT,
];

export class MarkupTypo extends FactoryMarkup<TypoProps> {
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
