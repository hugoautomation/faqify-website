import { groq } from "next-sanity";

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
    images[]{
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
    }
  }
`;
