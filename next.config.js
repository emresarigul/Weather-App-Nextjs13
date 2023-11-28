/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.pexels.com",
      "openweathermap.org",
      "cdn.weatherapi.com",
      "cdn-icons-png.flaticon.com",
      "www.pexels.com",
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig;
