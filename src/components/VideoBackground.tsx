
import { useEffect, useRef, useState } from 'react';

interface VideoBackgroundProps {
  videoSrc: string;
  fallbackImage?: string;
}

const VideoBackground = ({ videoSrc, fallbackImage }: VideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    // Start playing the video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay was prevented:', error);
        setVideoError(true);
      });
    }
  }, []);

  // If we have a video error, just show the fallback image
  if (videoError) {
    return (
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div 
          className="absolute w-full h-full bg-cover bg-center opacity-40"
          style={{ 
            backgroundImage: `url(${fallbackImage || '/planets/solar-system-poster.jpg'})` 
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-space-dark/70 via-transparent to-space-dark/90"></div>
      </div>
    );
  }

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
        onError={() => setVideoError(true)}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-space-dark/70 via-transparent to-space-dark/90"></div>
    </div>
  );
};

export default VideoBackground;
