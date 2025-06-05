import { groq } from "next-sanity";
import { linkQuery } from "@/sanity/queries/shared/link";
import { imageQuery } from "@/sanity/queries/shared/image";

// @sanity-typegen-ignore
export const gallery8Query = groq`
  _type == "gallery-8" => {
    _type,
    _key,
    padding,
    link{
      ${linkQuery},
    },
    columns[]{
      _key,
      image{
        ${imageQuery}
      },
      link{
        ${linkQuery},
      },
      categories[]->{
        _id,
        title,
        color
      },
    },
  }
`;
