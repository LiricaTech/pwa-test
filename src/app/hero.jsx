import React from 'react'
import Image from "next/image"

function Hero({img = "https://westonacademy.education/assets/imgs/logo-WIA.png", title}) {
  return (
    <div>
      {title ? <h1>{title}</h1> : "Default Title"}
      {img && <Image src={img} alt="hero" width={400} height={400} />}
    </div>
  )
}

export default Hero