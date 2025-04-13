import { groq } from "next-sanity";

// @sanity-typegen-ignore
export const feature66CardQuery = groq`
  _type == "feature-66-card" => {
    _type,
    _key,
    logo{
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
