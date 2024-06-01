import { MarkupConf } from "@/types/Markup";
import { FactoryBlock } from "@/factory/_FactoryBlock";
import { MarkupImage } from "@/factory/image/MarkupImage";

export class BlockImage extends FactoryBlock {
  public constructor(conf: MarkupConf) {
    super(conf);
  }

  public createMarkup() {
    return new MarkupImage(this.conf);
  }
}
