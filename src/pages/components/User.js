import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Link from "next/link";

const User = () => {
  const { user, logout } = useAuth0();
  const [showMenu, setShowMenu] = useState(false);

  const isPhotoBroken = (url) => {
    if (!url) return;

    const img = new Image();
    img.src = url;
    img.onerror = () => {
      console.error("Invalid image - ", url);
      return true;
    };
    return false;
  };

  const FallbackUserAvatar = ({ user }) => {
    const initial = user.name[0];
    return (
      <div className="flex justify-center items-center bg-gray-700 w-8 h-8 rounded-full m-3">
        {initial}
      </div>
    );
  };

  return (
    <>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="mt-1 mr-1 rounded-full"
      >
        {isPhotoBroken(user?.picture) ? (
          <FallbackUserAvatar user={user} />
        ) : (
          <img className="m-3 h-8 rounded-full" src={user?.picture} />
        )}
      </button>
      <div className="relative">
        {showMenu && (
          <ul className="absolute -top-4 right-2 shadow-2xl">
            <li className="bg-gray-700 p-2 border  border-gray-900">
              <Link href="/account" onClick={() => setShowMenu(false)}>
                <a>Account</a>
              </Link>
            </li>
            <li className="bg-gray-700 p-2 border border-gray-900">
              <button
                className=""
                onClick={() => {
                  setShowMenu(false);
                  logout({ returnTo: window.location.origin });
                }}
              >
                Log Out
              </button>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default User;
