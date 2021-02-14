import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LoginButton from "./LoginButton";
import User from "./User";

export default function Header() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="bg-darkest">
      <div className="flex h-12 shadow-md items-center justify-between">
        <span className="font-bold ml-3">Soundible</span>
        <div>{isAuthenticated ? <User /> : <LoginButton />}</div>
      </div>
    </div>
  );
}
