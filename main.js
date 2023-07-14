gsap.registerPlugin(ScrollTrigger);
// ScrollTrigger.normalizeScroll(true);

/**
 * Locomotive scroll
 */

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".smooth-scroll"),
//   smooth: true,
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy(".smooth-scroll", {
//   scrollTop(value) {
//     return arguments.length
//       ? locoScroll.scrollTo(value, 0, 0)
//       : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {
//       top: 0,
//       left: 0,
//       width: window.innerWidth,
//       height: window.innerHeight,
//     };
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector(".smooth-scroll").style.transform
//     ? "transform"
//     : "fixed",
// });

// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();

// const scroller = new LocomotiveScroll({
//   el: document.querySelector("[data-scroll-container]"),
//   smooth: true,
// });

/**
 * Desktop Animation
 */

let mm = gsap.matchMedia();

mm.add("(min-width: 800px)", () => {
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
      x: 30,
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
      markers: true,
    },
  });

  ggr.duration(5);

  ggr.from(".ggr_two", {
    y: 100,
    autoAlpha: 0,
    ease: "power4",
    duration: 6,
  });

  ggr.from(
    ".img_text_grr",
    {
      x: 30,
      autoAlpha: 0,
      ease: "power4",
      duration: 6,
    },
    "-=2",
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
});

/**
 * Mobile Animation
 */

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
});
