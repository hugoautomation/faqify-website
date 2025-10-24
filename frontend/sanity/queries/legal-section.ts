import { groq } from "next-sanity";
import { linkQuery } from "./shared/link";

// @sanity-typegen-ignore
export const legalSectionQuery = groq`
  _type == "legal-section" => {
    _type,
    _key,
    padding,
    sectionWidth,
    stackAlign,
    direction,
    tag,
    title,
    description,
    links[]{
      ${linkQuery}
    },
  }
`;
