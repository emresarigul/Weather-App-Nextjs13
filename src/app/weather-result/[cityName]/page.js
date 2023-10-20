import Image from "next/image";
import React from "react";

export default async function page({ params }) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${params.cityName}&units=metric&appid=${process.env.NEXT_PUNLIC_WEATHER_KEY}`;
  const secondUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${params.cityName}&units=metric&appid=${process.env.NEXT_PUNLIC_WEATHER_KEY}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  const response = await fetch(secondUrl);
  if (!response) {
    throw new Error("Failed to fetch data");
  }
  const secondData = await response.json();
  //console.log(secondData.list[0].weather[0].id);
  //console.log(secondData.list[6].main.temp);
  return (
    <div className="">
      <div>
        <Image
          className="object-cover"
          src="https://images.pexels.com/photos/831243/pexels-photo-831243.jpeg?cs=srgb&dl=pexels-syed-hasan-mehdi-831243.jpg&fm=jpg"
          alt="bg"
          fill={true}
          quality={100}
        />
      </div>
      <div className="min-h-screen flex items-center mx-7">
        <div className="relative text-white bg-blue-500 w-[1300px] h-[500px] mx-auto">
          <div className="flex h-48 bg-red-500 w-full justify-between">
            <div className="flex gap-5 ml-5">
              <div className="text-8xl">{Math.trunc(data.main.temp)}</div>
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                  width={100}
                  height={50}
                  quality={100}
                  alt="weather-icon"
                />
                <div className="text-2xl">{data.weather[0].main}</div>
              </div>
            </div>

            <div className="grid grid-cols-7">
              {secondData.list.splice(0, 7).map((secondData, index) => {
                return (
                  <div
                    className="flex flex-col items-center justify-center border-l px-4"
                    key={index}
                  >
                    <div>
                      <Image
                        src={`https://openweathermap.org/img/wn/${secondData.weather[0].icon}@2x.png`}
                        width={100}
                        height={50}
                        quality={100}
                        alt="weather-icon"
                      />
                    </div>
                    <div>{Math.trunc(secondData.main.temp)}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="emöre">
            <div className="text-xl mb-5">{data.name}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
