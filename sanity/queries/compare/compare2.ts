import { groq } from "next-sanity";

// @sanity-typegen-ignore
export const compare2Query = groq`
  _type == "compare-2" => {
    _type,
    _key,
    padding,
    columns[]{
      _key,
      featured,
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
      title,
      list,
    },
  }
`;
