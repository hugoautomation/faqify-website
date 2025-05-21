import { groq } from "next-sanity";
import { linkQuery } from "@/sanity/queries/shared/link";

// @sanity-typegen-ignore
export const gallery1Query = groq`
  _type == "gallery-1" => {
    _type,
    _key,
    padding,
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
      logo{
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
