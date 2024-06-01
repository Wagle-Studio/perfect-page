import { ReactNode } from "react";
import { MarkupConf, MarkupConfFields } from "@/types/Markup";
import { FactoryMarkup } from "@/factory/_FactoryMarkup";
import { Image as Component, ImageProps } from "@/components/factory/Image";
import { Error } from "@/components/factory/Error";

const mandatoryConf: MarkupConfFields[] = [
  MarkupConfFields.KEY,
  MarkupConfFields.CONTENT,
  MarkupConfFields.IMAGE_URL,
];

export class MarkupImage extends FactoryMarkup<ImageProps> {
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
