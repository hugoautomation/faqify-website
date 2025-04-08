import { groq } from "next-sanity";

// @sanity-typegen-ignore
export const feature3CardQuery = groq`
  _type == "feature-3-card" => {
    _type,
    _key,
    iconVariant,
    title,
    description,
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
`;
