import React from "react";
import Navbar from "components/UI/Navbar/Navbar";
import Footer from "components/UI/Footer/Footer";
import Particles from "react-tsparticles";

const Layout = (props) => {
  const particlesInit = (main) => {
    console.log(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="bg-gradient">
      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        
        fpsLimit: 60,
        interactivity: {
          events: {
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 50,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
      <Navbar curLocation={props.curLocation} />
      <div className=" text-white pt-14">{props.children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
