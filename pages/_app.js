import Head from "next/head";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="x4Nzu9Zjke-T4LiF1WueHCWLhBAygCzZKNbEzuXfyzc" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
