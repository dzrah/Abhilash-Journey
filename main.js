import './style.css'
import './style_mob.css'
// import { gsap } from "gsap";

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


  // const txan = gsap.timmeline()
//  gsap.to(".an_01", {
//     duration: 10,
//     ease: "none",
//     x: "-=3100", 
//     modifiers: {
//       x: gsap.utils.unitize(x => parseFloat(x) % 3100) 
//     },
//     repeat: -1
//   });
//   gsap.to(".an_02", {
//     duration: 10,
//     ease: "none",
//     x: "-=3500", 
//     modifiers: {
//       x: gsap.utils.unitize(x => parseFloat(x) % 6500) //force x value to be between 0 and 500 using modulus
//     },
//     repeat: -2
//   }, "-=3.9");
// const speed = 50; 
// let target = document.querySelector(".text_an")
// let original_html = target.innerHTML

// let new_html = "<div class='ticker-items'>" + original_html + "</div>";
// target.innerHTML = new_html;
// target.innerHTML += new_html;

// let tickerWidth = document.querySelector(".ticker-items").offsetWidth;
// let initDuration = tickerWidth / speed;

// gsap.to(".text_an", {
//   duration: initDuration,
//   xPercent: -500,
//   ease: "none",
//   repeat: -1
// });

  

// gsap.set('.wrapper',{xPercent:-50,yPercent:-50})
// gsap.set('#no02',{y:50})

// var boxWidth = 250,
//     totalWidth = boxWidth * 7,  //  * n of boxes
//     no01 = document.querySelectorAll("#no01 .box"),
//     no02 = document.querySelectorAll("#no02 .box"),
//     dirFromLeft = "+=" + totalWidth,
//     dirFromRight = "-=" + totalWidth;

// var mod = gsap.utils.wrap(0, totalWidth);

// function marquee(which, time, direction){
//   gsap.set(which, {
//     x:function(i) {
//       return i * boxWidth;
//     }
//   });
//   var action = gsap.timeline()
//   .to(which,  {
//   x: direction,
//   modifiers: {
//     x: x => mod(parseFloat(x)) + "px"
//   },
//     duration:time, ease:'none',
//     repeat:-1,
//   });
//   return action
// }

// var master = gsap.timeline({paused:true})
// .add(marquee(no01, 15, dirFromLeft))
// .add(marquee(no02, 20, dirFromRight),0)

// // =============================

// var action = gsap.timeline({defaults: {duration: 1, ease:'none'},
//   scrollTrigger: {
//     trigger: ".wrapper",
//     //scrub: 0.5,
//     start: 'top 60%',
//     end: "top 20%",
//     onEnter: isActive => master.play(),
//     onLeave: isActive => master.pause(),
//     onLeaveBack: isActive => master.pause(),
//     onEnterBack: isActive => master.play(),
//     markers:true
//   }})
  
  
  // $('ul').on('mouseenter', () => gsap.to(tl, {timeScale: 0, overwrite: true}));
  // $('ul').on('mouseleave', () => gsap.to(tl, {timeScale: 1, overwrite: true}));
  

//   gsap.set('.wrapper',{xPercent:-50,yPercent:-50})
// gsap.set('#no02',{y:50})

// var boxWidth = 250,
//     totalWidth = boxWidth * 8,  //  * n of boxes
//     no01 = document.querySelectorAll("#no01 .box"),
//     no02 = document.querySelectorAll("#no02 .box"),
//     dirFromLeft = "+=" + totalWidth,
//     dirFromRight = "-=" + totalWidth;

// var mod = gsap.utils.wrap(0, totalWidth);

// function marquee(which, time, direction){
//   gsap.set(which, {
//     x:function(i) {
//       return i * boxWidth;
//     }
//   });
//   var action = gsap.timeline()
//   .to(which,  {
//   x: direction,
//   modifiers: {
//     x: x => mod(parseFloat(x)) + "px"
//   },
//     duration:time, ease:'none',
//     repeat:-1,
//   });
//   return action
// }

// var master = gsap.timeline({paused:true})
// .add(marquee(no01, 15, dirFromLeft))
// .add(marquee(no02, 20, dirFromRight),0)

// // =============================

// var action = gsap.timeline({defaults: {duration: 1, ease:'none'},
//   scrollTrigger: {
//     trigger: ".wrapper",
//     //scrub: 0.5,
//     start: '40% 80%',
//     end: "100% 60%",
//     onEnter: isActive => master.play(),
//     onLeave: isActive => master.pause(),
//     onLeaveBack: isActive => master.pause(),
//     onEnterBack: isActive => master.play(),
//     markers:true
//   }})

let boatAn = gsap.timeline()
  

  })
 



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


