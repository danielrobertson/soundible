import Nav from "./components/Nav";
import Header from "./components/Header";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

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
        <div>
          <Header />
          <div className="flex">
            <Nav />
            <div>
              <div className="mt-5 ml-7">Account Page</div>
              <div className="mt-5 ml-7">{user?.name}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
