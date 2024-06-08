import {
  FactoryAbstractBlock,
  FactoryCustomBlockTypes,
} from "@/factory/types/FactoryTypes";
import { FactoryBlock } from "@/factory/_FactoryBlock";
import { MarkupList } from "@/factory/blocks/list/MarkupList";

export class BlockList extends FactoryBlock<null> {
  public constructor(
    type:
      | FactoryCustomBlockTypes.BULLETED_LIST
      | FactoryCustomBlockTypes.NUMBERED_LIST
      | FactoryCustomBlockTypes.TODO_LIST,
    children: FactoryAbstractBlock[] | undefined
  ) {
    super(type, undefined, children);
  }

  public createMarkup() {
    return new MarkupList(this.conf);
  }
}
