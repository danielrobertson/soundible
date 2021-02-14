import useSWR from "swr";
import Header from "./components/Header";
import Sounds from "./components/Sounds";

export default function Home() {
  const { data, error } = useSWR("/api/sounds");

  return (
    <div className="">
      <Header />
      {data && <Sounds sounds={data} />}
    </div>
  );
}
