import WeatherResult from "@/components/WeatherResult";
import Image from "next/image";
import React from "react";

export default async function page({ params }) {
  const url = ` http://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_WEATHER_KEY}&q=${params.cityName}&days=3&aqi=no&alerts=no`;

  // weather fetch
  const res = await fetch(url, { cache: "no-cache" });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  //photo fetch
  const photoUrl = `https://api.pexels.com/v1/search?query=${
    params.cityName + " " + data.location.country + " " + "city"
  }&per_page=1&orientation=landscape`;

  const options = {
    method: "GET",
    headers: { Authorization: `${process.env.NEXT_PUBLIC_PHOTO_KEY}` },
  };

  const photoRes = await fetch(photoUrl, options);
  if (!photoRes.ok) {
    throw new Error("Failed to fetch data");
  }
  const photoData = await photoRes.json();

  return (
    <div>
      <div>
        <Image
          className="object-cover blur sm:blur-lg scale-100 lg:scale-110"
          src={photoData.photos[0].src.small}
          alt="bg"
          fill={true}
          quality={50}
        />
      </div>
      <WeatherResult data={data} photoData={photoData} />
    </div>
  );
}
