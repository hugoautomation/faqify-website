import { groq } from "next-sanity";

export const SETTINGS_QUERY = groq`*[_type == "settings"][0]{
  _type,
  siteName,
  logo{
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
  copyright
}`;
