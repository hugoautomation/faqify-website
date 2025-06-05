import { groq } from "next-sanity";
import { linkQuery } from "@/sanity/queries/shared/link";
import { imageQuery } from "@/sanity/queries/shared/image";

// @sanity-typegen-ignore
export const compare5Query = groq`
  _type == "compare-5" => {
    _type,
    _key,
    padding,
    columns[]{
      _key,
      image{
        ${imageQuery}
      },
      title,
      description,
      link {
        ${linkQuery}
      },
    },
  }
`;
