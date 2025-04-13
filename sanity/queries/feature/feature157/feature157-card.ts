import { groq } from "next-sanity";

// @sanity-typegen-ignore
export const feature157CardQuery = groq`
  _type == "feature-157-card" => {
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
    link
  }
`;
