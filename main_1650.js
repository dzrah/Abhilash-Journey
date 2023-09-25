import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ScrollSmoother } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
// ScrollTrigger.normalizeScroll(false);

/**
 * Desktop Animation
 */
ScrollTrigger.refresh();

let mm = gsap.matchMedia();

mm.add("(max-width: 1650px)", () => {
  ScrollSmoother.create({
    content: "#content",
    // wrapper: "#wrapper",
    speed: 0.5,
    normalizeScroll: false,
    smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
    effects: true, // looks for data-speed and data-lag attributes on elements
    smoothTouch: false, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
  });

  // ScrollTrigger.normalizeScroll(true);
  /**
   * Abhilash Journey Acroops the GGR Text & Three Photos Animation
   */
  const startWord = gsap.timeline({
    scrollTrigger: {
      trigger: ".the_start",
      scrub: 1,
      start: "40% 100%",
      end: "100% 10%",
    },
  });

  startWord.from(
    ".bayanat_abilash_title",
    { autoAlpha: 0, y: -30, ease: "power2", duration: 3 },
    "-=3.3",
  );

  const ThreePhotos = gsap.timeline({
    scrollTrigger: {
      trigger: ".three_photos",
      scrub: 1,
      start: "40% 100%",
      end: "100% 10%",
      // markers: true,
    },
  });
  ThreePhotos.from(
    ".mid_photo",
    {
      autoAlpha: 0,
      y: 30,
      ease: "power2",
      duration: 3,
    },
    "-=3.3",
  );
  ThreePhotos.from(
    ".right_photo",
    { autoAlpha: 0, x: 50, rotation: 65, ease: "power2", duration: 3 },
    "-=2.8",
  );
  ThreePhotos.from(
    ".left_photo",
    { autoAlpha: 0, x: -30, rotation: -65, ease: "power2", duration: 3 },
    "-=2.8",
  );

  /**
   * Gipsy section animation
   */

  const gipsyMoth = gsap.timeline({
    scrollTrigger: {
      trigger: ".circle_line_gispy",
      scrub: 2,
      start: "top 20%",
      end: "+=700",
      // pin: true,
      // pinSpacing: true,
      // endTrigger: ".ss_03",
      // markers: true,
    },
  });
  const gipsyMothPara1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".circle_line_gispy",
      scrub: 2,
      start: "top 20%",
      end: "+=3000",
      // pin: true,
      // pinSpacing: true,
      // endTrigger: ".ss_03"
      // markers: true,
    },
  });

  gsap.from(".ver_line", {
    scrollTrigger: {
      trigger: ".circle_line_gispy",
      scrub: 1,
      start: "top 80%",
      end: "+=1000",
    },
    scaleY: 0,
    transformOrigin: "top center",
    ease: "power2",
    duration: 3,
  });

  gipsyMoth.from(".gispy_two", {
    y: 100,
    autoAlpha: 0,
    ease: "power4",
    duration: 10,
  });
  gipsyMoth.from(
    ".img_one_text",
    {
      x: 30,
      autoAlpha: 0,
      ease: "power4",
      duration: 10,
    },
    "-=10",
  );

  gipsyMothPara1.to(".paragraph_01", {
    autoAlpha: 1,
    ease: "power2",
    duration: 2,
  });
  gipsyMothPara1.to(".paragraph_01_out", {
    autoAlpha: 0,
    ease: "power2",
    duration: 1.5,
  });
  gipsyMothPara1.to(".paragraph_02", {
    autoAlpha: 1,
    ease: "power2",
    duration: 2,
  });
  gipsyMothPara1.to(".paragraph_02_out", {
    autoAlpha: 0,
    ease: "power2",
    duration: 1.5,
  });

  gipsyMothPara1.to(".paragraph_03", {
    autoAlpha: 1,
    ease: "power2",
    duration: 2,
  });

  gipsyMothPara1.to(".paragraph_03_out", {
    autoAlpha: 0,
    ease: "power2",
    duration: 1.5,
  });

  gipsyMothPara1.to(".paragraph_04", {
    autoAlpha: 1,
    ease: "power2",
    duration: 2,
  });
  gipsyMothPara1.to(".paragraph_04_out", {
    autoAlpha: 0,
    ease: "power2",
    duration: 1.5,
  });

  gipsyMothPara1.to(".paragraph_05", {
    autoAlpha: 1,
    ease: "power2",
    duration: 2,
  });
  gipsyMothPara1.to(".paragraph_05_out", {
    autoAlpha: 0,
    ease: "power2",
    duration: 1.5,
  });

  gipsyMothPara1.to(".paragraph_06", {
    autoAlpha: 1,
    ease: "power2",
    duration: 2,
  });

  gsap.from(
    ".ver_line_02",
    {
      scrollTrigger: {
        trigger: ".circle_line_gispy",
        scrub: 1,
        start: "top 0%",
        end: "+=6000",
        // markers: true,
        // delay: 50,
      },
      scaleY: 0,
      transformOrigin: "top top",
      ease: "power2",
      duration: 3,
    },
    "+=35",
  );

  /**
   * Gipsy Section LottieAnimation
   */

  let playhead = { frame: 0, totalFrames: 0 };
  let totalFrames = 0;
  let animation = lottie.loadAnimation({
    container: document.querySelector(".gispy_two"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "LottieAnimation/GISPY_Boat_F.json",
  });

  animation.addEventListener("DOMLoaded", function () {
    // no idea why this isn't being called?
    // console.log("loaded");
    // console.log(animation.totalFrames);
    playhead.totalFrames = animation.totalFrames - 1;
    ScrollTrigger.refresh();
  });

  gsap.to(playhead, {
    frame: () => playhead.totalFrames,
    ease: "none",
    onUpdate: () => {
      // console.log('frame value', animation.totalFrames, 'playhead value', playhead.frame);
      animation.goToAndStop(playhead.frame, true);
    },
    scrollTrigger: {
      trigger: ".circle_line_gispy",
      start: "top top",
      end: "300% center",
      // markers: true,
      scrub: 2,
      // pinSpacing: true,
      pin: ".circle_line_gispy",
      // pinType: "fixed",
      invalidateOnRefresh: true,
    },
  });

  gsap.from(".ver_line_03", {
    scrollTrigger: {
      trigger: ".circle_line_queen",
      scrub: 1,
      start: "top 50%",
      end: "+=1000",
    },
    scaleY: 0,
    transformOrigin: "top center",
    ease: "power2",
    duration: 3,
  });

  /**
   * Queen Section Animation
   */

  const queen = gsap.timeline({
    scrollTrigger: {
      trigger: ".circle_line_queen",
      scrub: 2,
      start: "top 50%",
      end: "+=700",
      // pin: true,
      // pinSpacing: true,
      // endTrigger: ".ss_03",
      // markers: true,
    },
  });

  queen.from(".queen_01", {
    y: 100,
    autoAlpha: 0,
    ease: "power4",
    duration: 10,
  });
  queen.from(
    ".img_two_text",
    {
      x: -30,
      autoAlpha: 0,
      ease: "power4",
      duration: 10,
    },
    "-=10",
  );

  gsap.from(
    ".ver_line_04",
    {
      scrollTrigger: {
        trigger: ".queen_01",
        scrub: 2,
        start: "top 0%",
        end: "+=6000",
        // markers: true,
        // delay: 50,
      },
      scaleY: 0,
      transformOrigin: "top top",
      ease: "power2",
      duration: 3,
    },
    "+=35",
  );

  /**
   * Queen Section LottieAnimation
   */

  let playhead_02 = { frame: 0, totalFrames: 0 };
  let totalFrames_02 = 0;
  let animation_02 = lottie.loadAnimation({
    container: document.querySelector(".queen_01"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "LottieAnimation/Queen.json",
  });

  console.log(animation_02.totalFrames);

  animation_02.addEventListener("DOMLoaded", function () {
    // no idea why this isn't being called?
    // console.log("loaded");
    // console.log(animation.totalFrames);
    playhead_02.totalFrames = animation_02.totalFrames - 1;
    ScrollTrigger.refresh();
  });
  // ScrollTrigger.normalizeScroll(true);

  gsap.to(playhead_02, {
    frame: () => playhead_02.totalFrames,
    ease: "none",
    onUpdate: () => {
      // console.log('frame value', animation.totalFrames, 'playhead value', playhead.frame);
      animation_02.goToAndStop(playhead_02.frame, true);
    },
    scrollTrigger: {
      trigger: ".circle_line_queen",
      start: "0% 42%",
      end: "300% center",
      // markers: true,
      scrub: 2,
      // pinSpacing: true,
      pin: ".circle_line_queen",
      // pinType: "fixed",
      invalidateOnRefresh: true,
    },
  });

  /**
   * GGR section animation
   */

  gsap.from(".ver_line_05", {
    scrollTrigger: {
      trigger: ".sundy_times_ggr",
      scrub: 1,
      start: "top 80%",
      end: "+=1000",
    },
    scaleY: 0,
    transformOrigin: "top center",
    ease: "power2",
    duration: 3,
  });

  const ggr = gsap.timeline({
    scrollTrigger: {
      trigger: ".sundy_times_ggr",
      scrub: 2,
      start: "top top",
      end: "+=700",
      // pin: true,
      // pinSpacing: true,
      // endTrigger: ".ss_03",
      // markers: true,
    },
  });
  const ggrPara = gsap.timeline({
    scrollTrigger: {
      trigger: ".sundy_times_ggr",
      scrub: 2,
      start: "top top",
      end: "+=7000",
      // pin: true,
      // pinSpacing: true,
      // endTrigger: ".ss_03",
      // markers: true,
    },
  });
  const ggr_01 = gsap.timeline({
    scrollTrigger: {
      trigger: ".sundy_times_ggr",
      scrub: 2,
      start: "center center",
      end: "+=700",
      // pin: true,
      // pinSpacing: true,
      // endTrigger: ".ss_03",
      // markers: true,
    },
  });

  // ggr.duration(5);

  ggr_01.from(".ggr_two", {
    y: 100,
    autoAlpha: 0,
    ease: "power4",
    duration: 10,
  });

  ggr.from(
    ".img_text_grr",
    {
      x: 30,
      autoAlpha: 0,
      ease: "power2",
      duration: 10,
    },
    "-=10",
  );

  ggrPara.to(".paragraph_01_ggr", {
    autoAlpha: 1,
    ease: "power2",
    duration: 2,
  });
  ggrPara.to(".paragraph_01_ggr_out", {
    autoAlpha: 0,
    ease: "power2",
    duration: 1.5,
  });
  ggrPara.to(".paragraph_02_ggr", {
    autoAlpha: 1,
    ease: "power2",
    duration: 2,
  });
  ggrPara.to(".paragraph_02_ggr_out", {
    autoAlpha: 0,
    ease: "power2",
    duration: 1.5,
  });

  ggrPara.to(".paragraph_03_ggr", {
    autoAlpha: 1,
    ease: "power2",
    duration: 2,
  });

  ggrPara.to(".paragraph_03_ggr_out", {
    autoAlpha: 0,
    ease: "power2",
    duration: 1.5,
  });

  ggrPara.to(".paragraph_04_ggr", {
    autoAlpha: 1,
    ease: "power2",
    duration: 2,
  });
  ggrPara.to(".paragraph_04_ggr_out", {
    autoAlpha: 0,
    ease: "power2",
    duration: 1.5,
  });

  ggrPara.to(".paragraph_05_ggr", {
    autoAlpha: 1,
    ease: "power2",
    duration: 2,
  });
  ggrPara.to(".paragraph_05_ggr_out", {
    autoAlpha: 0,
    ease: "power2",
    duration: 1.5,
  });

  ggrPara.to(".paragraph_06_ggr", {
    autoAlpha: 1,
    ease: "power2",
    duration: 2,
  });

  ggrPara.to(".paragraph_06_ggr_out", {
    autoAlpha: 0,
    ease: "power2",
    duration: 1.5,
  });
  ggrPara.to(".paragraph_07_ggr", {
    autoAlpha: 1,
    ease: "power2",
    duration: 2,
  });

  ggrPara.to(".paragraph_07_ggr_out", {
    autoAlpha: 0,
    ease: "power2",
    duration: 1.5,
  });
  ggrPara.to(".paragraph_08_ggr", {
    autoAlpha: 1,
    ease: "power2",
    duration: 2,
  });

  ggrPara.to(".paragraph_08_ggr_out", {
    autoAlpha: 0,
    ease: "power2",
    duration: 1.5,
  });

  ggrPara.to(".paragraph_09_ggr", {
    autoAlpha: 1,
    ease: "power2",
    duration: 2,
  });

  ggr.from(
    ".ver_line_06",
    {
      scrollTrigger: {
        trigger: ".sundy_times_ggr",
        scrub: 1,
        start: "top 0%",
        end: "+=6000",
        // markers: true,
        // delay: 50,
      },
      scaleY: 0,
      transformOrigin: "top top",
      ease: "power2",
      duration: 3,
    },
    "+=35",
  );

  /**
   * GGR Section LottieAnimation
   */

  let playhead_03 = { frame: 0, totalFrames: 0 };
  let totalFrames_03 = 0;
  let animation_03 = lottie.loadAnimation({
    container: document.querySelector(".ggr_two"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "LottieAnimation/GGR_04.json",
  });

  console.log(animation_03.totalFrames);

  animation_03.addEventListener("DOMLoaded", function () {
    // no idea why this isn't being called?
    // console.log("loaded");
    // console.log(animation.totalFrames);
    playhead_03.totalFrames = animation_03.totalFrames - 1;
    ScrollTrigger.refresh();
  });

  gsap.to(playhead_03, {
    frame: () => playhead_03.totalFrames,
    ease: "none",
    onUpdate: () => {
      // console.log('frame value', animation.totalFrames, 'playhead value', playhead.frame);
      animation_03.goToAndStop(playhead_03.frame, true);
    },
    scrollTrigger: {
      trigger: ".sundy_times_ggr",
      start: "0% top",
      end: "+=7000",
      // markers: true,
      scrub: 2,
      // pinSpacing: true,
      pin: ".sundy_times_ggr",
      // pinType: "fixed",
      invalidateOnRefresh: true,
      onLeave: () => {
        gsap.to("body", { duration: 1.0, backgroundColor: "#000000" });
        gsap.to(".ggr_two", { duration: 1.0, borderColor: "#ffffff" });
        gsap.to(".ver_line_06", { duration: 1.0, backgroundColor: "#ffffff" });
        gsap.to(".ver_line_05", { duration: 1.0, backgroundColor: "#ffffff" });
        gsap.to(".img_con h2", { duration: 1.0, color: "#ffffff" });
        gsap.to(".paragraph", { duration: 1.0, color: "#ffffff" });
        gsap.to(".date_cir_05", { duration: 1.0, autoAlpha: 1 });
        // gsap.from(".Abhilash_Rescue_Section", {
        //   duration: 1.0,
        //   autoAlpha: 0,
        //   y: 50,
        // });
      },

      onEnterBack: () => {
        gsap.to("body", { duration: 1.0, backgroundColor: "#ffffff" });
        gsap.to(".ggr_two", { duration: 1.0, borderColor: "#000000" });
        gsap.to(".ver_line_06", { duration: 1.0, backgroundColor: "#000000" });
        gsap.to(".ver_line_05", { duration: 1.0, backgroundColor: "#000000" });
        gsap.to(".img_con h2", { duration: 1.0, color: "#002cc4" });
        gsap.to(".paragraph", { duration: 1.0, color: "#000000" });
        gsap.to(".date_cir_05", { duration: 1.0, autoAlpha: 0 });
      },
    },
  });

  let playhead_04 = { frame: 0, totalFrames: 0 };
  let totalFrames_04 = 0;
  let animation_04 = lottie.loadAnimation({
    container: document.querySelector(".Abhilash_rescue_02"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "LottieAnimation/Abhilash_Rescue.json",
  });

  console.log(animation_04.totalFrames);

  animation_04.addEventListener("DOMLoaded", function () {
    // no idea why this isn't being called?
    // console.log("loaded");
    // console.log(animation.totalFrames);
    playhead_04.totalFrames = animation_04.totalFrames - 1;
    ScrollTrigger.refresh();
  });
  // ScrollTrigger.normalizeScroll(true);

  gsap.to(playhead_04, {
    frame: () => playhead_04.totalFrames,
    ease: "none",
    onUpdate: () => {
      // console.log('frame value', animation.totalFrames, 'playhead value', playhead.frame);
      animation_04.goToAndStop(playhead_04.frame, true);
    },
    scrollTrigger: {
      trigger: ".Abhilash_Rescue_Lines_container",
      start: "center center",
      end: "+=3500",
      // markers: true,
      scrub: 2,
      pinSpacing: false,
      pin: ".pinned_abhilash",
      // pinType: "fixed",
      invalidateOnRefresh: true,
    },
  });

  // ScrollTrigger.create({
  //   trigger: ".img_con_Abhilash",
  //   markers: true,
  //   start: "bottom bottom",
  //   end: "bottom 50%",

  //   onEnter: () => {
  //     gsap.to("body", { duration: 1.0, backgroundColor: "#000000" });
  //     gsap.to(".ver_line_06", { duration: 1.0, backgroundColor: "#ffffff" });
  //   },

  //   onLeaveBack: () => {
  //     gsap.to("body", { duration: 1.0, backgroundColor: "#ffffff" });
  //     gsap.to(".ver_line_06", { duration: 1.0, backgroundColor: "#000000" });
  //   },
  // });
});

/**
 * Full screen laptop
 */

// mm.add("(min-width: 1800px)", () => {
//   ScrollSmoother.create({
//     content: "#content",
//     // wrapper: "#wrapper",
//     speed: 0.5,
//     normalizeScroll: false,
//     smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
//     effects: true, // looks for data-speed and data-lag attributes on elements
//     smoothTouch: false, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
//   });

//   // ScrollTrigger.normalizeScroll(true);
//   /**
//    * Abhilash Journey Acroops the GGR Text & Three Photos Animation
//    */
//   const startWord = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".the_start",
//       scrub: 1,
//       start: "40% 100%",
//       end: "100% 10%",
//     },
//   });

//   startWord.from(
//     ".bayanat_abilash_title",
//     { autoAlpha: 0, y: -30, ease: "power2", duration: 3 },
//     "-=3.3",
//   );

//   const ThreePhotos = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".three_photos",
//       scrub: 1,
//       start: "40% 100%",
//       end: "100% 10%",
//       // markers: true,
//     },
//   });
//   ThreePhotos.from(
//     ".mid_photo",
//     {
//       autoAlpha: 0,
//       y: 30,
//       ease: "power2",
//       duration: 3,
//     },
//     "-=3.3",
//   );
//   ThreePhotos.from(
//     ".right_photo",
//     { autoAlpha: 0, x: 50, rotation: 65, ease: "power2", duration: 3 },
//     "-=2.8",
//   );
//   ThreePhotos.from(
//     ".left_photo",
//     { autoAlpha: 0, x: -30, rotation: -65, ease: "power2", duration: 3 },
//     "-=2.8",
//   );

//   /**
//    * Gipsy section animation
//    */

//   const gipsyMoth = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".circle_line_gispy",
//       scrub: 2,
//       start: "top 20%",
//       end: "+=700",
//       // pin: true,
//       // pinSpacing: true,
//       // endTrigger: ".ss_03",
//       // markers: true,
//     },
//   });
//   const gipsyMothPara1 = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".circle_line_gispy",
//       scrub: 2,
//       start: "top 20%",
//       end: "+=3000",
//       // pin: true,
//       // pinSpacing: true,
//       // endTrigger: ".ss_03"
//       // markers: true,
//     },
//   });

//   gsap.from(".ver_line", {
//     scrollTrigger: {
//       trigger: ".circle_line_gispy",
//       scrub: 1,
//       start: "top 80%",
//       end: "+=1000",
//     },
//     scaleY: 0,
//     transformOrigin: "top center",
//     ease: "power2",
//     duration: 3,
//   });

//   gipsyMoth.from(".gispy_two", {
//     y: 100,
//     autoAlpha: 0,
//     ease: "power4",
//     duration: 10,
//   });
//   gipsyMoth.from(
//     ".img_one_text",
//     {
//       x: 30,
//       autoAlpha: 0,
//       ease: "power4",
//       duration: 10,
//     },
//     "-=10",
//   );

//   gipsyMothPara1.to(".paragraph_01", {
//     autoAlpha: 1,
//     ease: "power2",
//     duration: 2,
//   });
//   gipsyMothPara1.to(".paragraph_01_out", {
//     autoAlpha: 0,
//     ease: "power2",
//     duration: 1.5,
//   });
//   gipsyMothPara1.to(".paragraph_02", {
//     autoAlpha: 1,
//     ease: "power2",
//     duration: 2,
//   });
//   gipsyMothPara1.to(".paragraph_02_out", {
//     autoAlpha: 0,
//     ease: "power2",
//     duration: 1.5,
//   });

//   gipsyMothPara1.to(".paragraph_03", {
//     autoAlpha: 1,
//     ease: "power2",
//     duration: 2,
//   });

//   gipsyMothPara1.to(".paragraph_03_out", {
//     autoAlpha: 0,
//     ease: "power2",
//     duration: 1.5,
//   });

//   gipsyMothPara1.to(".paragraph_04", {
//     autoAlpha: 1,
//     ease: "power2",
//     duration: 2,
//   });
//   gipsyMothPara1.to(".paragraph_04_out", {
//     autoAlpha: 0,
//     ease: "power2",
//     duration: 1.5,
//   });

//   gipsyMothPara1.to(".paragraph_05", {
//     autoAlpha: 1,
//     ease: "power2",
//     duration: 2,
//   });
//   gipsyMothPara1.to(".paragraph_05_out", {
//     autoAlpha: 0,
//     ease: "power2",
//     duration: 1.5,
//   });

//   gipsyMothPara1.to(".paragraph_06", {
//     autoAlpha: 1,
//     ease: "power2",
//     duration: 2,
//   });

//   gsap.from(
//     ".ver_line_02",
//     {
//       scrollTrigger: {
//         trigger: ".circle_line_gispy",
//         scrub: 1,
//         start: "top 0%",
//         end: "+=6000",
//         // markers: true,
//         // delay: 50,
//       },
//       scaleY: 0,
//       transformOrigin: "top top",
//       ease: "power2",
//       duration: 3,
//     },
//     "+=35",
//   );

//   /**
//    * Gipsy Section LottieAnimation
//    */

//   let playhead = { frame: 0, totalFrames: 0 };
//   let totalFrames = 0;
//   let animation = lottie.loadAnimation({
//     container: document.querySelector(".gispy_two"),
//     renderer: "svg",
//     loop: false,
//     autoplay: false,
//     path: "LottieAnimation/GISPY_Boat_F.json",
//   });

//   animation.addEventListener("DOMLoaded", function () {
//     // no idea why this isn't being called?
//     // console.log("loaded");
//     // console.log(animation.totalFrames);
//     playhead.totalFrames = animation.totalFrames - 1;
//     ScrollTrigger.refresh();
//   });

//   gsap.to(playhead, {
//     frame: () => playhead.totalFrames,
//     ease: "none",
//     onUpdate: () => {
//       // console.log('frame value', animation.totalFrames, 'playhead value', playhead.frame);
//       animation.goToAndStop(playhead.frame, true);
//     },
//     scrollTrigger: {
//       trigger: ".circle_line_gispy",
//       start: "top 10%",
//       end: "300% center",
//       // markers: true,
//       scrub: 2,
//       // pinSpacing: true,
//       pin: ".circle_line_gispy",
//       // pinType: "fixed",
//       invalidateOnRefresh: true,
//     },
//   });

//   gsap.from(".ver_line_03", {
//     scrollTrigger: {
//       trigger: ".circle_line_queen",
//       scrub: 1,
//       start: "top 50%",
//       end: "+=1000",
//     },
//     scaleY: 0,
//     transformOrigin: "top center",
//     ease: "power2",
//     duration: 3,
//   });

//   /**
//    * Queen Section Animation
//    */

//   const queen = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".circle_line_queen",
//       scrub: 2,
//       start: "top 50%",
//       end: "+=700",
//       // pin: true,
//       // pinSpacing: true,
//       // endTrigger: ".ss_03",
//       // markers: true,
//     },
//   });

//   queen.from(".queen_01", {
//     y: 100,
//     autoAlpha: 0,
//     ease: "power4",
//     duration: 10,
//   });
//   queen.from(
//     ".img_two_text",
//     {
//       x: -30,
//       autoAlpha: 0,
//       ease: "power4",
//       duration: 10,
//     },
//     "-=10",
//   );

//   gsap.from(
//     ".ver_line_04",
//     {
//       scrollTrigger: {
//         trigger: ".queen_01",
//         scrub: 2,
//         start: "top 0%",
//         end: "+=6000",
//         // markers: true,
//         // delay: 50,
//       },
//       scaleY: 0,
//       transformOrigin: "top top",
//       ease: "power2",
//       duration: 3,
//     },
//     "+=35",
//   );

//   /**
//    * Queen Section LottieAnimation
//    */

//   let playhead_02 = { frame: 0, totalFrames: 0 };
//   let totalFrames_02 = 0;
//   let animation_02 = lottie.loadAnimation({
//     container: document.querySelector(".queen_01"),
//     renderer: "svg",
//     loop: false,
//     autoplay: false,
//     path: "LottieAnimation/Queen.json",
//   });

//   console.log(animation_02.totalFrames);

//   animation_02.addEventListener("DOMLoaded", function () {
//     // no idea why this isn't being called?
//     // console.log("loaded");
//     // console.log(animation.totalFrames);
//     playhead_02.totalFrames = animation_02.totalFrames - 1;
//     ScrollTrigger.refresh();
//   });
//   // ScrollTrigger.normalizeScroll(true);

//   gsap.to(playhead_02, {
//     frame: () => playhead_02.totalFrames,
//     ease: "none",
//     onUpdate: () => {
//       // console.log('frame value', animation.totalFrames, 'playhead value', playhead.frame);
//       animation_02.goToAndStop(playhead_02.frame, true);
//     },
//     scrollTrigger: {
//       trigger: ".circle_line_queen",
//       start: "0% 42%",
//       end: "300% center",
//       // markers: true,
//       scrub: 2,
//       // pinSpacing: true,
//       pin: ".circle_line_queen",
//       // pinType: "fixed",
//       invalidateOnRefresh: true,
//     },
//   });

//   /**
//    * GGR section animation
//    */

//   gsap.from(".ver_line_05", {
//     scrollTrigger: {
//       trigger: ".sundy_times_ggr",
//       scrub: 1,
//       start: "top 80%",
//       end: "+=1000",
//     },
//     scaleY: 0,
//     transformOrigin: "top center",
//     ease: "power2",
//     duration: 3,
//   });

//   const ggr = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".sundy_times_ggr",
//       scrub: 2,
//       start: "top top",
//       end: "+=700",
//       // pin: true,
//       // pinSpacing: true,
//       // endTrigger: ".ss_03",
//       // markers: true,
//     },
//   });
//   const ggrPara = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".sundy_times_ggr",
//       scrub: 2,
//       start: "top top",
//       end: "+=7000",
//       // pin: true,
//       // pinSpacing: true,
//       // endTrigger: ".ss_03",
//       // markers: true,
//     },
//   });
//   const ggr_01 = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".sundy_times_ggr",
//       scrub: 2,
//       start: "top top",
//       end: "+=700",
//       // pin: true,
//       // pinSpacing: true,
//       // endTrigger: ".ss_03",
//       // markers: true,
//     },
//   });

//   // ggr.duration(5);

//   ggr_01.from(".ggr_two", {
//     y: 100,
//     autoAlpha: 0,
//     ease: "power4",
//     duration: 10,
//   });

//   ggr.from(
//     ".img_text_grr",
//     {
//       x: 30,
//       autoAlpha: 0,
//       ease: "power2",
//       duration: 10,
//     },
//     "-=10",
//   );

//   ggrPara.to(".paragraph_01_ggr", {
//     autoAlpha: 1,
//     ease: "power2",
//     duration: 2,
//   });
//   ggrPara.to(".paragraph_01_ggr_out", {
//     autoAlpha: 0,
//     ease: "power2",
//     duration: 1.5,
//   });
//   ggrPara.to(".paragraph_02_ggr", {
//     autoAlpha: 1,
//     ease: "power2",
//     duration: 2,
//   });
//   ggrPara.to(".paragraph_02_ggr_out", {
//     autoAlpha: 0,
//     ease: "power2",
//     duration: 1.5,
//   });

//   ggrPara.to(".paragraph_03_ggr", {
//     autoAlpha: 1,
//     ease: "power2",
//     duration: 2,
//   });

//   ggrPara.to(".paragraph_03_ggr_out", {
//     autoAlpha: 0,
//     ease: "power2",
//     duration: 1.5,
//   });

//   ggrPara.to(".paragraph_04_ggr", {
//     autoAlpha: 1,
//     ease: "power2",
//     duration: 2,
//   });
//   ggrPara.to(".paragraph_04_ggr_out", {
//     autoAlpha: 0,
//     ease: "power2",
//     duration: 1.5,
//   });

//   ggrPara.to(".paragraph_05_ggr", {
//     autoAlpha: 1,
//     ease: "power2",
//     duration: 2,
//   });
//   ggrPara.to(".paragraph_05_ggr_out", {
//     autoAlpha: 0,
//     ease: "power2",
//     duration: 1.5,
//   });

//   ggrPara.to(".paragraph_06_ggr", {
//     autoAlpha: 1,
//     ease: "power2",
//     duration: 2,
//   });

//   ggrPara.to(".paragraph_06_ggr_out", {
//     autoAlpha: 0,
//     ease: "power2",
//     duration: 1.5,
//   });
//   ggrPara.to(".paragraph_07_ggr", {
//     autoAlpha: 1,
//     ease: "power2",
//     duration: 2,
//   });

//   ggrPara.to(".paragraph_07_ggr_out", {
//     autoAlpha: 0,
//     ease: "power2",
//     duration: 1.5,
//   });
//   ggrPara.to(".paragraph_08_ggr", {
//     autoAlpha: 1,
//     ease: "power2",
//     duration: 2,
//   });

//   ggrPara.to(".paragraph_08_ggr_out", {
//     autoAlpha: 0,
//     ease: "power2",
//     duration: 1.5,
//   });

//   ggrPara.to(".paragraph_09_ggr", {
//     autoAlpha: 1,
//     ease: "power2",
//     duration: 2,
//   });

//   ggr.from(
//     ".ver_line_06",
//     {
//       scrollTrigger: {
//         trigger: ".sundy_times_ggr",
//         scrub: 1,
//         start: "top 0%",
//         end: "+=6000",
//         // markers: true,
//         // delay: 50,
//       },
//       scaleY: 0,
//       transformOrigin: "top top",
//       ease: "power2",
//       duration: 3,
//     },
//     "+=35",
//   );

//   /**
//    * GGR Section LottieAnimation
//    */

//   let playhead_03 = { frame: 0, totalFrames: 0 };
//   let totalFrames_03 = 0;
//   let animation_03 = lottie.loadAnimation({
//     container: document.querySelector(".ggr_two"),
//     renderer: "svg",
//     loop: false,
//     autoplay: false,
//     path: "LottieAnimation/GGR_04.json",
//   });

//   console.log(animation_03.totalFrames);

//   animation_03.addEventListener("DOMLoaded", function () {
//     // no idea why this isn't being called?
//     // console.log("loaded");
//     // console.log(animation.totalFrames);
//     playhead_03.totalFrames = animation_03.totalFrames - 1;
//     ScrollTrigger.refresh();
//   });

//   gsap.to(playhead_03, {
//     frame: () => playhead_03.totalFrames,
//     ease: "none",
//     onUpdate: () => {
//       // console.log('frame value', animation.totalFrames, 'playhead value', playhead.frame);
//       animation_03.goToAndStop(playhead_03.frame, true);
//     },
//     scrollTrigger: {
//       trigger: ".sundy_times_ggr",
//       start: "0% top",
//       end: "+=7000",
//       // markers: true,
//       scrub: 2,
//       // pinSpacing: true,
//       pin: ".sundy_times_ggr",
//       // pinType: "fixed",
//       invalidateOnRefresh: true,
//       onLeave: () => {
//         gsap.to("body", { duration: 1.0, backgroundColor: "#000000" });
//         gsap.to(".ggr_two", { duration: 1.0, borderColor: "#ffffff" });
//         gsap.to(".ver_line_06", { duration: 1.0, backgroundColor: "#ffffff" });
//         gsap.to(".ver_line_05", { duration: 1.0, backgroundColor: "#ffffff" });
//         gsap.to(".img_con h2", { duration: 1.0, color: "#ffffff" });
//         gsap.to(".paragraph", { duration: 1.0, color: "#ffffff" });
//         gsap.to(".date_cir_05", { duration: 1.0, autoAlpha: 1 });
//         // gsap.from(".Abhilash_Rescue_Section", {
//         //   duration: 1.0,
//         //   autoAlpha: 0,
//         //   y: 50,
//         // });
//       },

//       onEnterBack: () => {
//         gsap.to("body", { duration: 1.0, backgroundColor: "#ffffff" });
//         gsap.to(".ggr_two", { duration: 1.0, borderColor: "#000000" });
//         gsap.to(".ver_line_06", { duration: 1.0, backgroundColor: "#000000" });
//         gsap.to(".ver_line_05", { duration: 1.0, backgroundColor: "#000000" });
//         gsap.to(".img_con h2", { duration: 1.0, color: "#002cc4" });
//         gsap.to(".paragraph", { duration: 1.0, color: "#000000" });
//         gsap.to(".date_cir_05", { duration: 1.0, autoAlpha: 0 });
//       },
//     },
//   });

//   let playhead_04 = { frame: 0, totalFrames: 0 };
//   let totalFrames_04 = 0;
//   let animation_04 = lottie.loadAnimation({
//     container: document.querySelector(".Abhilash_rescue_02"),
//     renderer: "svg",
//     loop: false,
//     autoplay: false,
//     path: "LottieAnimation/Abhilash_Rescue.json",
//   });

//   console.log(animation_04.totalFrames);

//   animation_04.addEventListener("DOMLoaded", function () {
//     // no idea why this isn't being called?
//     // console.log("loaded");
//     // console.log(animation.totalFrames);
//     playhead_04.totalFrames = animation_04.totalFrames - 1;
//     ScrollTrigger.refresh();
//   });
//   // ScrollTrigger.normalizeScroll(true);

//   gsap.to(playhead_04, {
//     frame: () => playhead_04.totalFrames,
//     ease: "none",
//     onUpdate: () => {
//       // console.log('frame value', animation.totalFrames, 'playhead value', playhead.frame);
//       animation_04.goToAndStop(playhead_04.frame, true);
//     },
//     scrollTrigger: {
//       trigger: ".Abhilash_Rescue_Lines_container",
//       start: "center center",
//       end: "+=3500",
//       // markers: true,
//       scrub: 2,
//       pinSpacing: false,
//       pin: ".pinned_abhilash",
//       // pinType: "fixed",
//       invalidateOnRefresh: true,
//     },
//   });

//   // ScrollTrigger.create({
//   //   trigger: ".img_con_Abhilash",
//   //   markers: true,
//   //   start: "bottom bottom",
//   //   end: "bottom 50%",

//   //   onEnter: () => {
//   //     gsap.to("body", { duration: 1.0, backgroundColor: "#000000" });
//   //     gsap.to(".ver_line_06", { duration: 1.0, backgroundColor: "#ffffff" });
//   //   },

//   //   onLeaveBack: () => {
//   //     gsap.to("body", { duration: 1.0, backgroundColor: "#ffffff" });
//   //     gsap.to(".ver_line_06", { duration: 1.0, backgroundColor: "#000000" });
//   //   },
//   // });
// });
