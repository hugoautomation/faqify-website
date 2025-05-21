import { groq } from "next-sanity";
import { linkQuery } from "@/sanity/queries/shared/link";

// @sanity-typegen-ignore
export const gallery4Query = groq`
  _type == "gallery-4" => {
    _type,
    _key,
    padding,
    title,
    description,
    columns[]{
      _key,
      title,
      description,
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
      link{
        ${linkQuery},
      },
      categories[]->{
        _id,
        title,
        color
      },
    },
  }
`;
