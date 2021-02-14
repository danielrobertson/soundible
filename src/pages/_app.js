import "tailwindcss/tailwind.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [redirectUri, setRedirectUri] = useState();

  useEffect(() => {
    setRedirectUri(window.location.origin);
    console.log(
      "🚀 ~ file: _app.js ~ line 10 ~ useEffect ~ window.location.origin",
      window.location.origin
    );
  });

  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      redirectUri={redirectUri}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
}

export default MyApp;
