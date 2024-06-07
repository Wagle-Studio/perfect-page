import { AbstractBlock, CustomBlockTypes } from "@/types/Block";
import { FactoryBlock } from "@/factory/_FactoryBlock";
import { MarkupList } from "@/factory/list/MarkupList";

export class BlockList extends FactoryBlock<null> {
  public constructor(
    type:
      | CustomBlockTypes.BULLETED_LIST
      | CustomBlockTypes.NUMBERED_LIST
      | CustomBlockTypes.TODO_LIST,
    children: AbstractBlock[] | undefined
  ) {
    super(type, undefined, children);
  }

  public createMarkup() {
    return new MarkupList(this.conf);
  }
}
