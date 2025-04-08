import { groq } from "next-sanity";

// @sanity-typegen-ignore
export const featureImageQuery = groq`
  _type == "feature-image" => {
    _type,
    _key,
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
  }
`;
