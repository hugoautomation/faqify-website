import { groq } from "next-sanity";
import { linkQuery } from "../shared/link";
import { imageQuery } from "../shared/image";

// @sanity-typegen-ignore
export const hero174Query = groq`
  _type == "hero-174" => {
    _type,
    _key,
    backgroundImage{
      ${imageQuery}
    },
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
    tag
  }
`;
