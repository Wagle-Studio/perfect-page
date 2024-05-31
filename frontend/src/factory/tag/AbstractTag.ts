import { MarkupConf } from "@/types/Markup";
import { Factory } from "@/factory/_Factory";
import { Tag } from "@/factory/tag/Tag";

export class AbstractTag extends Factory {
  public constructor(conf: MarkupConf) {
    super(conf);
  }

  public createMarkup() {
    return new Tag(this.conf);
  }
}
