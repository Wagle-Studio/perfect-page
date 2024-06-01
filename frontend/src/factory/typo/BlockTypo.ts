import { MarkupConf } from "@/types/Markup";
import { FactoryBlock } from "@/factory/_FactoryBlock";
import { MarkupTypo } from "@/factory/typo/MarkupTypo";

export class BlockTypo extends FactoryBlock {
  public constructor(conf: MarkupConf) {
    super(conf);
  }

  public createMarkup() {
    return new MarkupTypo(this.conf);
  }
}
