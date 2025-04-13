import { groq } from "next-sanity";

// @sanity-typegen-ignore
export const feature117CardQuery = groq`
  _type == "feature-117-card" => {
    _type,
    _key,
    tag,
    title,
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
