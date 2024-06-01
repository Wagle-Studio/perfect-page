import { MarkupConf } from "@/types/Markup";
import { FactoryBlock } from "@/factory/_FactoryBlock";
import { MarkupList } from "@/factory/list/MarkupList";

export class BlockList extends FactoryBlock {
  public constructor(conf: MarkupConf) {
    super(conf);
  }

  public createMarkup() {
    return new MarkupList(this.conf);
  }
}
