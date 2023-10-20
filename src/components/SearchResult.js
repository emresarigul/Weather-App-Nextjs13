import React from "react";

export default async function SearchBox({ searchParams }) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchParams.cityname}&units=metric&appid=${process.env.NEXT_PUNLIC_WEATHER_KEY}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return (
    <div className="">
      <div> {data.name} </div>
      <div>{data.main.temp}</div>
    </div>
  );
}
