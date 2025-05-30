import { groq } from "next-sanity";
import { linkQuery } from "../shared/link";
import { imageQuery } from "../shared/image";

// @sanity-typegen-ignore
export const faq8Query = groq`
  _type == "faq-8" => {
    _type,
    _key,
    padding,
    sections[]{
      _type,
      _key,
      title,
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
        }
      }
    }
  }
`;
