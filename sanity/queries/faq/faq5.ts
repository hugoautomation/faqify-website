import { groq } from "next-sanity";
import { linkQuery } from "../shared/link";
import { imageQuery } from "../shared/image";

// @sanity-typegen-ignore
export const faq5Query = groq`
  _type == "faq-5" => {
    _type,
    _key,
    padding,
    faqs[]->{
      _id,
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
    },
  }
`;
