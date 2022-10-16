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
