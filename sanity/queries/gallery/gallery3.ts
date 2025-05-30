import { groq } from "next-sanity";
import { linkQuery } from "@/sanity/queries/shared/link";
import { imageQuery } from "@/sanity/queries/shared/image";

// @sanity-typegen-ignore
export const gallery3Query = groq`
  _type == "gallery-3" => {
    _type,
    _key,
    padding,
    title,
    columns[]{
      _key,
      title,
      description,
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
