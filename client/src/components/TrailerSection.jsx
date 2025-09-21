import React, { useState } from "react";
import { dummyTrailers } from "../assets/assets";
import ReactPlayer from "react-player";
import BlurCircle from "./BlurCircle";
import { PlayCircleIcon } from "lucide-react"; 

const TrailerSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden">
      <p className="text-gray-300 font-medium text-lg max-w-[960px]">Trailers</p>

     <div className="relative mt-6 w-full">
  <BlurCircle top="-100px" right="-100px" />

  {/* Main Trailer Player */}
  <div className="w-full overflow-hidden">
    <iframe
      className="w-full"
      style={{ height: "315px" }} // fixed vertical height
      src={currentTrailer.videoUrl}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>
</div>


      {/* Trailer Thumbnails */}
      <div className="group grid grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto">
        {dummyTrailers.map((trailer) => (
          
          
          <div

            key={trailer.image}
            className={`relative group-hover:not-hover:opacity-50 hover:-translate-y-1duration-300 transition
                max-md:h-60 md:max-h-60 cursor-pointer
              ${
                currentTrailer.videoUrl === trailer.videoUrl
                  ? "border-red-500"
                  : "border-transparent"
              }`}
            onClick={() => setCurrentTrailer(trailer)}
          >
            <img
              src={trailer.image}
              alt="Trailer thumbnail"
              className="rounded-lg w-full h-full object-cover brightness-75"
            />

            {/* Play Icon Overlay */}
            <PlayCircleIcon
              strokeWidth={1.6}
              className="absolute top-1/2 left-1/2 w-10 h-10 md:w-12 md:h-12 text-white 
                         transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default TrailerSection;
