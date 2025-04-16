import { groq } from "next-sanity";

// @sanity-typegen-ignore
export const hero174Query = groq`
  _type == "hero-174" => {
    _type,
    _key,
    backgroundImage{
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
    title,
    body[]{
      ...,
      _type == "image" => {
        ...,
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
        }
      }
    },
    links[]{
      _key,
      iconVariant,
      title,
      href,
      target,
      buttonVariant
    },
    tag
  }
`;
