import { groq } from "next-sanity";

// @sanity-typegen-ignore
export const blog16Query = groq`
  _type == "blog-16" => {
    _type,
    _key,
    padding,
    posts[]->{
      _id,
      _createdAt,
      title,
      slug,
      categories[]->{
        _id,
        title,
      },
      author->{
        _id,
        name,
        title,
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
        }
      }
    },
  }
`;
