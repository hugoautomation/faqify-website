import { groq } from "next-sanity";

export const CONTACT_QUERY = groq`*[_type == "contact"][0]{
  tagline,
  title,
  description,
  contactMethods[]{
    icon,
    title,
    description,
    link
  },
  meta_title,
  meta_description,
  noindex,
  ogImage {
    asset->{
      _id,
      url,
      metadata {
        dimensions {
          width,
          height
        }
      }
    },
  }
}`;
