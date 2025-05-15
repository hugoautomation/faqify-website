import { groq } from "next-sanity";

// @sanity-typegen-ignore
export const compare1Query = groq`
  _type == "compare-1" => {
    _type,
    _key,
    padding,
    images[]{
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
      },
      alt
    },
    columns[]{
      _key,
      label,
      primary,
      secondary,
      hasIcon,
    },
  }
`;
