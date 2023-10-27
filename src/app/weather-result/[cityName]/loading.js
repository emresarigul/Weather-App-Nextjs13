import React from "react";
import Image from "next/image";
import searchBgImage from "@/images/search-bg.jpg";

export default function loading() {
  return (
    <div className="grid h-screen place-items-center mx-7">
      <Image
        src={searchBgImage}
        fill={true}
        alt="nature"
        className="object-cover brightness-[0.65] blur-md"
      />
      <div className="w-full md:w-3/4 lg:w-[1000px] h-[550px] sm:h-[600px] bg-gray-100/20 rounded-md relative z-10">
        <div className="h-48 w-full bg-gray-100/20 animate-pulse"></div>
        <div className="mt-10 pl-7 animate-pulse">
          <div className="h-5 w-52 mb-6 bg-gray-100/20 rounded-md"></div>
          <div className="h-5 w-52 mb-6 bg-gray-100/20 rounded-md"></div>
          <div className="h-5 w-52 mb-6 bg-gray-100/20 rounded-md"></div>
          <div className="h-5 w-52 mb-6 bg-gray-100/20 rounded-md"></div>
          <div className="h-5 w-52 mb-6 bg-gray-100/20 rounded-md"></div>
        </div>
        <div className="absolute right-7 bottom-5 w-72 h-10 rounded-md bg-gray-100/20 animate-pulse"></div>
      </div>
    </div>
  );
}
