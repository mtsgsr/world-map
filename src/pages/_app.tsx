import { AppProps } from "next/app";
import Head from "next/head";

import GlobalStyles from "@/styles/global";

import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
          integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
          crossorigin=""
        />
      </Head>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "pt_BR",
          url: "https://mtsgsr-worldmap.vercel.app/",
          siteName: "World Map",
        }}
        twitter={{
          handle: "@mtsgsr",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
