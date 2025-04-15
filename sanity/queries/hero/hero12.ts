import { groq } from "next-sanity";

// @sanity-typegen-ignore
export const hero12Query = groq`
  _type == "hero-12" => {
    _type,
    _key,
    tagLine,
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
    techLogos[]{
      _key,
      title,
      link,
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
      }
    }
  }
`;
