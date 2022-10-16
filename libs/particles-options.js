const PARTICLES_OPTIONS = {
   particles: {
      number: {
         value: 25,
         density: {
            enable: false,
            value_area: 997.6472153172111,
         },
      },
      color: {
         value: "#FF3396",
      },
      shape: {
         type: "circle",
         stroke: {
            width: 0,
            color: "#000000",
         },
         polygon: {
            nb_sides: 5,
         },
         image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
         },
      },
      opacity: {
         value: 0.5,
         random: true,
         anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
         },
      },
      size: {
         value: 3,
         random: true,
         anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
         },
      },
      line_linked: {
         enable: false,
         distance: 150,
         color: "#ffffff",
         opacity: 0.5,
         width: 0.9976472153172111,
      },
      move: {
         enable: true,
         speed: 1.5,
         direction: "none",
         random: true,
         straight: false,
         out_mode: "out",
         bounce: false,
         attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
         },
      },
   },
   interactivity: {
      detect_on: "canvas",
      events: {
         onhover: {
            enable: false,
            mode: "repulse",
         },
         onclick: {
            enable: true,
            mode: "push",
         },
         resize: true,
      },
      modes: {
         grab: {
            distance: 400,
            line_linked: {
               opacity: 1,
            },
         },
         bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
         },
         repulse: {
            distance: 200,
            duration: 0.4,
         },
         push: {
            particles_nb: 4,
         },
         remove: {
            particles_nb: 2,
         },
      },
   },
   retina_detect: true,
};

export { PARTICLES_OPTIONS };
