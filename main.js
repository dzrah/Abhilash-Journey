import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ScrollSmoother } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

/**
 * Desktop Animation
 */

let mm = gsap.matchMedia();

mm.add("(min-width: 800px)", () => {
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
  const gipsyMothPara = gsap.timeline({
    scrollTrigger: {
      trigger: ".circle_line_gispy",
      scrub: 2,
      start: "top 20%",
      end: "+=700",
      // pin: true,
      // pinSpacing: true,
      // endTrigger: ".ss_03"
      // markers: true,
    },
  });

  gipsyMothPara.duration(6);

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

  gipsyMothPara.to(
    ".paragraph_01",
    {
      autoAlpha: 0,
      ease: "power2",
      duration: 6,
    },
    "+=29.8",
  );
  gipsyMothPara.to(
    ".paragraph_02",
    {
      autoAlpha: 1,
      ease: "power2",
      duration: 6,
    },
    "-=1.8",
  );
  gipsyMothPara.to(
    ".paragraph_02_out",
    {
      autoAlpha: 0,
      ease: "power2",
      duration: 6,
    },
    "+=12.8",
  );

  gipsyMothPara.to(
    ".paragraph_03",
    {
      autoAlpha: 1,
      ease: "power2",
      duration: 6,
    },
    "-=1.8",
  );

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
      start: "top 80%",
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
        start: "bottom 15%",
        end: "+=5000",
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
  const ggr_01 = gsap.timeline({
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

  ggr.to(
    ".paragraph_01_ggr",
    {
      autoAlpha: 0,
      ease: "power2",
      duration: 6,
    },
    "+=29.8",
  );

  ggr.to(
    ".paragraph_02_ggr",
    {
      autoAlpha: 1,
      ease: "power2",
      duration: 6,
    },
    "-=1.8",
  );
  ggr.to(
    ".paragraph_02_out_ggr",
    {
      autoAlpha: 0,
      ease: "power2",
      duration: 6,
    },
    "+=12.8",
  );

  ggr.to(
    ".paragraph_03_ggr",
    {
      autoAlpha: 1,
      ease: "power2",
      duration: 6,
    },
    "-=1.8",
  );

  ggr.to(
    ".paragraph_03_ggr_out",
    {
      autoAlpha: 0,
      ease: "power2",
      duration: 6,
    },
    "+=12.8",
  );

  ggr.to(
    ".paragraph_04_ggr",
    {
      autoAlpha: 1,
      ease: "power2",
      duration: 6,
    },
    "-=1.8",
  );

  ggr.to(
    ".paragraph_04_ggr_out",
    {
      autoAlpha: 0,
      ease: "power2",
      duration: 6,
    },
    "+=12.8",
  );

  ggr.to(
    ".paragraph_05_ggr",
    {
      autoAlpha: 1,
      ease: "power2",
      duration: 6,
    },
    "-=1.8",
  );

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
    path: "LottieAnimation/GGR_01.json",
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
      end: "300% center",
      // markers: true,
      scrub: 2,
      // pinSpacing: true,
      pin: ".sundy_times_ggr",
      // pinType: "fixed",
      invalidateOnRefresh: true,
    },
  });

  // ScrollTrigger.create({
  //   trigger: ".half_centery",
  //   markers: true,
  //   start: "top 0%",
  //   end: "bottom 50%",

  //   onEnter: () => {
  //     gsap.to("body", { duration: 1.0, backgroundColor: "#7E7E7E" });
  //     gsap.to(".ver_line_06", { duration: 1.0, backgroundColor: "#ffffff" });
  //   },

  //   onLeaveBack: () => {
  //     gsap.to("body", { duration: 1.0, backgroundColor: "#ffffff" });
  //     gsap.to(".ver_line_06", { duration: 1.0, backgroundColor: "#000000" });
  //   },
  // });

  // const storm = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".half_centery",
  //     scrub: 2,
  //     start: "top 0%",
  //     end: "+=300",
  //     pin: true,
  //     // pinSpacing: false,
  //     // endTrigger: ".ss_03",
  //     // markers: true,
  //   },
  // });
  // const stormImg = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".half_images",
  //     scrub: 2,
  //     start: "top 80%",
  //     end: "+=300",
  //     pin: ".half_centery",
  //     // pinSpacing: true,
  //     // endTrigger: ".ss_03",
  //     // markers: true,
  //   },
  // });

  // storm.from(
  //   ".half_images",
  //   {
  //     autoAlpha: 0,
  //     yPercent: 50,
  //     ease: "power2",
  //     duration: 2,
  //   },
  //   "anim",
  // );

  // storm.to(
  //   ".storm_02",
  //   {
  //     autoAlpha: 1,
  //     xPercent: -50,
  //     rotate: -30,
  //     ease: "power2",
  //     duration: 2,
  //     transformOrigin: "bottom right",
  //   },
  //   "anim",
  // );
  // storm.to(
  //   ".storm_03",
  //   {
  //     autoAlpha: 1,
  //     xPercent: 50,
  //     rotate: 30,
  //     ease: "power2",
  //     duration: 2,
  //     transformOrigin: "bottom left",
  //     zIndex: "3",
  //   },
  //   "anim",
  // );
});

