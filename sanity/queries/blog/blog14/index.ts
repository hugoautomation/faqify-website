import { groq } from "next-sanity";

// @sanity-typegen-ignore
export const blog14Query = groq`
  _type == "blog-14" => {
    _type,
    _key,
    padding,
    gridColumns,
    title,
    posts[]->{
      _id,
      _createdAt,
      title,
      slug,
      excerpt,
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
      categories[]->{
        _id,
        title,
      },
      author->{
        _id,
        name,
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
