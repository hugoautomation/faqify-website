import { groq } from "next-sanity";
import { linkQuery } from "../shared/link";

// @sanity-typegen-ignore
export const hero174Query = groq`
  _type == "hero-174" => {
    _type,
    _key,
    backgroundImage{
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
    tag
  }
`;
