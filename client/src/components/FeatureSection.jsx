import { ArrowRight } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import BlurCircle from './BlurCircle'
import { dummyShowsData } from '../assets/assets'
import MovieCard from './MovieCard'

const FeatureSection = () => {
  const navigate = useNavigate()

  return (
    <div className='px-6'>
      <div className='relative flex items-center justify-between pt-20 pb-10'>
        <BlurCircle top='0' right='-80px' />

        <p className='text-gray-300 font-medium text-lg'>Now Showing</p>
        <button
          onClick={() => navigate('/movies')}
          className='group flex items-center gap-2 text-sm text-gray-300'
        >
          View All
          <ArrowRight className='group-hover:translate-x-0.5 transition w-4 h-4' />
        </button>
      </div>

      <div className='flex flex-wrap max-sm:justify-center gap-8 mt-8'>
        {dummyShowsData.slice(0, 4).map((show) => (
          <MovieCard key={show._id} movie={show} />
        ))}
      </div>

      <div className='flex justify-center mt-6 relative'>
        {/* Red blurred rectangle behind */}
        <div className='absolute -z-10 w-40 h-12 bg-red-500/30 rounded-xl blur-xl'></div>

        {/* Button */}
        <button
          onClick={() => {
            window.scrollTo(0, 0)
            navigate('/movies')
          }}
          className='px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full font-medium transition relative'
        >
          Show More
        </button>
      </div>
    </div>
  )
}

export default FeatureSection
