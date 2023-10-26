import SearchBox from "@/components/SearchBox";
import Image from "next/image";
import searchBgImage from "@/images/search-bg-2.jpg";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Image
        src={searchBgImage}
        fill={true}
        alt="nature"
        className="object-cover brightness-[0.65]"
      />
      <SearchBox pageParam="search-main-page" />
    </div>
  );
}
