import { Html, Head, Main, NextScript } from 'next/document'
import React from "react";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <link
              crossOrigin="crossorigin"
              href="https://fonts.gstatic.com"
              rel="preconnect"
          />

          <link
              as="style"
              href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
              rel="preload"
          />

          <link
              href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
              rel="stylesheet"
          />

          <link
              href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
              rel="stylesheet"
          />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
