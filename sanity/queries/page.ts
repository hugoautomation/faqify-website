import { groq } from "next-sanity";
import { sectionHeaderQuery } from "./section-header";
import { hero12Query } from "./hero/hero12";
import { hero13Query } from "./hero/hero13";
import { hero25Query } from "./hero/hero25";
import { hero57Query } from "./hero/hero57";
import { hero85Query } from "./hero/hero85";
import { hero160Query } from "./hero/hero160";
import { hero174Query } from "./hero/hero174";
import { faq1Query } from "./faq/faq1";
import { logos1Query } from "./logos/logos1";
import { feature1Query } from "./feature/feature1";
import { feature3Query } from "./feature/feature3";
import { feature12Query } from "./feature/feature12";
import { feature15Query } from "./feature/feature15";
import { feature66Query } from "./feature/feature66";
import { feature117Query } from "./feature/feature117";
import { feature157Query } from "./feature/feature157";
import { feature202Query } from "./feature/feature202";
import { blog4Query } from "./blog/blog4";
import { blog13Query } from "./blog/blog13";
import { blog14Query } from "./blog/blog14";
import { blog16Query } from "./blog/blog16";
export const PAGE_QUERY = groq`
  *[_type == "page" && slug.current == $slug][0]{
    blocks[]{
      ${sectionHeaderQuery},
      ${hero12Query},
      ${hero13Query},
      ${hero25Query},
      ${hero57Query},
      ${hero85Query},
      ${hero160Query},
      ${hero174Query},
      ${faq1Query},
      ${logos1Query},
      ${feature1Query},
      ${feature3Query},
      ${feature12Query},
      ${feature15Query},
      ${feature66Query},
      ${feature117Query},
      ${feature157Query},
      ${feature202Query},
      ${blog4Query},
      ${blog13Query},
      ${blog14Query},
      ${blog16Query},
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
