import Nav from "./Nav";
import Footer from "./Footer";
import Head from 'next/head'
import { PropsWithChildren, ReactNode } from "react";

const Layout = ({children}: PropsWithChildren<{}>): JSX.Element => {
	
	return (
		<>
			<Head>
        <title>Optiment Solutions SA</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
			<Nav/>
			<main>
				{children}
			</main>
			<Footer/>
		</>
	)
}

export default Layout