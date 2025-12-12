import { groq } from "next-sanity";
import { linkQuery } from "../shared/link";

// @sanity-typegen-ignore
export const cta12Query = groq`
  _type == "cta-12" => {
    _type,
    _key,
    heading,
    description,
    primaryButton{
      ${linkQuery}
    },
    secondaryButton{
      ${linkQuery}
    }
  }
`;
