import { ReactNode } from "react";
import { MarkupConf, MarkupConfFields } from "@/types/Markup";
import { FactoryMarkup } from "@/factory/_FactoryMarkup";
import {
  Callout as Component,
  CalloutProps,
} from "@/components/factory/Callout";
import { Error } from "@/components/factory/Error";

const mandatoryConf: MarkupConfFields[] = [
  MarkupConfFields.KEY,
  MarkupConfFields.TAG,
  MarkupConfFields.CONTENT,
  MarkupConfFields.CALLOUT_ICON,
];

export class MarkupCallout extends FactoryMarkup<CalloutProps> {
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
