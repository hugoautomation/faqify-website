import { groq } from "next-sanity";
import { linkQuery } from "../shared/link";
import { imageQuery } from "../shared/image";

// @sanity-typegen-ignore
export const hero85Query = groq`
  _type == "hero-85" => {
    _type,
    _key,
    tag{
      title,
      description
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
    images[]{
      ${imageQuery}
    },
    links[]{
      ${linkQuery}
    },
  }
`;
