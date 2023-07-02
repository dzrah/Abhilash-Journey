import { Texture } from "three";
import "./style.css";
import "./style_mob.css";
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
 * Video Gallery
 */

let isHovering = false;
const galleries = document.querySelector(".galleries")
const galleries_02 = document.querySelector(".galleries_02")
const hoverGallery = galleries
const hoverGallery_02 = galleries_02
console.log(galleries);
console.log(galleries_02);

const boat = document.querySelector(".boat")
const gallery_sec = document.querySelectorAll(".gallery_02");
// console.log(gallery_sec);
const gallery = document.querySelectorAll(".gallery");
console.log(gallery);
const videoGallery = document.querySelectorAll(".video_style");
const video_container = document.querySelector(".vdieo_gallery");
console.log(video_container);
const videos = document.querySelectorAll(".vdieo_gallery video")
console.log(videos);

for (let i=0; i< videos.length; i++) {
  videos[i].muted = true;
}



video_container.addEventListener('mouseover',() => {
  const clickEvent = new MouseEvent("click", {
    bubbles:true,
    cancelable:true,
    view:window
  })
  
  video_container.dispatchEvent(clickEvent)
  console.log("hover_done");
})
boat.addEventListener('mouseover',() => {
  const clickEvent = new MouseEvent("click", {
    bubbles:true,
    cancelable:true,
    view:window
  })
  
  boat.dispatchEvent(clickEvent)
  console.log("hover_done");
})


videos.forEach((video) => {
  video.addEventListener("mouseover", () => {
    // videos.forEach(video => video.pause())
    video.muted = false
    video.currentTime = 0;
    video.play();
  });

  video.addEventListener("mouseout", () => {
    videos.forEach(video => video.play())
    video.muted = true;

  })
})


//  video_v.forEach((video) => {
//     video.addEventListener("mouseover", () => {
//       for (let i=0; i< video_v.length; i++) {
//         video_v[i].pause();
//         video_v[i].muted = true;
//         console.log("muted done");
//       }
//       video_v.forEach(video => video.muted = true)
//       video.muted = false;
//       video.play();
//       // video.currentTime = 0
      
//       console.log("video_muted");
//     })
//   })


// video_v.forEach((video) => {
//   video.addEventListener("mouseout", () => {
//     video_v.forEach(video => video.muted = true)
//     for (let i=0; i< video_v.length; i++) {
//       video_v[i].muted = true;
//       video_v[i].autoplay = true;
//       video_v[i].loop = true;
//       video_v[i].playsInline = true;
//       video_v[i].preload = "none";
//       video_v[i].play();
//       console.log("muted done");
    
     
//     }
//     video.muted = true;
//     // video.play();
//     // video.pause();
//     console.log("video_muted");
//   })
// })

// function playVideoWithAudio (video) {
//   video.play();
//   video.currentTime = 0;
//   video.muted = false;

//   videos.forEach((v) => {
//     if(v !== video) {
//       v.muted = true;
//     }
//   })
// }




// video_v.play()
videoGallery.forEach((video_style) => {
  video_style.addEventListener("mouseover", () => {
    isHovering = true;
    // video_style.forEach(video_style => video_style.classList.remove('up'))
    // video_style.classList.add('up')
    // video_style.style.zIndex = "1"
    gallery.forEach((gallery_selected) => {
      gallery_selected.addEventListener('mouseover', () =>{
        gallery.forEach(gallery_selected => gallery_selected.classList.remove("gallery_up"))
        gallery_selected.classList.add("gallery_up")
        // gallery_selected.style.zIndex = "9999"
        console.log(gallery_selected);
      })
    
    })
    gallery_sec.forEach((gallery_selected) => {
      gallery_selected.addEventListener('mouseover', () =>{
        gallery_sec.forEach(gallery_selected => gallery_selected.classList.remove("gallery_up"))
        gallery_selected.classList.add("gallery_up")
        // gallery_selected.style.zIndex = "9999"
        console.log(gallery_selected);
      })
    
    })

     

    
    gsap.to(video_style, { 
      onStart: function (){
        for (let i = 0; i< gallery.length; i++) {
          // gallery[i].classList.remove("gallery");
          // gallery[i].classList.add("gallery_stop");
          gallery[i].style.animationPlayState = "paused";
          gallery_sec[i].style.animationPlayState = "paused";
          
          hoverGallery.onmouseover = function() {
            hoverGallery.style.zIndex = "999999";
            hoverGallery_02.style.zIndex = "1";
            console.log("done");
            
           }
      
            hoverGallery_02.onmouseover = function(){
            hoverGallery.style.zIndex = "1";
            hoverGallery_02.style.zIndex = "999999";
            console.log("done_02");;
           }
        
         

          
       

          // console.log(galleries[i]);
          // if (hoverGallery) {
          //   gallery[i].classList.add('up')
          // } else {
          //   gallery_sec[i].classList.add('up')
          // }
          
         
          // gallery_sec[i].classList.remove("gallery_02");
          // gallery_sec[i].classList.add("gallery_02_stop");
         }

     

      },
      scale: 1.5, 
      zIndex: 9999, 
      duration: 0.3 ,


    
    });

   

  
    // video_v.muted = false;
    // for (let i = 0; i< gallery.length; i++) {
    //   console.log(gallery[i]);
      
    //   gallery[i].classlist.remove("gallery")
    //     gallery[i].className.add("gallery_stop")
     
    //   gallery[i].classlist.remove("gallery_02")
    //     gallery[i].className.add("gallery_02_stop")
      
    // }

   

  
  });

  video_style.addEventListener("mouseout", () => {
    isHovering = false;
    gsap.to(video_style, { 
      scale: 1, 
      zIndex: 0, 
      duration: 0.5,
      onStart: function() {
        for (let i=0; i< gallery.length; i++) {
          // gallery[i].classList.remove("gallery_stop");
          // gallery[i].classList.add("gallery");
          // gallery_sec[i].classList.remove("gallery_02_stop");
          // gallery_sec[i].classList.add("gallery_02");
          gallery[i].style.animationPlayState = "running";
          gallery_sec[i].style.animationPlayState = "running";
          // hoverGallery.style.zIndex = ("4")
          hoverGallery.onmouseout = function() {
            hoverGallery.style.zIndex = "1";
            hoverGallery_02.style.zIndex = "0";
           }
          
           hoverGallery_02.onmouseout = function() {
            hoverGallery.style.zIndex = "1"
            hoverGallery_02.style.zIndex = "0"
           }
       
  
          
        }

     
      },
    
    });

   
    // if (gallery.classlist.contains("gallery_stop")) {
    //   gallery.className.toggle("gallery")
    // } 
    // if (gallery.classlist.contains("gallery_02_stop")) {
    //   gallery.className.toggle("gallery_02")
    // } 
  
  });
});





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

  let boatAn = gsap.timeline();
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
});
