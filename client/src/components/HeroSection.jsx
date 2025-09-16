import React from 'react'
import { assets } from '../assets/assets'
import { ArrowRight, CalendarIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
const navigate = useNavigate()
return (
<div className='flex flex-col items-start justify-start gap-2 px-6 md:px-16 lg:px-36
bg-[url("/backgroundImage.png")] bg-cover bg-center h-screen pt-40 md:pt-48'>

{/* Logo */}
<img src={assets.marvelLogo} alt="" className="max-h-10 lg:h-10"/>

{/* Title */}
<h1 className='text-3xl md:text-5xl md:leading-[1.2] font-bold max-w-full mt-2'>
Guardians of the Galaxy
</h1>

{/* Info */}
<div className='flex items-center gap-4 text-gray-300 mt-2 text-sm md:text-base'>
<span>Action | Adventure | Sci-Fi</span>

<div className='flex items-center gap-1'>
<CalendarIcon className='w-4 h-4' />
<span>2018</span>
</div>

<div className='flex items-center gap-1'>
<CalendarIcon className='w-4 h-4' />
<span>2h 8m</span>
</div>
</div>

{/* Description */}
<p className='max-w-sm text-gray-300 text-sm md:text-base mt-2'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem d architecto minima cumque deserunt, alias nemo? Ullam commodi nihil nobis eveniet!
</p>

{/* Explore Movies Button */}
<button
onClick={() => navigate('/movies')}
className='flex items-center gap-2 px-6 py-2 text-sm bg-[#F84565] hover:bg-red-700 transition rounded-full font-medium text-white cursor-pointer mt-3'
>
Explore Movies
<ArrowRight className='w-5 h-5' />
</button>
</div>
)
}

export default HeroSection
