import React, { useState, useRef, useEffect, useCallback } from "react";

const IntroVideo = ({ videoSrc, children, playbackSpeed = 2}) => {
  const [showVideo, setShowVideo] = useState(true);
  const [autoplayFailed, setAutoplayFailed] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .catch(() => {
          console.warn("Autoplay with audio blocked, showing manual play button.");
          setAutoplayFailed(true);
        });
         videoRef.current.playbackRate = playbackSpeed; 
    }
  }, [playbackSpeed]);

  const handleVideoEnd = useCallback(() => {
    setFadeOut(true);
    setTimeout(() => setShowVideo(false), 500);
  }, []);

  const handleManualPlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setAutoplayFailed(false);
    }
  };

  const handleSkipIntro = () => {
    setFadeOut(true);
    setTimeout(() => setShowVideo(false), 500);
  };

  return (
    <>
      {/* ✅ Intro overlay (only exists while showVideo is true) */}
      {showVideo && (
        <div
          className={`fixed inset-0 z-[9999] bg-black transition-opacity duration-500 ${
            fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <video
            ref={videoRef}
            src={videoSrc}
            playsInline
            preload="auto"
            onEnded={handleVideoEnd}
            aria-label="Intro Video"
            className="w-screen h-screen object-cover"
          />

          {/* ✅ Skip Intro Button (Bottom-Right) */}
          <button
            onClick={handleSkipIntro}
            className="absolute bottom-6 right-6 z-10 bg-black/60 hover:bg-black/80 text-white text-sm sm:text-base px-4 py-2 rounded-full shadow-md transition-all duration-200"
          >
            Skip Intro
          </button>

          {/* Manual Play Button (if autoplay blocked) */}
          {autoplayFailed && (
            <button
              onClick={handleManualPlay}
              className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-xl font-semibold"
            >
              ▶ Play with Sound
            </button>
          )}
        </div>
      )}

      {/* ✅ Main content remains scrollable */}
      <div className="relative">{children}</div>
    </>
  );
};

export default IntroVideo;
