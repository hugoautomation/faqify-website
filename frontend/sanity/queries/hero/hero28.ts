import { groq } from "next-sanity";
import { linkQuery } from "../shared/link";
import { imageQuery } from "../shared/image";

// @sanity-typegen-ignore
export const hero28Query = groq`
  _type == "hero-28" => {
    _type,
    _key,
    title,
    description,
    links[]{
      ${linkQuery}
    },
    backgroundIcons[]{
      _key,
      position,
      image{
        ${imageQuery}
      }
    }
  }
`;
