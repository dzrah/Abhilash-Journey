import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ScrollSmoother } from "gsap/all";

/**
 * Cursor
 */

// var cursor = document.querySelector(".cursor");
// var cursorinner = document.querySelector(".cursor2");
// var a = document.querySelectorAll("a");

// document.addEventListener("mousemove", function (e) {
//   var x = e.clientX;
//   var y = e.clientY;
//   cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
// });

// document.addEventListener("mousemove", function (e) {
//   var x = e.clientX;
//   var y = e.clientY;
//   cursorinner.style.left = x + "px";
//   cursorinner.style.top = y + "px";
// });

/**
 * Horizontal Animation
 */

const loop_01 = horizontalLoop(".video_style", { paused: false, repeat: -1 });

/**
 * function Helper
 */

function horizontalLoop(items, config) {
  items = gsap.utils.toArray(items);
  config = config || {};
  let tl = gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: { ease: "none" },
      onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
    }),
    length = items.length,
    startX = items[0].offsetLeft,
    times = [],
    widths = [],
    xPercents = [],
    curIndex = 0,
    pixelsPerSecond = (config.speed || 1) * 50,
    snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
    totalWidth,
    curX,
    distanceToStart,
    distanceToLoop,
    item,
    i;
  gsap.set(items, {
    // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
    xPercent: (i, el) => {
      let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
      xPercents[i] = snap(
        (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
          gsap.getProperty(el, "xPercent"),
      );
      return xPercents[i];
    },
  });
  gsap.set(items, { x: 0 });
  totalWidth =
    items[length - 1].offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    items[length - 1].offsetWidth *
      gsap.getProperty(items[length - 1], "scaleX") +
    (parseFloat(config.paddingRight) || 0);
  for (i = 0; i < length; i++) {
    item = items[i];
    curX = (xPercents[i] / 100) * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    distanceToLoop =
      distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
    tl.to(
      item,
      {
        xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
        duration: distanceToLoop / pixelsPerSecond,
      },
      0,
    )
      .fromTo(
        item,
        {
          xPercent: snap(
            ((curX - distanceToLoop + totalWidth) / widths[i]) * 100,
          ),
        },
        {
          xPercent: xPercents[i],
          duration:
            (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false,
        },
        distanceToLoop / pixelsPerSecond,
      )
      .add("label" + i, distanceToStart / pixelsPerSecond);
    times[i] = distanceToStart / pixelsPerSecond;
  }
  function toIndex(index, vars) {
    vars = vars || {};
    Math.abs(index - curIndex) > length / 2 &&
      (index += index > curIndex ? -length : length); // always go in the shortest direction
    let newIndex = gsap.utils.wrap(0, length, index),
      time = times[newIndex];
    if (time > tl.time() !== index > curIndex) {
      // if we're wrapping the timeline's playhead, make the proper adjustments
      vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }
    curIndex = newIndex;
    vars.overwrite = true;
    return tl.tweenTo(time, vars);
  }
  tl.next = (vars) => toIndex(curIndex + 1, vars);
  tl.previous = (vars) => toIndex(curIndex - 1, vars);
  tl.current = () => curIndex;
  tl.toIndex = (index, vars) => toIndex(index, vars);
  tl.times = times;
  tl.progress(1, true).progress(0, true); // pre-render for performance
  if (config.reversed) {
    tl.vars.onReverseComplete();
    tl.reverse();
  }
  return tl;
}

let mmGallery = gsap.matchMedia();

mmGallery.add("(min-width: 800px)", () => {
  /**
   * Horizontal Animation
   */

  const loop = horizontalLoop(".video_style", { paused: true, repeat: -1 });

  /**
   * function Helper
   */

  function horizontalLoop(items, config) {
    items = gsap.utils.toArray(items);
    config = config || {};
    let tl = gsap.timeline({
        repeat: config.repeat,
        paused: config.paused,
        defaults: { ease: "none" },
        onReverseComplete: () =>
          tl.totalTime(tl.rawTime() + tl.duration() * 100),
      }),
      length = items.length,
      startX = items[0].offsetLeft,
      times = [],
      widths = [],
      xPercents = [],
      curIndex = 0,
      pixelsPerSecond = (config.speed || 1) * 70,
      snap =
        config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
      totalWidth,
      curX,
      distanceToStart,
      distanceToLoop,
      item,
      i;
    gsap.set(items, {
      // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
      xPercent: (i, el) => {
        let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
        xPercents[i] = snap(
          (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
            gsap.getProperty(el, "xPercent"),
        );
        return xPercents[i];
      },
    });
    gsap.set(items, { x: 0 });
    totalWidth =
      items[length - 1].offsetLeft +
      (xPercents[length - 1] / 100) * widths[length - 1] -
      startX +
      items[length - 1].offsetWidth *
        gsap.getProperty(items[length - 1], "scaleX") +
      (parseFloat(config.paddingRight) || 0);
    for (i = 0; i < length; i++) {
      item = items[i];
      curX = (xPercents[i] / 100) * widths[i];
      distanceToStart = item.offsetLeft + curX - startX;
      distanceToLoop =
        distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
      tl.to(
        item,
        {
          xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
          duration: distanceToLoop / pixelsPerSecond,
        },
        0,
      )
        .fromTo(
          item,
          {
            xPercent: snap(
              ((curX - distanceToLoop + totalWidth) / widths[i]) * 100,
            ),
          },
          {
            xPercent: xPercents[i],
            duration:
              (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
            immediateRender: false,
          },
          distanceToLoop / pixelsPerSecond,
        )
        .add("label" + i, distanceToStart / pixelsPerSecond);
      times[i] = distanceToStart / pixelsPerSecond;
    }
    function toIndex(index, vars) {
      vars = vars || {};
      Math.abs(index - curIndex) > length / 2 &&
        (index += index > curIndex ? -length : length); // always go in the shortest direction
      let newIndex = gsap.utils.wrap(0, length, index),
        time = times[newIndex];
      if (time > tl.time() !== index > curIndex) {
        // if we're wrapping the timeline's playhead, make the proper adjustments
        vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
        time += tl.duration() * (index > curIndex ? 1 : -1);
      }
      curIndex = newIndex;
      vars.overwrite = true;
      return tl.tweenTo(time, vars);
    }
    tl.next = (vars) => toIndex(curIndex + 1, vars);
    tl.previous = (vars) => toIndex(curIndex - 1, vars);
    tl.current = () => curIndex;
    tl.toIndex = (index, vars) => toIndex(index, vars);
    tl.times = times;
    tl.progress(1, true).progress(0, true); // pre-render for performance
    if (config.reversed) {
      tl.vars.onReverseComplete();
      tl.reverse();
    }
    return tl;
  }
});

/**
 * Play sound on mousover and scale animation
 */

let videos = document.querySelectorAll(".video_style");
let videosSound = document.querySelectorAll(".video_style video");
console.log(videos);

for (let i = 0; i < videosSound.length; i++) {
  console.log(videosSound[i]);
  videosSound[i].muted = true;
}

videos.forEach((video) => {
  video.addEventListener("mouseover", () => {
    videosSound.forEach((videosound) => {
      videosound.addEventListener("mouseover", () => {
        videosound.muted = false;
        videosound.currentTime = 0;
        videosound.play();
      });
    });
    loop_01.pause();
    console.log("loop pause done");
    gsap.to(video, { scale: 1.3, duration: 0.8, ease: "power2", zIndex: 9999 });
  });
});
videos.forEach((video) => {
  video.addEventListener("mouseout", () => {
    videosSound.forEach((videosound) => (videosound.muted = true));
    loop_01.play();
    video.muted = true;
    gsap.to(video, { scale: 1, duration: 0.8, ease: "power2", zIndex: 1 });
  });
});

// /**
//  * Text Cursor Rotation
//  */

// Splitting();

// let cursor = document.querySelector(".cursor"),
//   cursorText = cursor.querySelectorAll(".char");

// function rounded(radius) {
//   for (let i = 0; i < cursorText.length; i++) {
//     let rotation = i * (360 / cursorText.length);
//     gsap.set(cursorText[i], {
//       transformOrigin: `0px ${radius}px`,
//       x: radius,
//       rotate: rotation,
//     });
//     gsap.set(cursor, {
//       transformOrigin: "center center",
//       rotation: 0,
//       width: radius * 2,
//       height: radius * 2,
//     });
//   }

//   let rotate = gsap.timeline({ repeat: -1 });
//   rotate.to(cursor, { rotation: 360, duration: 5, ease: "none" });
// }

// let radius = 70;

// function cursorMove(e) {
//   var mouseX = e.clientX,
//     mouseY = e.clientY;
//   tl = gsap.timeline();
//   tl.to(cursor, {
//     duration: 1,
//     x: mouseX - radius,
//     y: mouseY - radius,
//     ease: Expo.ease,
//   });
// }

// function init() {
//   rounded(radius);
//   window.addEventListener("mousemove", cursorMove);
// }

// window.addEventListener("load", function () {
//   init();
// });
// const textRot = document.querySelector(".text-rotate");

// const boatConatiner = document.querySelector(".webgl");
// console.log(boatConatiner);
// const circleSvg = document.querySelector(".rotation");

// boatConatiner.addEventListener("mouseover", () => {
//   gsap.to(circleSvg, { autoAlpha: 1, duration: 2, ease: "power2" });
//   // const btn = document.querySelector("button");

//   let mouseX = 0;
//   let mouseY = 0;
//   //let intv = 0

//   window.addEventListener("mousemove", (event) => {
//     // circleSvg.style.top = event.clientY - 45;
//     // circleSvg.style.left = event.clientX - 45;

//     mouseY = event.clientY / 16 - 45 / 16 + "rem";
//     mouseX = event.clientX / 16 - 45 / 16 + "rem";
//   });

//   const mouseMove = () => {
//     //intv += 1

//     circleSvg.style.top = mouseY;
//     circleSvg.style.left = mouseX;

//     //circleSvg.style.opacity = 1 + Math.sin(intv * .04)
//     //console.log(Math.sin(intv * .04))

//     window.requestAnimationFrame(mouseMove);
//   };

//   mouseMove();

//   var tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

//   tl.to(circleSvg, { width: 0, opacity: 0 });
//   tl.to("body, button", { background: "white" });
//   tl.pause();

//   // btn.addEventListener("click", () => {
//   //   tl.play();
//   // });
// });
// boatConatiner.addEventListener("mouseout", () => {
//   gsap.to(circleSvg, { autoAlpha: 0, duration: 1, ease: "power2" });
//   // const btn = document.querySelector("button");
// });
