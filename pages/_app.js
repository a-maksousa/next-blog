import Head from "next/head";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="2WP9z0shNJ0Gjc7Yei7LMkyehOOaSqcij97PFQw5TTM" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
