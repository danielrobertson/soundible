import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className="h-full">
        <Head>
          <script
            async
            defer
            data-website-id="3c16f463-8553-419c-8262-288515c9e263"
            src="https://soundible-analytics.vercel.app/umami.js"
          ></script>
        </Head>
        <body className="grid grid-rows-1 bg-dark text-gray-200 h-full min-h-full">
          <Main className="" />
          <NextScript />
          <footer className="hidden flex justify-center h-8 row-start-2 row-end-3 text-xs font-semibold text-gray-400">
            Made by &nbsp;
            <a href="https://danielrobertson.me" className="underline">
              @danielrobertson
            </a>
          </footer>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
