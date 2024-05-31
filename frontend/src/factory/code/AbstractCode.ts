import { MarkupConf } from "@/types/Markup";
import { Factory } from "@/factory/_Factory";
import { Code } from "@/factory/code/Code";

export class AbstractCode extends Factory {
  public constructor(conf: MarkupConf) {
    super(conf);
  }

  public createMarkup() {
    return new Code(this.conf);
  }
}
