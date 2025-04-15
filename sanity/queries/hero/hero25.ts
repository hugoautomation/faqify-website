import { groq } from "next-sanity";

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
      _key,
      iconVariant,
      title,
      href,
      target,
      buttonVariant
    },
    tags
  }
`;
