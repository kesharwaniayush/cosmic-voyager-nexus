
import { useEffect, useRef } from 'react';

interface VideoBackgroundProps {
  videoSrc: string;
  fallbackImage?: string;
}

const VideoBackground = ({ videoSrc, fallbackImage }: VideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Start playing the video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay was prevented:', error);
      });
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <video
        ref={videoRef}
        className="absolute w-full h-full object-cover opacity-40"
        autoPlay
        muted
        loop
        playsInline
        poster={fallbackImage || '/planets/solar-system-poster.jpg'}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-space-dark/70 via-transparent to-space-dark/90"></div>
    </div>
  );
};

export default VideoBackground;
