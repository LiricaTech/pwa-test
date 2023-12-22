import React from 'react'
import Image from "next/image"

function Hero({img = "https://westonacademy.education/assets/imgs/logo-WIA.png", title}) {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
      {title ? <h1>{title}</h1> : "Default Title"}
      {img && <Image src={img} alt="hero" width={300} height={200} />}
      <button>Log In</button>
    </div>
  )
}

export default Hero