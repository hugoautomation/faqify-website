import { groq } from "next-sanity";
import { linkQuery } from "../shared/link";
import { imageQuery } from "../shared/image";

// @sanity-typegen-ignore
export const faq14Query = groq`
  _type == "faq-14" => {
    _type,
    _key,
    padding,
    title,
    description,
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
