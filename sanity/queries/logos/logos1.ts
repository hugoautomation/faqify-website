import { groq } from "next-sanity";

// @sanity-typegen-ignore
export const logos1Query = groq`
  _type == "logos-1" => {
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
  }
`;
