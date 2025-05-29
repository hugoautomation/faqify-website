import { groq } from "next-sanity";

// @sanity-typegen-ignore
export const timeline4Query = groq`
  _type == "timeline-4" => {
    _type,
    _key,
    padding,
    tag,
    title,
    description,
    columns[]{
      _key,
      title,
      description,
      iconVariant,
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
        }
      },
    },
  }
`;
