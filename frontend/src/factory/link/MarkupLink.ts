// import { ReactNode } from "react";
// import { MarkupConf, MarkupConfFields } from "@/types/Markup";
// import { FactoryMarkup } from "@/factory/_FactoryMarkup";
// import { Link as Component, LinkProps } from "@/components/factory/Link";
// import { Error } from "@/components/factory/Error";

// const mandatoryConf: MarkupConfFields[] = [
//   MarkupConfFields.KEY,
//   MarkupConfFields.CONTENT,
// ];

// export class MarkupLink extends FactoryMarkup<LinkProps> {
//   public constructor(conf: MarkupConf) {
//     super(conf, mandatoryConf);
//   }

//   public render(): ReactNode {
//     if (this.props) {
//       return Component(this.props);
//     } else {
//       return Error();
//     }
//   }
// }
