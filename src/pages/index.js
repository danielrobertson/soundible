import Header from "./components/Header";
import Sounds from "./components/Sounds";
import { useAuth0 } from "@auth0/auth0-react";

export default function Home() {
  const { user } = useAuth0();

  return (
    <div className="">
      <Header />
      <div className="">
        <div className="flex">
          <Sounds />
        </div>
      </div>
    </div>
  );
}
