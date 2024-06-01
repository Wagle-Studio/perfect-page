import { MarkupConf } from "@/types/Markup";
import { Factory } from "@/factory/_Factory";
import { Typo } from "@/factory/typo/Typo";

export class AbstractTypo extends Factory {
  public constructor(conf: MarkupConf) {
    super(conf);
  }

  public createMarkup() {
    return new Typo(this.conf);
  }
}
