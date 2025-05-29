import { groq } from "next-sanity";
import { linkQuery } from "@/sanity/queries/shared/link";

// @sanity-typegen-ignore
export const timeline3Query = groq`
  _type == "timeline-3" => {
    _type,
    _key,
    padding,
    title,
    description,
    links[]{
      ${linkQuery},
    },
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
    },
  }
`;
