import { groq } from "next-sanity";
import { imageQuery } from "../../shared/image";
import { videoQuery } from "../../shared/video";

// @sanity-typegen-ignore
export const featureImageQuery = groq`
  _type == "feature-image" => {
    _type,
    _key,
    mediaType,
    image{
      ${imageQuery}
    },
    video{
      ${videoQuery}
    },
  }
`;
