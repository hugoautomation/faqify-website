import { groq } from "next-sanity";
import { linkQuery } from "../shared/link";

// @sanity-typegen-ignore
export const faq9Query = groq`
  _type == "faq-9" => {
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
