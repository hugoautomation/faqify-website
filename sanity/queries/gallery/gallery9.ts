import { groq } from "next-sanity";
import { linkQuery } from "@/sanity/queries/shared/link";

// @sanity-typegen-ignore
export const gallery9Query = groq`
  _type == "gallery-9" => {
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
        }
      },
      title,
      description,
      iconVariant,
    },
  }
`;
