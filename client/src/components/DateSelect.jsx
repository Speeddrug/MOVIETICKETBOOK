import React, { useState } from 'react';
import BlurCircle from './BlurCircle';
import { ChevronLastIcon, ChevronsRightIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';




const DateSelect = ({ dateTime = [], id = 'dateSelect' }) => {
const navigate= useNavigate()
const [selected,setSelected]= useState(null)
const onBookHandler=()=>
{
  if(!selected){
    return toast   ('please select a date')
  }
  navigate(`/movies/${id}/${selected}`);
  scrollTo(0,0)
}

  return (
    <div id={id} className="pt-8 md:pt-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative p-6 md:p-8 bg-primary/10 border border-primary/20 rounded-lg">
        <BlurCircle top="-100px" left="-100px" />
        <BlurCircle top="100px" left="0px" />

        <div className="flex-1">
          <p className="text-lg font-semibold">Choose Date</p>

          <div className="flex items-center gap-2 mt-4">
            <ChevronLastIcon width={28} />

            <div className="flex gap-4 overflow-x-auto no-scrollbar">
              {Array.isArray(dateTime) && dateTime.length > 0 ? (
                dateTime.map((date) => {
                  const parsedDate = new Date(date);
                  return (
                    <button
                      key={date} onClick={() => setSelected(date)}  // ✅ Updates selected state

                      className={`flex flex-col items-center justify-center h-14 w-14 rounded cursor-pointer transition
  ${selected === date ? "bg-primary text-white border border-primary/70" : "bg-white/10 hover:bg-white/20"}`}
     >
                      <span>{parsedDate.getDate()}</span>
                      <span>{parsedDate.toLocaleString('en-US', { month: 'short' })}</span>
                    </button>
                  );
                })
              ) : (
                <p className="text-gray-500">No dates available</p>
              )}
            </div>

            <ChevronsRightIcon width={28} />
          </div>
        </div>

        <button onClick={onBookHandler}
        className="bg-primary text-white px-6 py-2 mt-4 md:mt-0 rounded hover:bg-primary/90 transition-all cursor-pointer">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default DateSelect;
