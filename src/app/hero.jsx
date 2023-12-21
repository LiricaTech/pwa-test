import React from 'react'
import Image from "next/image"

function Hero({img , title = "Default"}) {
  return (
    <div>
      <h1>{title}</h1>
      {img && <Image src={img} alt="hero" />}
    </div>
  )
}

export default Hero