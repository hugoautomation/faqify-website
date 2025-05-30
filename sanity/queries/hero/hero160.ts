import { groq } from "next-sanity";
import { linkQuery } from "../shared/link";
import { imageQuery } from "../shared/image";

// @sanity-typegen-ignore
export const hero160Query = groq`
  _type == "hero-160" => {
    _type,
    _key,
    backgroundImage{
      ${imageQuery}
    },
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
    image{
      ${imageQuery}
    },
  }
`;
