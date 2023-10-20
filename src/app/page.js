import SearchBox from "@/components/SearchBox";

import Image from "next/image";

export default function Home() {
  //https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

  //console.log(data.main.temp);

  return (
    <div>
      <SearchBox />
    </div>
  );
}
