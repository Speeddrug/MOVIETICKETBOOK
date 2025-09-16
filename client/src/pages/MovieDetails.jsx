import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dummyDateTimeData, dummyShowsData } from "../assets/assets";
import BlurCircle from "../components/BlurCircle";
import { Heart, PlayCircleIcon, StarIcon } from "lucide-react";
import timeFormat from "../lib/timeFormat";
import DateSelect from "../components/DateSelect";

const MovieDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [liked, setLiked] = useState(false);

  // Load show data
  useEffect(() => {
    const foundShow = dummyShowsData.find((show) => show._id === id);
    if (foundShow) {
      setShow({
        movie: foundShow,
        dateTime: dummyDateTimeData,
      });
    }

    // Check if this movie is already in favorites
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setLiked(favorites.includes(id));
  }, [id]);

  if (!show) {
    return <div className="text-center py-20 text-gray-400">Loading...</div>;
  }

  // Handle favorite toggle
  const toggleLike = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    if (!liked) {
      favorites.push(id); // Add to favorites
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setLiked(true);
    } else {
      const updated = favorites.filter((favId) => favId !== id); // Remove
      localStorage.setItem("favorites", JSON.stringify(updated));
      setLiked(false);
    }
  };

  // Scroll to date selector
  const scrollToDate = () => {
    const element = document.getElementById("dateSelect");
    if (element) {
      const yOffset = -100; // Adjust offset as needed
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="px-6 md:px-16 lg:px-24 pt-20 md:pt-32">
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
        {/* Movie Poster */}
        <img
          src={show.movie.poster_path}
          alt={show.movie.title}
          className="max-md:mx-auto rounded-xl h-[26rem] w-72 object-cover shadow-lg"
        />

        {/* Movie Details */}
        <div className="relative flex flex-col gap-3">
          <BlurCircle top="-100px" left="-100px" />

          <p className="text-primary uppercase tracking-wide">
            {show.movie.original_language || "ENGLISH"}
          </p>

          <h1 className="text-4xl font-semibold max-w-xl text-balance">
            {show.movie.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 text-gray-300">
            <StarIcon className="w-5 h-5 text-primary fill-primary" />
            <span>{show.movie.vote_average.toFixed(1)} User Rating</span>
          </div>

          {/* Overview */}
          <p className="text-gray-400 mt-2 text-sm leading-tight max-w-xl">
            {show.movie.overview}
          </p>

          {/* Runtime / Genre / Year */}
          <p className="text-gray-400 text-sm">
            {timeFormat(show.movie.runtime)} •{" "}
            {show.movie.genres.map((genre) => genre.name).join(", ")} •{" "}
            {show.movie.release_date.split("-")[0]}
          </p>

          {/* Action Buttons */}
          <div className="flex items-center flex-wrap gap-4 mt-4">
            <button className="flex items-center gap-2 px-7 py-3 text-sm bg-gray-800 hover:bg-gray-900 transition rounded-md font-medium cursor-pointer active:scale-95">
              <PlayCircleIcon className="w-5 h-5" />
              Watch Trailer
            </button>

            <button
              onClick={scrollToDate}
              className="px-10 py-3 text-sm bg-primary hover:bg-red-700 rounded-md font-medium active:scale-95"
            >
              Buy Tickets
            </button>

            <button
              className="p-3 bg-gray-800 rounded-full active:scale-95 hover:bg-gray-700 transition"
              onClick={toggleLike}
            >
              <Heart
                className="w-5 h-5"
                stroke={liked ? "none" : "currentColor"}
                fill={liked ? "red" : "none"}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Favorite Cast */}
      <p className="text-lg font-medium mt-20">Your Favorite Cast</p>
      <div className="overflow-x-auto no-scrollbar mt-8 pb-4">
        <div className="flex items-center gap-4 w-max px-4">
          {show.movie.casts.slice(0, 12).map((cast, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                src={cast.profile_path}
                alt={cast.name}
                className="rounded-full h-20 md:h-20 aspect-square object-cover"
              />
              <p className="font-medium text-xs mt-3">{cast.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Date Selection */}
      <DateSelect dateTime={show?.dateTime || []} id="dateSelect" />
    </div>
  );
};

export default MovieDetails;
