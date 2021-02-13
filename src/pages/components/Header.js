import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      <div className="flex h-12 shadow-md items-center justify-between">
        <span className="font-bold ml-3">Soundible</span>
        <div>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</div>
      </div>
    </div>
  );
}
