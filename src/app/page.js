import SearchBox from "@/components/SearchBox";
import Image from "next/image";
import searchBgImage from "@/images/search-bg-2.jpg";

export default function Home() {
  return (
    <div className="mx-5 overflow-hidden">
      <Image
        src={searchBgImage}
        fill={true}
        alt="nature"
        className="object-cover brightness-[0.65]"
      />
      <div className="relative">
        <SearchBox pageParam="search-main-page" />
      </div>
    </div>
  );
}
