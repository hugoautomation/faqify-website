import { groq } from "next-sanity";
import { linkQuery } from "@/sanity/queries/shared/link";
import { imageQuery } from "@/sanity/queries/shared/image";

// @sanity-typegen-ignore
export const compare4Query = groq`
  _type == "compare-4" => {
    _type,
    _key,
    padding,
    title,
    titles,
    columns[]{
      _key,
      title,
      primary,
      secondary
    },
    body[]{
      ...,
      markDefs[]{
        ...,
        _type == "link" => {
          ${linkQuery}
        }
      },
      _type == "image" => {
        ${imageQuery}
      }
    },
    links[]{
      ${linkQuery}
    },
  }
`;
