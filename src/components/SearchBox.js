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
    <div>
      <form onSubmit={citySearch} className="flex flex-col">
        <input
          onChange={(e) => setCityName(e.target.value)}
          className="w-40 border border-gray-500 rounded-full outline-none"
          type="text"
        />
        <button type="submit" className="flex">
          Searcsssh
        </button>
      </form>
    </div>
  );
}
