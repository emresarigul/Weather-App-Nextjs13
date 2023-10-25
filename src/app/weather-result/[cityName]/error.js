"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import searchBgImage from "@/images/search-bg-2.jpg";
import { TbFaceIdError } from "react-icons/tb";
import Image from "next/image";

export default function Error({ error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="relative z-10 flex flex-col items-center">
        <TbFaceIdError className="text-white text-7xl" />
        <h2 className="text-xl lg:text-3xl font-semibold text-white mb-2">
          Please enter a valid city name
        </h2>
        <Link
          className="text-white text-sm md:text-base lg:text-lg hover:underline"
          href={"/"}
        >
          Click here to return to the home page
        </Link>
      </div>
      <Image
        src={searchBgImage}
        fill={true}
        alt="nature"
        className="object-cover brightness-[0.65]"
      />
    </div>
  );
}
