import { groq } from "next-sanity";
import { linkQuery } from "../shared/link";

// @sanity-typegen-ignore
export const faq5Query = groq`
  _type == "faq-5" => {
    _type,
    _key,
    padding,
    border,
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
    },
  }
`;
