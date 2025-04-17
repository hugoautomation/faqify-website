import { groq } from "next-sanity";
import { linkQuery } from "../shared/link";

// @sanity-typegen-ignore
export const hero25Query = groq`
  _type == "hero-25" => {
    _type,
    _key,
    tagLine,
    title,
    image{
      asset->{
        _id,
        url,
        mimeType,
        metadata {
          lqip,
          dimensions {
            width,
            height
          }
        }
      },
      alt
    },
    links[]{
      ${linkQuery}
    },
    tags
  }
`;
