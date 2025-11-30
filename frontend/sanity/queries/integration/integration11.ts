import { groq } from "next-sanity";
import { imageQuery } from "../shared/image";

// @sanity-typegen-ignore
export const integration11Query = groq`
  _type == "integration-11" => {
    _type,
    _key,
    padding,
    title,
    categories[]{
      _key,
      name,
      description,
      integrations[]{
        _key,
        title,
        description,
        image{
          ${imageQuery}
        },
        href,
      },
    },
  }
`;

