import { groq } from "next-sanity";

// @sanity-typegen-ignore
export const logos9Query = groq`
  _type == "logos-9" => {
    _type,
    _key,
    padding,
    title,
    images[]{
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
      },
      alt
    },
    testimonials[]->{
      ...,
      image{
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
        },
        alt
      },
    }
  }
`;
