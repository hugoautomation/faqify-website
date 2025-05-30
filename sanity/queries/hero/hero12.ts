import { groq } from "next-sanity";
import { linkQuery } from "../shared/link";
import { imageQuery } from "../shared/image";

// @sanity-typegen-ignore
export const hero12Query = groq`
  _type == "hero-12" => {
    _type,
    _key,
    backgroundImage{
      ${imageQuery}
    },
    tagLine,
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
    image{
      ${imageQuery}
    },
    links[]{
      ${linkQuery}
    },
    techLogos[]{
      _key,
      title,
      link,
      image{
        ${imageQuery}
      }
    }
  }
`;
