"use client";

import { useEffect, useRef } from "react";

interface VideoPlayerProps {
  src: string;
  alt?: string;
  showControls?: boolean;
  playbackRate?: number;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  className?: string;
}

export default function VideoPlayer({
  src,
  alt,
  showControls = true,
  playbackRate = 1,
  autoplay = false,
  loop = false,
  muted = false,
  className = "object-contain w-full h-auto",
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && playbackRate) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  // Debug logging to help troubleshoot
  useEffect(() => {
    console.log('VideoPlayer props:', { loop, muted, showControls, playbackRate, autoplay });
  }, [loop, muted, showControls, playbackRate, autoplay]);

  return (
    <video
      ref={videoRef}
      className={className}
      controls={showControls}
      autoPlay={autoplay}
      loop={loop}
      muted={muted}
      preload="metadata"
      aria-label={alt || "Video content"}
    >
      <source src={src} type="video/webm" />
      Your browser does not support the video tag.
    </video>
  );
}
