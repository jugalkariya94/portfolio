import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import userData from "@constants/data";

export default function ContainerBlock({ children}) {
  const router = useRouter();

  const meta = userData.meta;
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta charSet={meta.charset} />
        <meta name="robots" content="follow, index" />
        <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://jugalkariya.dev${router.asPath}`} />
        <link
          rel="canonical"
          href={`https://jugalkariya.dev${router.asPath}`}
        />
        <link
            rel="canonical"
            href={`http://jugalkariya.dev${router.asPath}`}
        />
        <link
            rel="canonical"
            href={`http://www.jugalkariya.dev${router.asPath}`}
        />
        <link
            rel="canonical"
            href={`https://www.jugalkariya.dev${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={userData.name} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jugalkariya" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />

      </Head>
      <Navbar mobileMenu={true} />
      <div>{children}</div>
      <Footer />
    </>
  );
}
