import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] w-full h-full left-0 z-[1] object cover"
      >
        {/* Change this src to use a different video */}
        <source src="/t3.mp4" type="video/mp4" />
        {/* Alternative options:
        <source src="/cards-video.webm" type="video/webm" />
        <source src="/encryption.webm" type="video/webm" />
        <source src="/your-new-video.webm" type="video/webm" />
        */}
      </video>
      <HeroContent/>
    </div>
  );
};

export default Hero;
