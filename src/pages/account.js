import Nav from "./components/Nav";
import Header from "./components/Header";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import Link from "next/link";

export default function Account() {
  const {
    loginWithRedirect,
    isAuthenticated,
    isLoading,
    error,
    user,
  } = useAuth0();
  if (error) {
    console.error(error);
  }
  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      loginWithRedirect({
        redirectUri: `${window.location.origin}/account`,
      });
    }
  }, []);

  return (
    <>
      {isAuthenticated && (
        <div className="h-screen">
          <Header />
          <div className="md:flex ml-2">
            <Link href="/">
              <a>
                <div className="flex items-center mt-2 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  <span className="ml-2">Back to sounds</span>
                </div>
              </a>
            </Link>
            <div>
              <div className="mt-8 ml-20 text-2xl">Hello, {user?.name}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
