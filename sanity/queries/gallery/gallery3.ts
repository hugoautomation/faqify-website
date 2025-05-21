import { groq } from "next-sanity";
import { linkQuery } from "@/sanity/queries/shared/link";

// @sanity-typegen-ignore
export const gallery3Query = groq`
  _type == "gallery-3" => {
    _type,
    _key,
    padding,
    title,
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
