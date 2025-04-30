import { groq } from "next-sanity";
import { linkQuery } from "../shared/link";

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
        }
      }
    }
  }
`;
