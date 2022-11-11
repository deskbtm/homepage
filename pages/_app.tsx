import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <meta
          name="keywords"
          content="deskbtm,nawb,aqua,letscollab,win32ffi, indie studio,个人工作室,javascript,app,application,developer,software,软件,独立开发者,vs droid"
        />
        <meta name="description" content="一个业余软件工作室" />
        <meta name="robots" content="index,follow" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <title>Deskbtm | 个人工作室</title>
      </Head>
      <Script src="/gtag.js" async strategy="afterInteractive"></Script>
      <Script>
        {`window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-NTH8X8YFX4');`}
      </Script>

      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(App);
