import { groq } from "next-sanity";
import { linkQuery } from "../shared/link";
import { imageQuery } from "../shared/image";

// @sanity-typegen-ignore
export const hero13Query = groq`
  _type == "hero-13" => {
    _type,
    _key,
    tag,
    title,
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
