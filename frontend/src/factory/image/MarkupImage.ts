import { ReactNode } from "react";
import { BlockConf, NotionImageData } from "@/types/Block";
import { FactoryMarkup } from "@/factory/_FactoryMarkup";
import { Image as Component } from "@/components/factory/Image";

export class MarkupImage extends FactoryMarkup<NotionImageData> {
  public constructor(conf: BlockConf<NotionImageData>) {
    super(conf);
  }

  public render(): ReactNode {
    return Component(this.conf);
  }
}
