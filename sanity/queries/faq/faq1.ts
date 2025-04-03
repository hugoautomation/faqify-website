import { groq } from "next-sanity";

// @sanity-typegen-ignore
export const faq1Query = groq`
  _type == "faq-1" => {
    _type,
    _key,
    padding,
    border,
    faqs[]->{
      _id,
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
    },
  }
`;
