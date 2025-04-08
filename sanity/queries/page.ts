import { groq } from "next-sanity";
import { sectionHeaderQuery } from "./section-header";
import { hero12Query } from "./hero/hero12";
import { faq1Query } from "./faq/faq1";
import { logos1Query } from "./logos/logos1";
import { feature1Query } from "./feature/feature1";
import { feature3Query } from "./feature/feature3";
export const PAGE_QUERY = groq`
  *[_type == "page" && slug.current == $slug][0]{
    blocks[]{
      ${sectionHeaderQuery},
      ${hero12Query},
      ${faq1Query},
      ${logos1Query},
      ${feature1Query},
      ${feature3Query},
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
  }
`;

export const PAGES_SLUGS_QUERY = groq`*[_type == "page" && defined(slug)]{slug}`;
