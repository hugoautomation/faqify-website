import { groq } from "next-sanity";
import { linkQuery } from "./shared/link";
export const CONTACT_QUERY = groq`*[_type == "contact"][0]{
  tagline,
  title,
  description,
  contactMethods[]{
    icon,
    title,
    description,
    link {
      ${linkQuery}
    }
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
