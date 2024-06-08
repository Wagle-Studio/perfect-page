import { ReactNode } from "react";
import { FactoryNotionImageData } from "@/factory/types/NotionTypes";
import { FactoryBlockConf } from "@/factory/types/FactoryTypes";
import { FactoryMarkup } from "@/factory/_FactoryMarkup";
import { Image as Component } from "@/ui/factory/blocks/image/Image";

export class MarkupImage extends FactoryMarkup<FactoryNotionImageData> {
  public constructor(conf: FactoryBlockConf<FactoryNotionImageData>) {
    super(conf);
  }

  public render(): ReactNode {
    return Component(this.conf);
  }
}
