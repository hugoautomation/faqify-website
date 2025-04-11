import { groq } from "next-sanity";

// @sanity-typegen-ignore
export const feature202CardQuery = groq`
  _type == "feature-202-card" => {
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
    },
    link
  }
`;
