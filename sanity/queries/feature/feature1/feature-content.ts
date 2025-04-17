import { groq } from "next-sanity";
import { linkQuery } from "../../shared/link";

// @sanity-typegen-ignore
export const featureContentQuery = groq`
  _type == "feature-content" => {
    _type,
    _key,
    padding,
    iconVariant,
    tag,
    title,
    body[]{
      ...,
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
