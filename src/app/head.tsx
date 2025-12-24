export default function Head() {
  return (
    <head>
      <link rel="manifest" href="/favicon/site.webmanifest" />
      {/* Precomposed touch icon to prevent white border in iOS */}
      <link 
        rel="apple-touch-icon" 
        href="/favicon/apple-touch-icon.png"
        sizes="180x180"
      />
      <link 
        rel="apple-touch-icon-precomposed" 
        href="/favicon/apple-touch-icon.png"
        sizes="180x180"
      />
      <meta name="theme-color" content="#0B0E14" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Homayoun Asghari" />
      <meta name="mobile-web-app-capable" content="yes" />
      {/* Prevent iOS from adding effects to the touch icon */}
      <meta name="apple-mobile-web-app-status-bar" content="#0B0E14" />
      <meta name="msapplication-TileColor" content="#0B0E14" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
    </head>
  );
}
