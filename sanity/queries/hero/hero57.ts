import { groq } from "next-sanity";

// @sanity-typegen-ignore
export const hero57Query = groq`
  _type == "hero-57" => {
    _type,
    _key,
    title,
    body,
    links[]{
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
      description,
      title,
      href,
      target,
      buttonVariant
    },
    tags
  }
`;
