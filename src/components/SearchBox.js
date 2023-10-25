"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [cityName, setCityName] = useState("");
  const router = useRouter();

  const citySearch = (e) => {
    e.preventDefault();
    if (!cityName) return;
    router.push(`/weather-result/${cityName}`);
  };
  return (
    <div className="max-w-3xl mx-auto min-h-screen flex items-center">
      <form onSubmit={citySearch} className="flex flex-col w-full">
        <input
          onChange={(e) => {
            const fixedCityName = e.target.value.replace(/ã/g, "a");
            setCityName(fixedCityName);
          }}
          className="border border-gray-500 rounded-lg outline-none h-14 placeholder:text-xl placeholder:pl-5"
          type="text"
          placeholder="Search a city"
        />
        <button type="submit" className="flex">
          Searcsssh
        </button>
      </form>
    </div>
  );
}