/**
 * Mobile Animation
 */

mm.add("(max-width: 615px)", () => {
  // gsap.from(".ver_line", {
  //   scrollTrigger: {
  //     trigger: ".ver_line",
  //     scrub: true,
  //     start: "40% 100%",
  //     end: "100% 20%",
  //   },
  //   scaleY: 0,
  //   transformOrigin: "top center",
  //   ease: "power2",
  //   duration: 1.8,
  // });

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
      start: "top top",
      end: "+=700",
      // pin: true,
      // pinSpacing: true,
      // endTrigger: ".ss_03",
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
      y: 30,
      autoAlpha: 0,
      ease: "power4",
      duration: 10,
    },
    "-=10",
  );

  gipsyMoth.to(
    ".paragraph_01",
    {
      autoAlpha: 0,
      ease: "power2",
      duration: 6,
    },
    "+=29.8",
  );
  gipsyMoth.to(
    ".paragraph_02",
    {
      autoAlpha: 1,
      ease: "power2",
      duration: 6,
    },
    "-=1.8",
  );
  gipsyMoth.to(
    ".paragraph_02_out",
    {
      autoAlpha: 0,
      ease: "power2",
      duration: 6,
    },
    "+=12.8",
  );

  gipsyMoth.to(
    ".paragraph_03",
    {
      autoAlpha: 1,
      ease: "power2",
      duration: 6,
    },
    "-=1.8",
  );

  gsap.from(
    ".ver_line_02",
    {
      scrollTrigger: {
        trigger: ".ver_line_02",
        scrub: 1,
        start: "top top",
        end: "+=4000",
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
      start: "top 80%",
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
      start: "top top",
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
      y: 30,
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
        trigger: ".ver_line_04",
        scrub: 1,
        start: "top top",
        end: "+=5000",
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

  // ggr.duration(5);

  ggr.from(".ggr_two", {
    y: 100,
    autoAlpha: 0,
    ease: "power4",
    duration: 10,
  });

  ggr.from(
    ".img_text_grr",
    {
      y: 30,
      autoAlpha: 0,
      ease: "power4",
      duration: 10,
    },
    "-=10",
  );

  ggr.to(
    ".paragraph_01_ggr",
    {
      autoAlpha: 0,
      ease: "power2",
      duration: 6,
    },
    "+=29.8",
  );

  ggr.to(
    ".paragraph_02_ggr",
    {
      autoAlpha: 1,
      ease: "power2",
      duration: 6,
    },
    "-=1.8",
  );
  ggr.to(
    ".paragraph_02_out_ggr",
    {
      autoAlpha: 0,
      ease: "power2",
      duration: 6,
    },
    "+=12.8",
  );

  ggr.to(
    ".paragraph_03_ggr",
    {
      autoAlpha: 1,
      ease: "power2",
      duration: 6,
    },
    "-=1.8",
  );

  ggr.to(
    ".paragraph_03_ggr_out",
    {
      autoAlpha: 0,
      ease: "power2",
      duration: 6,
    },
    "+=12.8",
  );

  ggr.to(
    ".paragraph_04_ggr",
    {
      autoAlpha: 1,
      ease: "power2",
      duration: 6,
    },
    "-=1.8",
  );

  ggr.to(
    ".paragraph_04_ggr_out",
    {
      autoAlpha: 0,
      ease: "power2",
      duration: 6,
    },
    "+=12.8",
  );

  ggr.to(
    ".paragraph_05_ggr",
    {
      autoAlpha: 1,
      ease: "power2",
      duration: 6,
    },
    "-=1.8",
  );

  ggr.from(
    ".ver_line_06",
    {
      scrollTrigger: {
        trigger: ".ver_line_06",
        scrub: 1,
        start: "center center",
        end: "+=5000",
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
    path: "LottieAnimation/GGR_01.json",
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
      start: "0% -11%",
      end: "300% center",
      // markers: true,
      scrub: 2,
      // pinSpacing: true,
      pin: ".sundy_times_ggr",
      // pinType: "fixed",
      invalidateOnRefresh: true,
    },
  });
});
