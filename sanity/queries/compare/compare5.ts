import { groq } from "next-sanity";
import { linkQuery } from "@/sanity/queries/shared/link";

// @sanity-typegen-ignore
export const compare5Query = groq`
  _type == "compare-5" => {
    _type,
    _key,
    padding,
    columns[]{
      _key,
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
      description,
      link {
        ${linkQuery}
      },
    },
  }
`;
