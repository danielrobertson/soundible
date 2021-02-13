import Header from "./components/Header";
import Nav from "./components/Nav";
import { useAuth0 } from "@auth0/auth0-react";

export default function Home() {
  const { user } = useAuth0();

  return (
    <div>
      <Header />
      <div className="flex">
        <Nav />
        <div>
          <div className="mt-5 ml-7">Home page</div>
          <div className="mt-5 ml-7">
            {user ? `Hello, ${user.name}` : "Please log in"}
          </div>
        </div>
      </div>
    </div>
  );
}
