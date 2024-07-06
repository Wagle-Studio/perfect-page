import slugify from "slugify";
import { v4 as uuidv4 } from "uuid";

function slugifier(paragraph: string): string {
  return slugify(paragraph, {
    replacement: "-",
    remove: /[*+~.()'"!:@]/g,
    lower: true,
    strict: false,
    locale: "en",
    trim: true,
  });
}

export { slugifier as slugify };

export function slugifyWithId(paragraph: string): string {
  return slugify(`${paragraph}-${uuidv4()}`, {
    replacement: "-",
    remove: /[*+~.()'"!:@]/g,
    lower: true,
    strict: false,
    locale: "en",
    trim: true,
  });
}
