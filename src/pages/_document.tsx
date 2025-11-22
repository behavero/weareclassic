import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        
        {/* Favicons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme Color - Brand Blue */}
        <meta name="theme-color" content="#154363" />
        <meta name="msapplication-TileColor" content="#154363" />
        
        {/* SEO Meta Tags */}
        <meta
          name="description"
          content="We Are Classic - Elevating classical music for every generation. Supporting youth orchestras, professional artists, and community education across Romania."
        />
        <meta name="keywords" content="classical music, orchestra, Romania, youth music, music education, concerts, We Are Classic" />
        <meta name="author" content="We Are Classic" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="We Are Classic - Elevating Classical Music for Every Generation" />
        <meta property="og:description" content="Bridging tradition and innovation to make classical music accessible, inspiring, and transformative for communities across Romania." />
        <meta property="og:image" content="/favicons/android-chrome-512x512.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="We Are Classic - Elevating Classical Music for Every Generation" />
        <meta name="twitter:description" content="Bridging tradition and innovation to make classical music accessible, inspiring, and transformative for communities across Romania." />
        <meta name="twitter:image" content="/favicons/android-chrome-512x512.png" />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

