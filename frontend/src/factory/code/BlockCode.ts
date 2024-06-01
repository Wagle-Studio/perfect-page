import { MarkupConf } from "@/types/Markup";
import { FactoryBlock } from "@/factory/_FactoryBlock";
import { MarkupCode } from "@/factory/code/MarkupCode";

export class BlockCode extends FactoryBlock {
  public constructor(conf: MarkupConf) {
    super(conf);
  }

  public createMarkup() {
    return new MarkupCode(this.conf);
  }
}
