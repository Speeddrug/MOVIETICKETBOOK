import React from 'react'

const BlurCircle = ({ top="auto", left="auto", right="auto", bottom="auto", size="64" }) => {
  return (
    <div 
      className={`absolute -z-50 rounded-full blur-3xl bg-red-500/30`} 
      style={{
        top: top,
        left: left,
        right: right,
        bottom: bottom,
        width: `${size * 0.25}rem`, // Tailwind units: 1 = 0.25rem
        height: `${size * 0.25}rem`
      }}
    >
    </div>
  )
}

export default BlurCircle
