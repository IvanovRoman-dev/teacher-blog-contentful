import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { PARTICLES_OPTIONS } from "../libs/particles-options";

const Layout = ({ children }) => {
   const particlesInit = useCallback(async (engine) => {
      // console.log(engine);
      // // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // // starting from v2 you can add only the features you need reducing the bundle size
      await loadFull(engine);
   }, []);

   const particlesLoaded = useCallback(async (container) => {
      // await console.log(container);
   }, []);
   return (
      <>
         <div className="layout">
            <Head>
               <link
                  rel="apple-touch-icon"
                  sizes="180x180"
                  href="/apple-touch-icon.png"
               />
               <link
                  rel="icon"
                  type="image/png"
                  sizes="32x32"
                  href="/favicon-32x32.png"
               />
               <link
                  rel="icon"
                  type="image/png"
                  sizes="16x16"
                  href="/favicon-16x16.png"
               />
               <link rel="manifest" href="/site.webmanifest" />
               <link
                  rel="mask-icon"
                  href="/safari-pinned-tab.svg"
                  color="#5bbad5"
               />
               <meta name="msapplication-TileColor" content="#00aba9" />
               <meta name="theme-color" content="#ffffff" />
            </Head>
            <Header />
            <main className="main">{children}</main>
            <Footer />
         </div>
         <Particles
            id="tsparticles"
            className="particles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={PARTICLES_OPTIONS}
         />
      </>
   );
};

export default Layout;
