import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import Head from "next/head";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { MetaProvider } from "next-meta";
//TODO: refactor, migrate from vite
import "../styles/globals.css";

const BASE_URL = "https://deskbtm.com";
const SITE_NAME = "Deskbtm";
const DEFAULT_TITLE = "No inspiration is spared.";
const DEFAULT_DESCRIPTION = "An amateur indie studio";
const DEFAULT_KEYWORDS =
  "deskbtm,nawb,aqua,indiebase,win32ffi,indie studio,个人工作室,javascript,app,application,developer,software,软件,独立开发者,vs droid";

function App({ Component, pageProps }: AppProps) {
  const metaUrl = usePathname();
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="canonical" href={`${BASE_URL}${metaUrl}`} />
        <meta content="text/html; charset=UTF-8" name="Content-Type" />
        <meta name="keywords" content={DEFAULT_KEYWORDS} />
        <meta name="description" content="I'm an indie hacker" />
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

      <MetaProvider
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
        <Component {...pageProps} />
      </MetaProvider>
    </>
  );
}

export default appWithTranslation(App);
