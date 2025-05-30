import { groq } from "next-sanity";
import { linkQuery } from "../../shared/link";
import { imageQuery } from "../../shared/image";

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
      markDefs[]{
        ...,
        _type == "link" => {
          ${linkQuery}
        }
      },
      _type == "image" => {
        ${imageQuery}
      }
    },
    links[]{
      ${linkQuery}
    },
  }
`;
