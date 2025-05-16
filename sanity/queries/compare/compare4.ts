import { groq } from "next-sanity";
import { linkQuery } from "@/sanity/queries/shared/link";

// @sanity-typegen-ignore
export const compare4Query = groq`
  _type == "compare-4" => {
    _type,
    _key,
    padding,
    title,
    titles,
    columns[]{
      _key,
      title,
      primary,
      secondary
    },
    body[]{
      ...,
      markDefs[]{
        ...,
        _type == "link" => {
          ${linkQuery}
        }
      },
      _type == "image" => {
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
      }
    },
    links[]{
      ${linkQuery}
    },
  }
`;
