import { ReactNode } from "react";
import { MarkupConf, MarkupConfFields } from "@/types/Markup";

export interface FactoryMarkupInterface {
  render(): ReactNode;
}

export abstract class FactoryMarkup<ComponentProps>
  implements FactoryMarkupInterface
{
  protected conf: MarkupConf;
  protected mandatoryConf: MarkupConfFields[];
  protected props: ComponentProps | null;

  public constructor(conf: MarkupConf, mandatoryConf: MarkupConfFields[]) {
    this.conf = conf;
    this.mandatoryConf = mandatoryConf;
    this.props = this._extractConfProps<ComponentProps>(
      this.conf,
      mandatoryConf
    );
  }

  private _extractConfProps<ComponentConf>(
    conf: MarkupConf,
    mandatoryFields: MarkupConfFields[]
  ): ComponentConf | null {
    const result: Partial<ComponentConf> = {};

    for (const field of mandatoryFields) {
      if (!conf[field]) {
        return null;
      }
      (result as any)[field] = conf[field];
    }

    return result as ComponentConf;
  }

  abstract render(): ReactNode;
}
