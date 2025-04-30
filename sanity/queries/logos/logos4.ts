import { groq } from "next-sanity";

// @sanity-typegen-ignore
export const logos4Query = groq`
  _type == "logos-4" => {
    _type,
    _key,
    padding,
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
