import { useEffect, useRef } from 'react';
import previewVideo from 'assets/preview.mp4';

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!videoElement) return;

        if (entry.isIntersecting) {
          videoElement.play().catch(() => {});
        } else {
          videoElement.pause();
        }
      },
      {
        threshold: 0.5, // 50% of the video must be visible
      }
    );

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  return (
     <video 
      ref={videoRef} 
      width="100%" 
      style={{ borderRadius: '20px', height: '600px' }} 
      autoPlay 
      muted 
      loop 
      playsInline>
      <source src={previewVideo} type="video/mp4" />
      Your browser does not support the video tag.
  </video>
  
  );
};

export default VideoPlayer;

