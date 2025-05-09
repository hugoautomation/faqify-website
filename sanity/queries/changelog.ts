import { groq } from "next-sanity";
import { linkQuery } from "./shared/link";

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
    author->{
      name,
      title,
      image {
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
      }
    },
    categories[]->{
      _id,
      title,
      color
    },
}`;
