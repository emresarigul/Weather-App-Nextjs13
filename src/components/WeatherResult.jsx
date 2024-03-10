import React from "react";
import Image from "next/image";

export default function WeatherResult({ data, photoData }) {
  const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <div className="min-h-screen flex items-center mx-7 absolute top-10 sm:top-0 right-0 left-0 overflow-auto">
      <div className="relative text-white w-full md:w-3/4 lg:w-[1000px] h-[550px] sm:h-[600px] mx-auto md:top-8">
        <div className="flex flex-col lg:flex-row w-full justify-between relative z-10 backdrop-blur-[3px] bg-black/20 rounded-t-md">
          <div className="flex items-center justify-between px-5 lg:px-0 lg:mx-5 w-full pt-5 lg:pt-0 mb-5 lg:mb-0">
            <div className="flex space-x-6 lg:space-x-10 items-center">
              <div className="text-4xl sm:text-5xl lg:text-8xl relative">
                {Math.trunc(data.current.temp_c)}
                <span className="ml-0.5 text-2xl lg:text-5xl absolute top-0 lg:top-2">
                  °
                </span>
              </div>
              <div className="flex flex-col sm:items-center justify-center">
                <Image
                  src={`https:${data.current.condition.icon}`}
                  width={64}
                  height={64}
                  quality={100}
                  alt="weather-icon"
                  className="w-10 lg:w-auto"
                />
                <div className="hidden sm:block text-base lg:text-2xl">
                  {data.current.condition.text}
                </div>
              </div>
            </div>
            <div className="flex lg:flex-col items-center space-x-5 lg:space-x-0">
              <div className="flex flex-col items-center lg:mb-5">
                <div className="w-9 lg:w-auto">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/8179/8179067.png"
                    width={48}
                    height={48}
                    quality={100}
                    alt="sunrise-icon"
                  />
                </div>
                <div className="text-xs lg:text-base">
                  {data.forecast.forecastday[0].astro.sunrise}
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-9 lg:w-auto">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/8179/8179075.png"
                    width={48}
                    height={48}
                    quality={100}
                    alt="sunset-icon"
                  />
                </div>
                <div className="text-xs lg:text-base">
                  {data.forecast.forecastday[0].astro.sunset}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 w-full">
            {data.forecast.forecastday.map((forecast, index) => {
              const forecastDate = new Date(`${forecast.date}`);
              const findDay = forecastDate.getDay();
              return (
                <div
                  className="flex flex-col items-center justify-center px-4 border-r last:border-none lg:first:border-l"
                  key={index}
                >
                  <div>
                    <Image
                      src={`https:${forecast.day.condition.icon}`}
                      width={64}
                      height={64}
                      quality={100}
                      alt="weather-icon"
                      className="mb-2 w-9 lg:w-auto"
                    />
                  </div>
                  <div className="text-lg sm:text-2xl mb-2">
                    {Math.trunc(forecast.day.maxtemp_c)}
                    <span className="ml-0.5">°</span>
                  </div>
                  <div className="text-lg sm:text-2xl mb-4">
                    {Math.trunc(forecast.day.mintemp_c)}
                    <span className="ml-0.5">°</span>
                  </div>
                  <div className="mb-3 font-medium text-sm sm:text-base">
                    {daysOfTheWeek[findDay]}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="city-name-current-datas pl-6 pt-6">
          <div className="">
            <Image
              className="object-cover rounded-md brightness-75"
              src={photoData.photos[0].src.large}
              alt="bg"
              fill={true}
              quality={50}
            />
            <div className="top-0 relative">
              <div className="text-2xl md:text-3xl lg:text-5xl mb-5">
                {data.location.name}
              </div>
              <div className="mb-3">
                Humidity
                <span className="ml-20">{data.current.humidity}%</span>
              </div>
              <div className="mb-3">
                Chance of rain
                <span className="ml-9">
                  {data.forecast.forecastday[0].day.daily_chance_of_rain}%
                </span>
              </div>
              <div className="mb-3">
                Wind
                <span className="ml-[6.7rem]">{data.current.wind_kph} kph</span>
              </div>
              <div>
                Feels like
                <span className="ml-[4.8rem] relative">
                  {Math.trunc(data.current.feelslike_c)}
                  <span className="ml-0.5 text-base absolute -top-1">°</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-7 bottom-5 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          {data.location.country}
        </div>
      </div>
    </div>
  );
}
