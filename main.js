import './style.css'
import './style_mob.css'

// import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// import { ScrollSmoother } from "gsap/ScrollSmoother";
// gsap.registerPlugin(ScrollSmoother)
/**
 * Hide Video Controls
 */
document.querySelector(".video_01").controls = false;

/**
 * Loader animation
 */

let mm = gsap.matchMedia();

mm.add("(min-width: 800px)", () => {
  // gsap.from(".hline", {
  //   scrollTrigger: {
  //     trigger: ".hline",
  //     scrub: true,
  //     start: "40% 100%",
  //     end: "100% 10%",
  //     // markers:true
  //   },
  //   scaleX: 0,
  //   transformOrigin: "center",
  //   ease: "power2",
  //   duration: 3.5,
  // });

  // gsap.from(".the_start", {
  //   scrollTrigger: {
  //     trigger: ".the_start",
  //     scrub: true,
  //     start: "40% 100%",
  //     end: "100% 10%",
  //     // markers:true
  //   },
  //   autoAlpha: 0,
  //   ease: "power2",
  //   duration: 3,
  // });

  // gsap.from(".bayanat_abilash_title", {
  //   scrollTrigger: {
  //     trigger: ".bayanat_abilash_title",
  //     scrub: true,
  //     start: "40% 100%",
  //     end: "100% 10%",
  //   },
  //   autoAlpha: 0,
  //   y: -40,
  //   ease: "power2",
  //   duration: 1.8,
  // });

  gsap.from(".mid_photo", {
    scrollTrigger: {
      trigger: ".mid_photo",
      scrub: true,
      start: "10% 100%",
      end: "100% 20%",
    },
    autoAlpha: 0,
    y: 10,

    ease: "power2",
    duration: 1.8,
  });

  gsap.from(".right_photo", {
    scrollTrigger: {
      trigger: ".right_photo",
      scrub: true,
      start: "40% 100%",
      end: "100% 20%",
    },
    autoAlpha: 0,
    x: 10,
    // rotation: 65,
    ease: "power2",
    duration: 1.8,
  });

  gsap.from(".right_photo_text", {
    scrollTrigger: {
      trigger: ".right_photo_text",
      scrub: true,
      start: "40% 100%",
      end: "100% 20%",
    },
    autoAlpha: 0,
    x: 10,
    ease: "power2",
    duration: 1.8,
  });

  gsap.from(".left_photo_text", {
    scrollTrigger: {
      trigger: ".left_photo_text",
      scrub: true,
      start: "40% 100%",
      end: "100% 20%",
    },
    autoAlpha: 0,
    x: -10,
    ease: "power2",
    duration: 1.8,
  });

  gsap.from(".left_photo", {
    scrollTrigger: {
      trigger: ".left_photo",
      scrub: true,
      start: "40% 100%",
      end: "100% 20%",
    },
    autoAlpha: 0,
    x: -10,
    rotation: -65,
    ease: "power2",
    duration: 1.8,
  });

  gsap.from(".ver_line", {
    scrollTrigger: {
      trigger: ".ver_line",
      scrub: true,
      start: "40% 78%",
      end: "100% 30%",
    },
    scaleY: 0,
    transformOrigin: "top center",
    ease: "power2",
    duration: 1.8,
  });

  // gsap.from(".video_01", {
  //   scrollTrigger: {
  //     trigger: ".video_01",
  //     scrub: true,
  //     start: "90% 100%",
  //     end: "100% 80%",
  //   },
  //   border: 0,
  //   //   scaleY: 0,
  //   transformOrigin: "top 40",
  //   ease: "power2",
  //   duration: 1.8,
  // });

  gsap.from(".video_01", {
    scrollTrigger: {
      trigger: ".video_01",
      scrub: true,
      start: "30% 100%",
      end: "100% 90%",
      // markers:true,
    },
    autoAlpha: 0,
    y: 20,
    ease: "power2",
    duration: 1.8,
  });

  gsap.from(".video_one_text", {
    scrollTrigger: {
      trigger: ".video_one_text",
      scrub: true,
      start: "40% 100%",
      end: "100% 20%",
    },
    autoAlpha: 0,
    x: -20,
    ease: "power2",
    duration: 1.8,
  });

  gsap.from(".ver_line_02", {
    scrollTrigger: {
      trigger: ".ver_line_02",
      scrub: true,
      start: "50% 80%",
      end: "100% 0%",
      //   markers:true,
    },
    scaleY: 0,
    transformOrigin: "top center",
    ease: "power2",
    duration: 1.8,
  });

  gsap.from(".ver_line_03", {
    scrollTrigger: {
      trigger: ".ver_line_03",
      scrub: true,
      start: "50% 47%",
      end: "100% 0%",
      //   markers:true,
    },
    scaleY: 0,
    transformOrigin: "top center",
    ease: "power2",
    duration: 1.8,
  });

  gsap.from(".video_02", {
    scrollTrigger: {
      trigger: ".video_02",
      scrub: true,
    //   start: "40% 90%",
    //   end: "100% 90%",
      start: "40% 80%",
      end: "100% 60%",
      // markers:true,
    },
    autoAlpha: 0,
    y: 10,
    ease: "power2",
    duration: 1.8,
  });

  gsap.from(".video_two_text", {
    scrollTrigger: {
      trigger: ".video_two_text",
      scrub: true,
    //   start: "40% 90%",
    //   end: "100% 90%",
      start: "40% 80%",
      end: "100% 60%",
    },
    autoAlpha: 0,
    x: 10,
    ease: "power2",
    duration: 1.8,
  });

 
});


mm.add("(max-width: 615px)", () => {
    gsap.from(".ver_line", {
        scrollTrigger: {
          trigger: ".ver_line",
          scrub: true,
          start: "40% 100%",
          end: "100% 20%",
        },
        scaleY: 0,
        transformOrigin: "top center",
        ease: "power2",
        duration: 1.8,
      });
     
})
