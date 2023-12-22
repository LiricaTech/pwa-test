import React from 'react'
import Image from "next/image"

function Hero({img = "https://westonacademy.education/assets/imgs/logo-WIA.png", title}) {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
      {title ? <h1>{title}</h1> : "Default Title"}
      {img && <Image src={img} alt="hero" width={300} height={200} />}
      <button style={{padding: 20, margin: 20, borderRadius: 10, backgroundColor: "darkblue", color: "white", border: "none", cursor: "pointer", fontSize: 20, fontWeight: "bold"}}>Log In</button>
    </div>
  )
}

export default Hero