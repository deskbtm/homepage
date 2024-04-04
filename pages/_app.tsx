import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { usePathname } from "next/navigation";
import Script from "next/script";
//TODO: refactor, migrate from vite
import { OpenGraphHead, OpenGraphProvider } from "@deskbtm/next-og";
import "../styles/globals.css";

const BASE_URL = "https://deskbtm.com";
const SITE_NAME = "Deskbtm";
const DEFAULT_TITLE = "No inspiration is spared.";
const DEFAULT_DESCRIPTION = "An amateur indie studio.";
const DEFAULT_KEYWORDS =
  "deskbtm,nawb,aqua,indiebase,win32ffi,indie studio,个人工作室,javascript,app,application,developer,software,软件,独立开发者,vs droid";

function App({ Component, pageProps }: AppProps) {
  const metaUrl = usePathname();
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <meta content="text/html; charset=UTF-8" name="Content-Type" />
        <meta name="keywords" content={DEFAULT_KEYWORDS} />
        <meta name="robots" content="index,follow" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <title>Deskbtm | I&apos;m an indie hacker</title>
      </Head>
      <Script src="/gtag.js" async strategy="afterInteractive"></Script>
      <Script id="google-ads">
        {`window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-NTH8X8YFX4');`}
      </Script>

      <OpenGraphProvider
        baseUrl={BASE_URL}
        description={DEFAULT_DESCRIPTION}
        imageUrl="/og.webp"
        siteName={SITE_NAME}
        title={DEFAULT_TITLE}
        twitterCard="summary_large_image"
        twitterSite="@deskbtm"
        twitterCreator="@deskbtm"
        url={metaUrl!}
      >
        <OpenGraphHead />
        <Component {...pageProps} />
      </OpenGraphProvider>
    </>
  );
}

export default appWithTranslation(App);
