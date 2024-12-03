import React from 'react'

const Hero = ({title, imageUrl}) => {
  return (
    <div className='hero container'>
      {/* Text section */}
      <div className='banner'>
        <h1>{title}</h1>
        <p>
          ZeeCare Medical Institute is a state-of-the-art facility dedicated to providing comprehensive healthcare service with compassinon and experties. Out team of skilled Professional is commited to delevering personalized care tailorated to each patient's needs. At ZeeCare, we prioritize your well-being, ensuring a harmonious journey toward optimal health and wellness.
        </p>
      </div>
      {/* Image Section */}
      <div className='banner'>
        <img src={imageUrl} alt="hero" className='animated-image'/>
        <span>
          <img src="/Vector.png" alt="vector" />
        </span>
      </div>
    </div>
  )
}

export default Hero