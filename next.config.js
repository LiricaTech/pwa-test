/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    // disable: process.env.NODE_ENV === "development",
})

const nextConfig = withPWA({
  images: {
    remotePatterns: [
      {
        hostname: "westonacademy.education"
      },
      {
        hostname: "scontent.faep28-1.fna.fbcdn.net"
      }
    ]
  }
})


module.exports = nextConfig
