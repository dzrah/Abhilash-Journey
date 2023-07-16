gsap.registerPlugin(ScrollTrigger);
// ScrollTrigger.normalizeScroll(true);

/**
 * Locomotive scroll
 */

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

//

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

  // let playhead = { frame: 0, totalFrames: 0 };
  // let totalFrames = 0;
  // let animation = lottie.loadAnimation({
  //   container: document.querySelector(".gispy_two"),
  //   renderer: "svg",
  //   loop: false,
  //   autoplay: false,
  //   path: "LottieAnimation/GISPY_Boat_F.json",
  // });

  // animation.addEventListener("DOMLoaded", function () {
  //   // no idea why this isn't being called?
  //   // console.log("loaded");
  //   // console.log(animation.totalFrames);
  //   playhead.totalFrames = animation.totalFrames - 1;
  //   ScrollTrigger.refresh();
  // });

  // gsap.to(playhead, {
  //   frame: () => playhead.totalFrames,
  //   ease: "none",
  //   onUpdate: () => {
  //     // console.log('frame value', animation.totalFrames, 'playhead value', playhead.frame);
  //     animation.goToAndStop(playhead.frame, true);
  //   },
  //   scrollTrigger: {
  //     trigger: ".circle_line_gispy",
  //     start: "top top",
  //     end: "300% center",
  //     // markers: true,
  //     scrub: 2,
  //     // pinSpacing: true,
  //     pin: ".circle_line_gispy",
  //     // pinType: "fixed",
  //     invalidateOnRefresh: true,
  //   },
  // });

  //   function canvas() {
  //     const canvas = document.querySelector(".gispy_two");
  //     const context = canvas.getContext("2d");

  //     canvas.width = window.innerWidth;
  //     canvas.height = window.innerHeight;

  //     window.addEventListener("resize", function () {
  //       canvas.width = window.innerWidth;
  //       canvas.height = window.innerHeight;
  //       render();
  //     });

  //     function files(index) {
  //       var data = `
  //       Images/gispy_seq/Comp 800.jpg
  //       Images/gispy_seq/Comp 801.jpg
  //       Images/gispy_seq/Comp 802.jpg
  //       Images/gispy_seq/Comp 803.jpg
  //       Images/gispy_seq/Comp 804.jpg
  //       Images/gispy_seq/Comp 805.jpg
  //       Images/gispy_seq/Comp 806.jpg
  //       Images/gispy_seq/Comp 807.jpg
  //       Images/gispy_seq/Comp 808.jpg
  //       Images/gispy_seq/Comp 809.jpg
  //       Images/gispy_seq/Comp 810.jpg
  //       Images/gispy_seq/Comp 811.jpg
  //       Images/gispy_seq/Comp 812.jpg
  //       Images/gispy_seq/Comp 813.jpg
  //       Images/gispy_seq/Comp 814.jpg
  //       Images/gispy_seq/Comp 815.jpg
  //       Images/gispy_seq/Comp 816.jpg
  //       Images/gispy_seq/Comp 817.jpg
  //       Images/gispy_seq/Comp 818.jpg
  //       Images/gispy_seq/Comp 819.jpg
  //       Images/gispy_seq/Comp 820.jpg
  //       Images/gispy_seq/Comp 821.jpg
  //       Images/gispy_seq/Comp 822.jpg
  //       Images/gispy_seq/Comp 823.jpg
  //       Images/gispy_seq/Comp 824.jpg
  //       Images/gispy_seq/Comp 825.jpg
  //       Images/gispy_seq/Comp 826.jpg
  //       Images/gispy_seq/Comp 827.jpg
  //       Images/gispy_seq/Comp 828.jpg
  //       Images/gispy_seq/Comp 829.jpg
  //       Images/gispy_seq/Comp 830.jpg
  //       Images/gispy_seq/Comp 831.jpg
  //       Images/gispy_seq/Comp 832.jpg
  //       Images/gispy_seq/Comp 833.jpg
  //       Images/gispy_seq/Comp 834.jpg
  //       Images/gispy_seq/Comp 835.jpg
  //       Images/gispy_seq/Comp 836.jpg
  //       Images/gispy_seq/Comp 837.jpg
  //       Images/gispy_seq/Comp 838.jpg
  //       Images/gispy_seq/Comp 839.jpg
  //       Images/gispy_seq/Comp 840.jpg
  //       Images/gispy_seq/Comp 841.jpg
  //       Images/gispy_seq/Comp 842.jpg
  //       Images/gispy_seq/Comp 843.jpg
  //       Images/gispy_seq/Comp 844.jpg
  //       Images/gispy_seq/Comp 845.jpg
  //       Images/gispy_seq/Comp 846.jpg
  //       Images/gispy_seq/Comp 847.jpg
  //       Images/gispy_seq/Comp 848.jpg
  //       Images/gispy_seq/Comp 849.jpg
  //       Images/gispy_seq/Comp 850.jpg
  //       Images/gispy_seq/Comp 851.jpg
  //       Images/gispy_seq/Comp 852.jpg
  //       Images/gispy_seq/Comp 853.jpg
  //       Images/gispy_seq/Comp 854.jpg
  //       Images/gispy_seq/Comp 855.jpg
  //       Images/gispy_seq/Comp 856.jpg
  //       Images/gispy_seq/Comp 857.jpg
  //       Images/gispy_seq/Comp 858.jpg
  //       Images/gispy_seq/Comp 859.jpg
  //       Images/gispy_seq/Comp 860.jpg
  //       Images/gispy_seq/Comp 861.jpg
  //       Images/gispy_seq/Comp 862.jpg
  //       Images/gispy_seq/Comp 863.jpg
  //       Images/gispy_seq/Comp 864.jpg
  //       Images/gispy_seq/Comp 865.jpg
  //       Images/gispy_seq/Comp 866.jpg
  //       Images/gispy_seq/Comp 867.jpg
  //       Images/gispy_seq/Comp 868.jpg
  //       Images/gispy_seq/Comp 869.jpg
  //       Images/gispy_seq/Comp 870.jpg
  //       Images/gispy_seq/Comp 871.jpg
  //       Images/gispy_seq/Comp 872.jpg
  //       Images/gispy_seq/Comp 872.jpg
  //       Images/gispy_seq/Comp 873.jpg
  //       Images/gispy_seq/Comp 874.jpg
  //       Images/gispy_seq/Comp 875.jpg
  //       Images/gispy_seq/Comp 876.jpg
  //       Images/gispy_seq/Comp 877.jpg
  //       Images/gispy_seq/Comp 878.jpg
  //       Images/gispy_seq/Comp 879.jpg
  //       Images/gispy_seq/Comp 880.jpg
  //       Images/gispy_seq/Comp 881.jpg
  //       Images/gispy_seq/Comp 882.jpg
  //       Images/gispy_seq/Comp 883.jpg
  //       Images/gispy_seq/Comp 884.jpg
  //       Images/gispy_seq/Comp 885.jpg
  //       Images/gispy_seq/Comp 886.jpg
  //       Images/gispy_seq/Comp 887.jpg
  //       Images/gispy_seq/Comp 888.jpg
  //       Images/gispy_seq/Comp 889.jpg
  //       Images/gispy_seq/Comp 890.jpg
  //       Images/gispy_seq/Comp 891.jpg
  //  `;
  //       return data.split("\n")[index];
  //     }

  //     const frameCount = 90;

  //     const images = [];
  //     const imageSeq = {
  //       frame: 1,
  //     };

  //     for (let i = 0; i < frameCount; i++) {
  //       const img = new Image();
  //       img.src = files(i);
  //       images.push(img);
  //     }

  //     gsap.to(imageSeq, {
  //       frame: frameCount - 1,
  //       snap: "frame",
  //       ease: `none`,
  //       scrollTrigger: {
  //         scrub: 0.15,
  //         trigger: ".circle_line_gispy",
  //         //   set start end according to preference
  //         start: "top top",
  //         end: "300% center",
  //         // scroller: `#main`,
  //       },
  //       onUpdate: render,
  //     });

  //     images[1].onload = render;

  //     function render() {
  //       scaleImage(images[imageSeq.frame], context);
  //     }

  //     function scaleImage(img, ctx) {
  //       var canvas = ctx.canvas;
  //       var hRatio = canvas.width / img.width;
  //       var vRatio = canvas.height / img.height;
  //       var ratio = Math.min(hRatio, vRatio);
  //       var centerShift_x = (canvas.width - img.width * ratio) / 2;
  //       var centerShift_y = (canvas.height - img.height * ratio) / 2;
  //       ctx.clearRect(0, 0, canvas.width, canvas.height);
  //       ctx.drawImage(
  //         img,
  //         0,
  //         0,
  //         img.width,
  //         img.height,
  //         centerShift_x,
  //         centerShift_y,
  //         img.width * ratio,
  //         img.height * ratio,
  //       );
  //     }
  //     ScrollTrigger.create({
  //       trigger: ".circle_line_gispy",
  //       pin: true,
  //       // markers:true,
  //       // scroller: `#main`,
  //       //   set start end according to preference
  //       start: "top top",
  //       end: "300% center",
  //     });
  //   }
  //   canvas();

  console.clear();
  /* The encoding is super important here to enable frame-by-frame scrubbing. */

  // ffmpeg -i ~/Downloads/Toshiba\ video/original.mov -movflags faststart -vcodec libx264 -crf 23 -g 1 -pix_fmt yuv420p output.mp4
  // ffmpeg -i ~/Downloads/Toshiba\ video/original.mov -vf scale=960:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p output_960.mp4

  const video = document.querySelector(".video-background");
  let src = video.currentSrc || video.src;
  console.log(video, src);

  /* Make sure the video is 'activated' on iOS */
  function once(el, event, fn, opts) {
    var onceFn = function (e) {
      el.removeEventListener(event, onceFn);
      fn.apply(this, arguments);
    };
    el.addEventListener(event, onceFn, opts);
    return onceFn;
  }

  once(document.documentElement, "touchstart", function (e) {
    video.play();
    video.pause();
  });

  /* ---------------------------------- */
  /* Scroll Control! */

  gsap.registerPlugin(ScrollTrigger);

  let tl = gsap.timeline({
    defaults: { duration: 1 },
    scrollTrigger: {
      trigger: ".circle_line_gispy",
      start: "top top",
      end: "300% center",
      scrub: 2,
      pin: ".circle_line_gispy",
    },
  });

  once(video, "loadedmetadata", () => {
    tl.fromTo(
      video,
      {
        currentTime: 0,
      },
      {
        currentTime: video.duration || 1,
      },
    );
  });

  /* When first coded, the Blobbing was important to ensure the browser wasn't dropping previously played segments, but it doesn't seem to be a problem now. Possibly based on memory availability? */
  setTimeout(function () {
    if (window["fetch"]) {
      fetch(src)
        .then((response) => response.blob())
        .then((response) => {
          var blobURL = URL.createObjectURL(response);

          var t = video.currentTime;
          once(document.documentElement, "touchstart", function (e) {
            video.play();
            video.pause();
          });

          video.setAttribute("src", blobURL);
          video.currentTime = t + 0.01;
        });
    }
  }, 1000);

  /* ---------------------------------- */

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

  // let playhead_02 = { frame: 0, totalFrames: 0 };
  // let totalFrames_02 = 0;
  // let animation_02 = lottie.loadAnimation({
  //   container: document.querySelector(".queen_01"),
  //   renderer: "svg",
  //   loop: false,
  //   autoplay: false,
  //   path: "LottieAnimation/Queen.json",
  // });

  // console.log(animation_02.totalFrames);

  // animation_02.addEventListener("DOMLoaded", function () {
  //   // no idea why this isn't being called?
  //   // console.log("loaded");
  //   // console.log(animation.totalFrames);
  //   playhead_02.totalFrames = animation_02.totalFrames - 1;
  //   ScrollTrigger.refresh();
  // });
  // // ScrollTrigger.normalizeScroll(true);

  // gsap.to(playhead_02, {
  //   frame: () => playhead_02.totalFrames,
  //   ease: "none",
  //   onUpdate: () => {
  //     // console.log('frame value', animation.totalFrames, 'playhead value', playhead.frame);
  //     animation_02.goToAndStop(playhead_02.frame, true);
  //   },
  //   scrollTrigger: {
  //     trigger: ".circle_line_queen",
  //     start: "0% 42%",
  //     end: "300% center",
  //     // markers: true,
  //     scrub: 2,
  //     // pinSpacing: true,
  //     pin: ".circle_line_queen",
  //     // pinType: "fixed",
  //     invalidateOnRefresh: true,
  //   },
  // });

  console.clear();
  /* The encoding is super important here to enable frame-by-frame scrubbing. */

  // ffmpeg -i ~/Downloads/Toshiba\ video/original.mov -movflags faststart -vcodec libx264 -crf 23 -g 1 -pix_fmt yuv420p output.mp4
  // ffmpeg -i ~/Downloads/Toshiba\ video/original.mov -vf scale=960:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p output_960.mp4

  const video2 = document.querySelector(".video-background2");
  let src2 = video2.currentSrc || video2.src2;
  console.log(video2);
  console.log(src2);

  /* Make sure the video is 'activated' on iOS */
  function once(el2, event2, fn2, opts2) {
    var onceFn2 = function (e2) {
      el2.removeEventListener(event2, onceFn2);
      fn2.apply(this, arguments);
    };
    el2.addEventListener(event2, onceFn2, opts2);
    return onceFn2;
  }

  once(document.documentElement, "touchstart", function (e2) {
    video2.play();
    video2.pause();
  });

  /* ---------------------------------- */
  /* Scroll Control! */

  // gsap.registerPlugin(ScrollTrigger);

  let tl2 = gsap.timeline({
    defaults: { duration: 1 },
    scrollTrigger: {
      trigger: ".circle_line_queen",
      start: "0% 42%",
      end: "300% center",
      scrub: 2,
      pin: ".circle_line_queen",
    },
  });

  once(video2, "loadedmetadata", () => {
    tl2.fromTo(
      video2,
      {
        currentTime: 0,
      },
      {
        currentTime: video2.duration || 1,
      },
    );
  });

  /* When first coded, the Blobbing was important to ensure the browser wasn't dropping previously played segments, but it doesn't seem to be a problem now. Possibly based on memory availability? */
  setTimeout(function () {
    if (window["fetch"]) {
      fetch(src2)
        .then((response2) => response2.blob())
        .then((response2) => {
          var blobURL2 = URL.createObjectURL(response2);

          var t2 = video2.currentTime;
          once(document.documentElement, "touchstart", function (e2) {
            video2.play();
            video2.pause();
          });

          video2.setAttribute("src", blobURL2);
          video2.currentTime = t2 + 0.01;
        });
    }
  }, 1000);

  /* ---------------------------------- */

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
      x: 30,
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

  console.clear();
  /* The encoding is super important here to enable frame-by-frame scrubbing. */

  // ffmpeg -i ~/Downloads/Toshiba\ video/original.mov -movflags faststart -vcodec libx264 -crf 23 -g 1 -pix_fmt yuv420p output.mp4
  // ffmpeg -i ~/Downloads/Toshiba\ video/original.mov -vf scale=960:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p output_960.mp4

  const video3 = document.querySelector(".video-background3");
  let src3 = video3.currentSrc || video2.src3;
  console.log(video3);
  console.log(src3);

  /* Make sure the video is 'activated' on iOS */
  function once(el3, event3, fn3, opts3) {
    var onceFn3 = function (e3) {
      el3.removeEventListener(event3, onceFn3);
      fn3.apply(this, arguments);
    };
    el3.addEventListener(event3, onceFn3, opts3);
    return onceFn3;
  }

  once(document.documentElement, "touchstart", function (e3) {
    video3.play();
    video3.pause();
  });

  /* ---------------------------------- */
  /* Scroll Control! */

  // gsap.registerPlugin(ScrollTrigger);

  let tl3 = gsap.timeline({
    defaults: { duration: 1 },
    scrollTrigger: {
      trigger: ".sundy_times_ggr",
      start: "0% top",
      end: "300% center",
      scrub: 2,
      pin: ".sundy_times_ggr",
    },
  });

  once(video3, "loadedmetadata", () => {
    tl3.fromTo(
      video3,
      {
        currentTime: 0,
      },
      {
        currentTime: video3.duration || 1,
      },
    );
  });

  /* When first coded, the Blobbing was important to ensure the browser wasn't dropping previously played segments, but it doesn't seem to be a problem now. Possibly based on memory availability? */
  setTimeout(function () {
    if (window["fetch"]) {
      fetch(src3)
        .then((response3) => response3.blob())
        .then((response3) => {
          var blobURL3 = URL.createObjectURL(response3);

          var t3 = video3.currentTime;
          once(document.documentElement, "touchstart", function (e3) {
            video3.play();
            video3.pause();
          });

          video3.setAttribute("src", blobURL3);
          video3.currentTime = t3 + 0.01;
        });
    }
  }, 1000);

  /* ---------------------------------- */

  //   let playhead_03 = { frame: 0, totalFrames: 0 };
  //   let totalFrames_03 = 0;
  //   let animation_03 = lottie.loadAnimation({
  //     container: document.querySelector(".ggr_two"),
  //     renderer: "svg",
  //     loop: false,
  //     autoplay: false,
  //     path: "LottieAnimation/GGR_01.json",
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
  //       end: "300% center",
  //       // markers: true,
  //       scrub: 2,
  //       // pinSpacing: true,
  //       pin: ".sundy_times_ggr",
  //       // pinType: "fixed",
  //       invalidateOnRefresh: true,
  //     },
  //   });
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

  // let playhead = { frame: 0, totalFrames: 0 };
  // let totalFrames = 0;
  // let animation = lottie.loadAnimation({
  //   container: document.querySelector(".gispy_two"),
  //   renderer: "svg",
  //   loop: false,
  //   autoplay: false,
  //   path: "LottieAnimation/GISPY_Boat_F.json",
  // });

  // animation.addEventListener("DOMLoaded", function () {
  //   // no idea why this isn't being called?
  //   // console.log("loaded");
  //   // console.log(animation.totalFrames);
  //   playhead.totalFrames = animation.totalFrames - 1;
  //   ScrollTrigger.refresh();
  // });

  // gsap.to(playhead, {
  //   frame: () => playhead.totalFrames,
  //   ease: "none",
  //   onUpdate: () => {
  //     // console.log('frame value', animation.totalFrames, 'playhead value', playhead.frame);
  //     animation.goToAndStop(playhead.frame, true);
  //   },
  //   scrollTrigger: {
  //     trigger: ".circle_line_gispy",
  //     start: "top top",
  //     end: "300% center",
  //     // markers: true,
  //     scrub: 2,
  //     // pinSpacing: true,
  //     pin: ".circle_line_gispy",
  //     // pinType: "fixed",
  //     invalidateOnRefresh: true,
  //   },
  // });

  //   function canvas() {
  //     const canvas = document.querySelector(".gispy_two");
  //     const context = canvas.getContext("2d");

  //     canvas.width = window.innerWidth;
  //     canvas.height = window.innerHeight;

  //     window.addEventListener("resize", function () {
  //       canvas.width = window.innerWidth;
  //       canvas.height = window.innerHeight;
  //       render();
  //     });

  //     function files(index) {
  //       var data = `
  //       Images/gispy_seq/Comp 800.jpg
  //       Images/gispy_seq/Comp 801.jpg
  //       Images/gispy_seq/Comp 802.jpg
  //       Images/gispy_seq/Comp 803.jpg
  //       Images/gispy_seq/Comp 804.jpg
  //       Images/gispy_seq/Comp 805.jpg
  //       Images/gispy_seq/Comp 806.jpg
  //       Images/gispy_seq/Comp 807.jpg
  //       Images/gispy_seq/Comp 808.jpg
  //       Images/gispy_seq/Comp 809.jpg
  //       Images/gispy_seq/Comp 810.jpg
  //       Images/gispy_seq/Comp 811.jpg
  //       Images/gispy_seq/Comp 812.jpg
  //       Images/gispy_seq/Comp 813.jpg
  //       Images/gispy_seq/Comp 814.jpg
  //       Images/gispy_seq/Comp 815.jpg
  //       Images/gispy_seq/Comp 816.jpg
  //       Images/gispy_seq/Comp 817.jpg
  //       Images/gispy_seq/Comp 818.jpg
  //       Images/gispy_seq/Comp 819.jpg
  //       Images/gispy_seq/Comp 820.jpg
  //       Images/gispy_seq/Comp 821.jpg
  //       Images/gispy_seq/Comp 822.jpg
  //       Images/gispy_seq/Comp 823.jpg
  //       Images/gispy_seq/Comp 824.jpg
  //       Images/gispy_seq/Comp 825.jpg
  //       Images/gispy_seq/Comp 826.jpg
  //       Images/gispy_seq/Comp 827.jpg
  //       Images/gispy_seq/Comp 828.jpg
  //       Images/gispy_seq/Comp 829.jpg
  //       Images/gispy_seq/Comp 830.jpg
  //       Images/gispy_seq/Comp 831.jpg
  //       Images/gispy_seq/Comp 832.jpg
  //       Images/gispy_seq/Comp 833.jpg
  //       Images/gispy_seq/Comp 834.jpg
  //       Images/gispy_seq/Comp 835.jpg
  //       Images/gispy_seq/Comp 836.jpg
  //       Images/gispy_seq/Comp 837.jpg
  //       Images/gispy_seq/Comp 838.jpg
  //       Images/gispy_seq/Comp 839.jpg
  //       Images/gispy_seq/Comp 840.jpg
  //       Images/gispy_seq/Comp 841.jpg
  //       Images/gispy_seq/Comp 842.jpg
  //       Images/gispy_seq/Comp 843.jpg
  //       Images/gispy_seq/Comp 844.jpg
  //       Images/gispy_seq/Comp 845.jpg
  //       Images/gispy_seq/Comp 846.jpg
  //       Images/gispy_seq/Comp 847.jpg
  //       Images/gispy_seq/Comp 848.jpg
  //       Images/gispy_seq/Comp 849.jpg
  //       Images/gispy_seq/Comp 850.jpg
  //       Images/gispy_seq/Comp 851.jpg
  //       Images/gispy_seq/Comp 852.jpg
  //       Images/gispy_seq/Comp 853.jpg
  //       Images/gispy_seq/Comp 854.jpg
  //       Images/gispy_seq/Comp 855.jpg
  //       Images/gispy_seq/Comp 856.jpg
  //       Images/gispy_seq/Comp 857.jpg
  //       Images/gispy_seq/Comp 858.jpg
  //       Images/gispy_seq/Comp 859.jpg
  //       Images/gispy_seq/Comp 860.jpg
  //       Images/gispy_seq/Comp 861.jpg
  //       Images/gispy_seq/Comp 862.jpg
  //       Images/gispy_seq/Comp 863.jpg
  //       Images/gispy_seq/Comp 864.jpg
  //       Images/gispy_seq/Comp 865.jpg
  //       Images/gispy_seq/Comp 866.jpg
  //       Images/gispy_seq/Comp 867.jpg
  //       Images/gispy_seq/Comp 868.jpg
  //       Images/gispy_seq/Comp 869.jpg
  //       Images/gispy_seq/Comp 870.jpg
  //       Images/gispy_seq/Comp 871.jpg
  //       Images/gispy_seq/Comp 872.jpg
  //       Images/gispy_seq/Comp 872.jpg
  //       Images/gispy_seq/Comp 873.jpg
  //       Images/gispy_seq/Comp 874.jpg
  //       Images/gispy_seq/Comp 875.jpg
  //       Images/gispy_seq/Comp 876.jpg
  //       Images/gispy_seq/Comp 877.jpg
  //       Images/gispy_seq/Comp 878.jpg
  //       Images/gispy_seq/Comp 879.jpg
  //       Images/gispy_seq/Comp 880.jpg
  //       Images/gispy_seq/Comp 881.jpg
  //       Images/gispy_seq/Comp 882.jpg
  //       Images/gispy_seq/Comp 883.jpg
  //       Images/gispy_seq/Comp 884.jpg
  //       Images/gispy_seq/Comp 885.jpg
  //       Images/gispy_seq/Comp 886.jpg
  //       Images/gispy_seq/Comp 887.jpg
  //       Images/gispy_seq/Comp 888.jpg
  //       Images/gispy_seq/Comp 889.jpg
  //       Images/gispy_seq/Comp 890.jpg
  //       Images/gispy_seq/Comp 891.jpg
  //  `;
  //       return data.split("\n")[index];
  //     }

  //     const frameCount = 90;

  //     const images = [];
  //     const imageSeq = {
  //       frame: 1,
  //     };

  //     for (let i = 0; i < frameCount; i++) {
  //       const img = new Image();
  //       img.src = files(i);
  //       images.push(img);
  //     }

  //     gsap.to(imageSeq, {
  //       frame: frameCount - 1,
  //       snap: "frame",
  //       ease: `none`,
  //       scrollTrigger: {
  //         scrub: 0.15,
  //         trigger: ".circle_line_gispy",
  //         //   set start end according to preference
  //         start: "top top",
  //         end: "300% center",
  //         // scroller: `#main`,
  //       },
  //       onUpdate: render,
  //     });

  //     images[1].onload = render;

  //     function render() {
  //       scaleImage(images[imageSeq.frame], context);
  //     }

  //     function scaleImage(img, ctx) {
  //       var canvas = ctx.canvas;
  //       var hRatio = canvas.width / img.width;
  //       var vRatio = canvas.height / img.height;
  //       var ratio = Math.min(hRatio, vRatio);
  //       var centerShift_x = (canvas.width - img.width * ratio) / 2;
  //       var centerShift_y = (canvas.height - img.height * ratio) / 2;
  //       ctx.clearRect(0, 0, canvas.width, canvas.height);
  //       ctx.drawImage(
  //         img,
  //         0,
  //         0,
  //         img.width,
  //         img.height,
  //         centerShift_x,
  //         centerShift_y,
  //         img.width * ratio,
  //         img.height * ratio,
  //       );
  //     }
  //     ScrollTrigger.create({
  //       trigger: ".circle_line_gispy",
  //       pin: true,
  //       // markers:true,
  //       // scroller: `#main`,
  //       //   set start end according to preference
  //       start: "top top",
  //       end: "300% center",
  //     });
  //   }
  //   canvas();

  console.clear();
  /* The encoding is super important here to enable frame-by-frame scrubbing. */

  // ffmpeg -i ~/Downloads/Toshiba\ video/original.mov -movflags faststart -vcodec libx264 -crf 23 -g 1 -pix_fmt yuv420p output.mp4
  // ffmpeg -i ~/Downloads/Toshiba\ video/original.mov -vf scale=960:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p output_960.mp4

  const video = document.querySelector(".video-background");
  let src = video.currentSrc || video.src;
  console.log(video, src);

  /* Make sure the video is 'activated' on iOS */
  function once(el, event, fn, opts) {
    var onceFn = function (e) {
      el.removeEventListener(event, onceFn);
      fn.apply(this, arguments);
    };
    el.addEventListener(event, onceFn, opts);
    return onceFn;
  }

  once(document.documentElement, "touchstart", function (e) {
    video.play();
    video.pause();
  });

  /* ---------------------------------- */
  /* Scroll Control! */

  gsap.registerPlugin(ScrollTrigger);

  let tl = gsap.timeline({
    defaults: { duration: 1 },
    scrollTrigger: {
      trigger: ".circle_line_gispy",
      start: "top top",
      end: "300% center",
      scrub: 2,
      pin: ".circle_line_gispy",
    },
  });

  once(video, "loadedmetadata", () => {
    tl.fromTo(
      video,
      {
        currentTime: 0,
      },
      {
        currentTime: video.duration || 1,
      },
    );
  });

  /* When first coded, the Blobbing was important to ensure the browser wasn't dropping previously played segments, but it doesn't seem to be a problem now. Possibly based on memory availability? */
  setTimeout(function () {
    if (window["fetch"]) {
      fetch(src)
        .then((response) => response.blob())
        .then((response) => {
          var blobURL = URL.createObjectURL(response);

          var t = video.currentTime;
          once(document.documentElement, "touchstart", function (e) {
            video.play();
            video.pause();
          });

          video.setAttribute("src", blobURL);
          video.currentTime = t + 0.01;
        });
    }
  }, 1000);

  /* ---------------------------------- */

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

  // let playhead_02 = { frame: 0, totalFrames: 0 };
  // let totalFrames_02 = 0;
  // let animation_02 = lottie.loadAnimation({
  //   container: document.querySelector(".queen_01"),
  //   renderer: "svg",
  //   loop: false,
  //   autoplay: false,
  //   path: "LottieAnimation/Queen.json",
  // });

  // console.log(animation_02.totalFrames);

  // animation_02.addEventListener("DOMLoaded", function () {
  //   // no idea why this isn't being called?
  //   // console.log("loaded");
  //   // console.log(animation.totalFrames);
  //   playhead_02.totalFrames = animation_02.totalFrames - 1;
  //   ScrollTrigger.refresh();
  // });
  // // ScrollTrigger.normalizeScroll(true);

  // gsap.to(playhead_02, {
  //   frame: () => playhead_02.totalFrames,
  //   ease: "none",
  //   onUpdate: () => {
  //     // console.log('frame value', animation.totalFrames, 'playhead value', playhead.frame);
  //     animation_02.goToAndStop(playhead_02.frame, true);
  //   },
  //   scrollTrigger: {
  //     trigger: ".circle_line_queen",
  //     start: "0% 42%",
  //     end: "300% center",
  //     // markers: true,
  //     scrub: 2,
  //     // pinSpacing: true,
  //     pin: ".circle_line_queen",
  //     // pinType: "fixed",
  //     invalidateOnRefresh: true,
  //   },
  // });

  console.clear();
  /* The encoding is super important here to enable frame-by-frame scrubbing. */

  // ffmpeg -i ~/Downloads/Toshiba\ video/original.mov -movflags faststart -vcodec libx264 -crf 23 -g 1 -pix_fmt yuv420p output.mp4
  // ffmpeg -i ~/Downloads/Toshiba\ video/original.mov -vf scale=960:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p output_960.mp4

  const video2 = document.querySelector(".video-background2");
  let src2 = video2.currentSrc || video2.src2;
  console.log(video2);
  console.log(src2);

  /* Make sure the video is 'activated' on iOS */
  function once(el2, event2, fn2, opts2) {
    var onceFn2 = function (e2) {
      el2.removeEventListener(event2, onceFn2);
      fn2.apply(this, arguments);
    };
    el2.addEventListener(event2, onceFn2, opts2);
    return onceFn2;
  }

  once(document.documentElement, "touchstart", function (e2) {
    video2.play();
    video2.pause();
  });

  /* ---------------------------------- */
  /* Scroll Control! */

  // gsap.registerPlugin(ScrollTrigger);

  let tl2 = gsap.timeline({
    defaults: { duration: 1 },
    scrollTrigger: {
      trigger: ".circle_line_queen",
      start: "0% 42%",
      end: "300% center",
      scrub: 2,
      pin: ".circle_line_queen",
    },
  });

  once(video2, "loadedmetadata", () => {
    tl2.fromTo(
      video2,
      {
        currentTime: 0,
      },
      {
        currentTime: video2.duration || 1,
      },
    );
  });

  /* When first coded, the Blobbing was important to ensure the browser wasn't dropping previously played segments, but it doesn't seem to be a problem now. Possibly based on memory availability? */
  setTimeout(function () {
    if (window["fetch"]) {
      fetch(src2)
        .then((response2) => response2.blob())
        .then((response2) => {
          var blobURL2 = URL.createObjectURL(response2);

          var t2 = video2.currentTime;
          once(document.documentElement, "touchstart", function (e2) {
            video2.play();
            video2.pause();
          });

          video2.setAttribute("src", blobURL2);
          video2.currentTime = t2 + 0.01;
        });
    }
  }, 1000);

  /* ---------------------------------- */

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
      x: 30,
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

  console.clear();
  /* The encoding is super important here to enable frame-by-frame scrubbing. */

  // ffmpeg -i ~/Downloads/Toshiba\ video/original.mov -movflags faststart -vcodec libx264 -crf 23 -g 1 -pix_fmt yuv420p output.mp4
  // ffmpeg -i ~/Downloads/Toshiba\ video/original.mov -vf scale=960:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p output_960.mp4

  const video3 = document.querySelector(".video-background3");
  let src3 = video3.currentSrc || video2.src3;
  console.log(video3);
  console.log(src3);

  /* Make sure the video is 'activated' on iOS */
  function once(el3, event3, fn3, opts3) {
    var onceFn3 = function (e3) {
      el3.removeEventListener(event3, onceFn3);
      fn3.apply(this, arguments);
    };
    el3.addEventListener(event3, onceFn3, opts3);
    return onceFn3;
  }

  once(document.documentElement, "touchstart", function (e3) {
    video3.play();
    video3.pause();
  });

  /* ---------------------------------- */
  /* Scroll Control! */

  // gsap.registerPlugin(ScrollTrigger);

  let tl3 = gsap.timeline({
    defaults: { duration: 1 },
    scrollTrigger: {
      trigger: ".sundy_times_ggr",
      start: "0% top",
      end: "300% center",
      scrub: 2,
      pin: ".sundy_times_ggr",
    },
  });

  once(video3, "loadedmetadata", () => {
    tl3.fromTo(
      video3,
      {
        currentTime: 0,
      },
      {
        currentTime: video3.duration || 1,
      },
    );
  });

  /* When first coded, the Blobbing was important to ensure the browser wasn't dropping previously played segments, but it doesn't seem to be a problem now. Possibly based on memory availability? */
  setTimeout(function () {
    if (window["fetch"]) {
      fetch(src3)
        .then((response3) => response3.blob())
        .then((response3) => {
          var blobURL3 = URL.createObjectURL(response3);

          var t3 = video3.currentTime;
          once(document.documentElement, "touchstart", function (e3) {
            video3.play();
            video3.pause();
          });

          video3.setAttribute("src", blobURL3);
          video3.currentTime = t3 + 0.01;
        });
    }
  }, 1000);

  /* ---------------------------------- */

  //   let playhead_03 = { frame: 0, totalFrames: 0 };
  //   let totalFrames_03 = 0;
  //   let animation_03 = lottie.loadAnimation({
  //     container: document.querySelector(".ggr_two"),
  //     renderer: "svg",
  //     loop: false,
  //     autoplay: false,
  //     path: "LottieAnimation/GGR_01.json",
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
  //       end: "300% center",
  //       // markers: true,
  //       scrub: 2,
  //       // pinSpacing: true,
  //       pin: ".sundy_times_ggr",
  //       // pinType: "fixed",
  //       invalidateOnRefresh: true,
  //     },
  //   });
});
