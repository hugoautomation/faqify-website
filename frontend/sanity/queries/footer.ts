import { groq } from "next-sanity";
import { linkQuery } from "./shared/link";

export const FOOTER_QUERY = groq`
  *[_type == "footer"][0]{
    _type,
    links[]{
      ${linkQuery},
      _type == "link-group" => {
        links[]{
          ${linkQuery}
        }
      }
    },
    bottomLinks[]{
      ${linkQuery}
    },
  }
`;
