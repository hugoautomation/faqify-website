import { groq } from "next-sanity";
import { linkQuery } from "@/sanity/queries/shared/link";
import { imageQuery } from "@/sanity/queries/shared/image";

// @sanity-typegen-ignore
export const gallery1Query = groq`
  _type == "gallery-1" => {
    _type,
    _key,
    padding,
    columns[]{
      _key,
      title,
      image{
        ${imageQuery}
      },
      logo{
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
