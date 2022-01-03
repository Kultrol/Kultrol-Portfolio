import "../Styles/global.scss"
import type { AppProps /*, AppContext */ } from 'next/app'
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Head from "next/Head";

function MyApp({ Component, pageProps } : AppProps) {
	return (
        <>
            <Head>
                <title>Kultrol</title>
            </Head>
            <div>
                <Header/>
                <hr/>
                <Component {...pageProps} />
                <hr/>
                <Footer/>
            </div>
        </>

	)
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp


// MAJOR 1 - FUNCTIONALITY
// 	TODO - DISPLAY PORTFOLIO PROJECTS - HOME PAGE
// 	TODO - DISPLAY BLOG ARTICLES - HOME PAGE
// 	TODO - DISPLAY LANDING HEADER - HOME PAGE
// 	TODO - DISPLAY ABOUT ME - HOME PAGE
// 	TODO - DISPLAY/PROVIDE CONTACT INFO - HOME PAGE
//
// 	TODO - CREATE BLOGS PAGE TO DISPLAY BLOG ARTICLES
// 	TODO - CREATE DYNAMIC PAGES FOR BLOG
//
// 	TODO - CREATE BLOGS PAGE TO DISPLAY PORTFOLIO PROJECTS
// 	TODO - CREATE DYNAMIC PAGES FOR PORTFOLIO PROJECTS
//
// 	TODO - ROUTE DYNAMIC LINKS TO HOMEPAGE AND BACK
// MAJOR 2 - DESIGN
// 	TODO - CREATE PLAN FOR MOBILE/TABLET/DESKTOP/ULTRA-WIDE-DESKTOP
// 	TODO - CHOOSE COLOUR SCHEME
// 	TODO - CREATE KULTROL LOGO SVG FOR HOME BUTTON
// 	TODO - HIGHLIGHT NAME WITH COLOUR
// 	TODO - INCORPORATE GSAP FOR SMOOTH SCROLL
// 	TODO - USE IMAGE OPTIMISATION THROUGH NEXT
// MAJOR 3 - ACCESSIBILITY
// 	TODO - ATTRIBUTE LINKS WITH PROPER DESCRIPTIONS
// 	TODO - USE ALTS WITH IMGS
// 	TODO - PROPERLY DESCRIBE BUTTONS ACTIONS
// 	TODO - REVIEW TO MAKE SURE EACH BLOG AND PROJECT HAS AN ACCURATE DESCRIPTION ON WHAT TYPE IT IS
// MAJOR 4 - TESTING
// 	TODO - TEST LINKS TO MAKE SURE THEY LEAD TO APPROPRIATE SOURCE
// 	TODO - TEST FOR PROPER IMAGE LOADING FROM DATABASE
// 	TODO - TEST TRIGGERS FOR SMOOTH SCROLL AND ANIMATIONS
// 	TODO - MAKE SURE BREAKPOINTS WORK
// MAJOR 5 - DEPLOYMENT
// 	TODO - DEPLOY SITE ON VERCEL
// MAJOR 6 - DAY ONE PATCH
// 	TODO - HANDLE POST DEPLOYMENT ISSUES
