"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";

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
      <form onSubmit={citySearch} className="flex flex-col w-full relative">
        <input
          onChange={(e) => {
            const fixedCityName = e.target.value.replace(/ã/g, "a");
            setCityName(fixedCityName);
          }}
          className="border-2 border-white rounded-lg outline-none h-14 lg:placeholder:text-xl placeholder:text-white bg-transparent px-5 text-white"
          type="text"
          placeholder="Search a city"
        />
        <AiOutlineSearch
          className="text-2xl lg:text-3xl text-white absolute right-5 top-4 lg:top-3 cursor-pointer"
          onClick={citySearch}
        />
      </form>
    </div>
  );
}
