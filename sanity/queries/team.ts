import { groq } from "next-sanity";
import { linkQuery } from "./shared/link";

export const TEAM_QUERY = groq`*[_type == "team" && defined(slug)] | order(orderRank) {
    _id,
    name,
    title,
    description,
    slug,
    image{
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
    links[]{
      ${linkQuery}
    },
}`;
