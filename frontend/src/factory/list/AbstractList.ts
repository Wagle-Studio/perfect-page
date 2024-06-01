import { MarkupConf } from "@/types/Markup";
import { Factory } from "@/factory/_Factory";
import { List } from "@/factory/list/List";

export class AbstractList extends Factory {
  public constructor(conf: MarkupConf) {
    super(conf);
  }

  public createMarkup() {
    return new List(this.conf);
  }
}
