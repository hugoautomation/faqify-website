import { groq } from "next-sanity";

export const videoQuery = groq`
  asset->{
    _id,
    url,
    originalFilename,
    size,
    mimeType,
  },
  alt,
  showControls,
  playbackRate,
  autoplay,
  loop,
  muted
`;
