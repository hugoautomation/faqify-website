import { groq } from "next-sanity";
import { imageQuery } from "../shared/image";
import { linkQuery } from "../shared/link";

// @sanity-typegen-ignore
export const integration13Query = groq`
  _type == "integration-13" => {
    _type,
    _key,
    padding,
    tag,
    title,
    description,
    integrations[]{
      _key,
      title,
      image{
        ${imageQuery}
      },
      href,
    },
    button{
      ${linkQuery},
      target,
    },
  }
`;

