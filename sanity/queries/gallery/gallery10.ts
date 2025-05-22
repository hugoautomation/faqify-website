import { groq } from "next-sanity";
import { linkQuery } from "@/sanity/queries/shared/link";

// @sanity-typegen-ignore
export const gallery10Query = groq`
  _type == "gallery-10" => {
    _type,
    _key,
    padding,
    title,
    description,
    testimonials[]->{
      ...,
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
    }
  }
`;
