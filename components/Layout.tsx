import Header from "./Header";
//import Footer from "./Footer";
import Head from "next/head";
import { PropsWithChildren, ReactNode } from "react";
import CallToAction from "../components/CallToAction";

// eslint-disable-next-line @typescript-eslint/ban-types
const Layout = ({ children }: PropsWithChildren<{}>): JSX.Element => {
  return (
    <>
      <Head>
        <title>Optiment Solutions SA</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <CallToAction />

      {/* <Footer /> */}
    </>
  );
};

export default Layout;
