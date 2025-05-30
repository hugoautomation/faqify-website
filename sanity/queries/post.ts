import { groq } from "next-sanity";
import { linkQuery } from "./shared/link";
import { imageQuery } from "./shared/image";

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]{
    title,
    slug,
    image{
      ${imageQuery}
    },
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
    author->{
      name,
      image {
        ${imageQuery}
      }
    },
    _createdAt,
    _updatedAt,
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
    },
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )
}`;

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug)] | order(_createdAt desc)[$offset...$end]{
    _id,
    _createdAt,
    title,
    slug,
    excerpt,
    author->{
      name,
      title,
      image {
        ${imageQuery}
      }
    },
    image{
      ${imageQuery}
    },
    categories[]->{
      _id,
      title,
    },
}`;

export const POSTS_SLUGS_QUERY = groq`*[_type == "post" && defined(slug)]{slug}`;

export const POSTS_COUNT_QUERY = groq`count(*[_type == "post"])`;
