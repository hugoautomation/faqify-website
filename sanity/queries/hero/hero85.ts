import { groq } from "next-sanity";
import { linkQuery } from "../shared/link";

// @sanity-typegen-ignore
export const hero85Query = groq`
  _type == "hero-85" => {
    _type,
    _key,
    tag{
      title,
      description
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
    images[]{
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
    links[]{
      ${linkQuery}
    },
  }
`;
