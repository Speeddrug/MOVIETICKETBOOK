import React, { useState } from "react";
import BlurCircle from "./BlurCircle";
import { ChevronLastIcon, ChevronsRightIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { dummyDateTimeData } from "../assets/assets";

const DateSelect = ({ id = "dateSelect" }) => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const onBookHandler = () => {
    if (!selectedDate) return toast("Please select a date");
    if (!selectedTime) return toast("Please select a time");

    // Navigate using showId (unique for each show)
    navigate(`/movies/${id}/${selectedTime.showId}`);
    scrollTo(0, 0);
  };

  const allDates = Object.keys(dummyDateTimeData);

  return (
    <div id={id} className="pt-8 md:pt-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative p-6 md:p-8 bg-primary/10 border border-primary/20 rounded-lg">
        <BlurCircle top="-100px" left="-100px" />
        <BlurCircle top="100px" left="0px" />

        <div className="flex-1">
          {/* ---- DATE SELECTION ---- */}
          <p className="text-lg font-semibold">Choose Date</p>
          <div className="flex items-center gap-2 mt-4">
            <ChevronLastIcon width={28} />

            <div className="flex gap-4 overflow-x-auto no-scrollbar">
              {allDates.length > 0 ? (
                allDates.map((date) => {
                  const parsedDate = new Date(date);
                  return (
                    <button
                      key={date}
                      onClick={() => {
                        setSelectedDate(date);
                        setSelectedTime(null); // reset time if date changes
                      }}
                      className={`flex flex-col items-center justify-center h-14 w-14 rounded cursor-pointer transition
                        ${
                          selectedDate === date
                            ? "bg-primary text-white border border-primary/70"
                            : "bg-white/10 hover:bg-white/20"
                        }`}
                    >
                      <span>{parsedDate.getDate()}</span>
                      <span>
                        {parsedDate.toLocaleString("en-US", { month: "short" })}
                      </span>
                    </button>
                  );
                })
              ) : (
                <p className="text-gray-500">No dates available</p>
              )}
            </div>

            <ChevronsRightIcon width={28} />
          </div>

          {/* ---- TIME SELECTION ---- */}
          {selectedDate && (
            <div className="mt-6">
              <p className="text-lg font-semibold">Choose Time</p>
              <div className="flex gap-4 flex-wrap mt-3">
                {dummyDateTimeData[selectedDate]?.map((slot) => {
                  const parsedTime = new Date(slot.time);
                  return (
                    <button
                      key={slot.showId}
                      onClick={() => setSelectedTime(slot)}
                      className={`px-4 py-2 rounded border transition
                        ${
                          selectedTime?.showId === slot.showId
                            ? "bg-primary text-white border-primary/70"
                            : "bg-white/10 hover:bg-white/20"
                        }`}
                    >
                      {parsedTime.toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* ---- BOOK BUTTON ---- */}
        <button
          onClick={onBookHandler}
          className="bg-primary text-white px-6 py-2 mt-4 md:mt-0 rounded hover:bg-primary/90 transition-all cursor-pointer"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default DateSelect;
