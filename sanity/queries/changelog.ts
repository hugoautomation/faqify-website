import { groq } from "next-sanity";
import { linkQuery } from "./shared/link";
import { imageQuery } from "./shared/image";

export const CHANGELOGS_QUERY = groq`*[_type == "changelog" && defined(slug)] | order(date desc){
    _id,
    title,
    slug,
    version,
    date,
    body[]{
      ...,
      markDefs[]{
        ...,
        _type == "link" => {
          ${linkQuery}
        }
      },
      _type == "image" => {
        ${imageQuery}
      }
    },
    image{
      ${imageQuery}
    },
    author->{
      name,
      title,
      image {
        ${imageQuery}
      }
    },
    categories[]->{
      _id,
      title,
      color
    },
}`;
