// import * as dat from "lil-gui";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import Stats from "https://cdnjs.cloudflare.com/ajax/libs/stats.js/17/Stats.js";

// import { gsap } from "gsap";
// import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
// console.log(CSS2DRenderer,CSS2DObject );

// import Stats from 'stats.js'

/**
 * Stats
 */

let stats = new Stats();
stats.showPanel(1); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild(stats.dom);

function animate() {
  stats.begin();

  // monitored code goes here

  stats.end();

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

javascript: (function () {
  var script = document.createElement("script");
  script.onload = function () {
    var stats = new Stats();
    document.body.appendChild(stats.dom);
    requestAnimationFrame(function loop() {
      stats.update();
      requestAnimationFrame(loop);
    });
  };
  script.src = "https://mrdoob.github.io/stats.js/build/stats.min.js";
  document.head.appendChild(script);
})();

// const stats = new Stats()
// stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
// document.body.appendChild(stats.dom)

/**
 * Loader
 */

// let sceneReady = false

const TLLoader = gsap.timeline({
  defaults: {
    ease: "power2",
  },
});

const heroAn = gsap.timeline({
  defaults: {
    ease: "power2",
  },
});
// const loadingBarElement = document.querySelector(".progress");
// const loadingManager = new THREE.LoadingManager(
//   // Loaded
//   () => {

// let mm = gsap.matchMedia();

// mm.add("(min-width: 800px)", () => {
//   TLLoader.to(".images_container", { height: 300, duration: 1.3, delay: 0.4 })
//   // .to(".bloc_txt", {autoAlpha:1, height:"auto", duration:0.6}, "-=0.8")
//   .to(".f2", { autoAlpha: 1, y: 0 })
//   .to(".flip_img1", { display: "none", duration: 0 })
//   .to(".f2", { y: "-100%" })
//   .to(".f2", { autoAlpha: 1, y: 0, delay: 0.8, color: "#f7f7f7" })
//   .to(".flip_img1", { display: "block", duration: 0 })
//   .to(".f2", { y: "100%" })
//   .to(".loader", {
//     x: 1900,
//     duration: 1.3,
//     delay: 0.7,
//     ease: "power1.in.out",
//   })
//   .to(".loader", { display: "none", duration: 0 })
//   .from(".title_logo_container", { scale: 2, duration: 0.8 }, "-=1.3")
//   .to("body", { overflowY: "scroll", duration: 0 })
//   .to(".logo", { autoAlpha: 1, y: 20, duration: 0.8, delay: 0.2 }, "-=0.8")
//   .to(".hero_title", { autoAlpha: 1, y: 20, duration: 0.8 }, "-=0.8")
//   .to(".line", { height: 100, duration: 0.8 }, "-=0.8")
//   .from(".mouse_body", { autoAlpha: 0, y: -20, duration: 0.8 }, "-=0.8")
//   .from(".scroll_text", { autoAlpha: 0, y: -10, duration: 0.8 }, "-=0.8")
// });

// mm.add("(max-width: 615px)", () => {
//   TLLoader
// .to(".bloc_txt", {autoAlpha:1, height:"auto", duration:0.6}, "-=0.8")
// .to(".f2", { autoAlpha: 1, y: 0 })
// .to(".flip_img1", { display: "none", duration: 0 })
// .to(".f2", { y: "-100%" })
// .to(".f2", { autoAlpha: 1, y: 0, delay: 0.8, color: "#f7f7f7" })
// .to(".flip_img1", { display: "block", duration: 0 })
// .to(".f2", { y: "100%" })
//     .to(".loader", {
//       x: 1900,
//       duration: 1.3,
//       delay: 0.7,
//       ease: "power1.in.out",
//     })
//     .to(".loader", { display: "none", duration: 0 })
//     // .from(".title_logo_container", { scale: 2, duration: 0.8 }, "-=1.3")
//     .to("body", { overflowY: "scroll", duration: 0 })
//     .to(".logo", { autoAlpha: 1 })
//     .to(".hero_title", { autoAlpha: 1})
//     .to(".line", { height: 100})
//     .from(".mouse_body", { autoAlpha: 0})
//     .from(".scroll_text", { autoAlpha: 0})
//   });
// },

// Progress
//   (itemUrl, itemsLoaded, itemsTotal) => {

//     const progressRatio = itemsLoaded / itemsTotal;
//     loadingBarElement.style.transform = `scaleX(${progressRatio})`;
//   }
// );

// /**
//  * Spector JS
//  */
// const SPECTOR = require('spectorjs')
// const spector = new SPECTOR.Spector()
// spector.displayUI()

/**
 * Base
 */
// Debug
// const gui = new dat.GUI({
//     width: 400
// })

// const planeRotation = gui.addFolder("plane")
// planeRotation.add(plane.rotation, "x")
// planeRotation.open()

// Canvas
const canvas = document.querySelector("canvas.webgl");

let isClicking = false;
canvas.addEventListener("mousedown", () => {
  (isClicking = true), canvas.classList.remove("grab");
  canvas.classList.add("grabbing");
});
canvas.addEventListener("mouseup", () => {
  (isClicking = false), canvas.classList.remove("grabbing");
  canvas.classList.add("grab");
});

// function removeStyle(){
//   canvas.classList.remove = "cursor"
// }
function addStyle() {
  canvas.classList.remove("grab");
  canvas.classList.add("grabbing");
}
// Scene
const scene = new THREE.Scene();

/**
 * CubeTexture
 */

const cubeTextureLoader = new THREE.CubeTextureLoader();

/**
 * Enviroment Map
 */

// const enviomentMap = cubeTextureLoader.load([
//   "/Standard-Cube-Map/px.png",
//   "/Standard-Cube-Map/nx.png",
//   "/Standard-Cube-Map/py.png",
//   "/Standard-Cube-Map/ny.png",
//   "/Standard-Cube-Map/pz.png",
//   "/Standard-Cube-Map/nz.png"
// ])

// scene.environment = enviomentMap
// scene.background = enviomentMap
// console.log(enviomentMap);

// const directionalLight = new THREE.DirectionalLight('#ffffff', 3)
// directionalLight.castShadow = true
// directionalLight.shadow.camera.far = 15
// directionalLight.shadow.mapSize.set(1024, 1024)
// directionalLight.shadow.normalBias = 0.05
// directionalLight.position.set(0.25, 3, - 2.25)
// scene.add(directionalLight)

// Texture loader
const textureLoader = new THREE.TextureLoader();

// Draco loader
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath(
  "https://www.gstatic.com/draco/versioned/decoders/1.5.6/",
);
dracoLoader.setDecoderConfig({ type: "js" });

// GLTF loader
const gltfLoader = new GLTFLoader();
gltfLoader.setDRACOLoader(dracoLoader);

/**
 * Textures
 */
const bakedTexture = textureLoader.load("Boat/Baked_UV.png");
bakedTexture.flipY = false;
bakedTexture.encoding = THREE.sRGBEncoding;

/**
 * Materials
 */
// Baked material
const bakedMaterial = new THREE.MeshBasicMaterial({ map: bakedTexture });
// scene.background = new THREE.Color(0xffffff);
// Portal light material
// const portalLightMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff })

// Pole light material
// const poleLightMaterial = new THREE.MeshBasicMaterial({ color: 0xffffe5 })

// Glass Material
const glassMaterial = new THREE.MeshPhysicalMaterial({
  color: 0x000000,
  metalness: 0,
  roughness: 0,
  reflectivity: 0,
  clearcoat: 0.64,
  emissive: 0x000000,
});

/**
 * Model
 */
gltfLoader.load("Boat/Boat_02.gltf", (gltf) => {
  console.log("loading_done");
  const glass_01 = gltf.scene.children.find(
    (child) => child.name === "glass_01",
  );

  gltf.scene.traverse((child) => {
    child.material = bakedMaterial;
  });

  glass_01.material = glassMaterial;

  gltf.scene.scale.set(2, 2, 2);
  // gltf.scene.rotation.set(0, 90, 0);
  // gltf.scene.position.set(0, -0.1, 0);
  scene.add(gltf.scene);
});
// let mixer;

// gltfLoader.load("Bsyanat_Flag_N_01.glb", (glb) => {

//   // const glass_01 = gltf.scene.children.find(child => child.name === 'glass_01')

//   const flagAn = glb.scene.children.find(child => child.name === 'RootNode (gltf orientation matrix)')
//   console.log(flagAn);
// gltf.scene.traverse((child) => {
//   child.material = bakedMaterial;
// });

// glass_01.material = glassMaterial

// gltf.scene.scale.set(1.7, 1.7, 1.7);
// gltf.scene.rotation.set(0, 90, 0);
// gltf.scene.position.set(0, -0.1, 0);
// const flag = glb.scene;
// mixer = new THREE.AnimationMixer(flag);
// mixer.timeScale = 25
// let action = mixer.clipAction(glb.animations[0])
// action.loop = THREE.LoopRepeat;
// setInterval(() => {
//   action
//     .reset()
//     .play();
// }, Math.random() * 9000 + 1000);
// const clip = THREE.AnimationClip;
// scene.add(flag);
// action.play();

//   flag.scale.set(0.1,0.1,0.1)
//   flag.position.x = -0.15
//   flag.position.y = 1.35
//   flag.position.z = 2.75

// });

/**
 * Floor
 */

// const geometry = new THREE.PlaneGeometry(1,1)
// const planeMaterial = new THREE.MeshBasicMaterial({color:0xFF0000, side:THREE.DoubleSide})
// const plane = new THREE.Mesh(geometry, planeMaterial)
// scene.add(plane)

// plane.rotateX(270)
// plane.rotateZ(90)
// plane.scale.set(0.5,0.5,0.5)

// gui.add(scene.position, 'y',-5,5,0.01 );
// gui.add(scene.position, 'x',-5,5,0.01 );
// console.log(points[0].position);
/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  45,
  sizes.width / sizes.height,
  0.1,
  100,
);

camera.position.set(4, 1, -8);
scene.add(camera);
// let minRotationX = -Math.PI / 4;
// let maxRotationX = Math.PI / 4;
// function limitCameraRotation() {
//   camera.rotation.x = Math.clamp(camera.rotation.x, minRotationX, maxRotationX);
// }
// limitCameraRotation()

/**
 * Lights
 */
// const directionalLight = new THREE.DirectionalLight('#ffffff', 3)
// directionalLight.castShadow = true
// directionalLight.shadow.camera.far = 2
// directionalLight.shadow.mapSize.set(1024, 1024)
// directionalLight.shadow.normalBias = 0.05
// directionalLight.position.set(0.25, 3, - 2.25)
// scene.add(directionalLight)

/**
 * Resizes
 */

function onResize() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  camera.aspect = w / h;
  if (camera.aspect > 1) {
    camera.position.z = -8;
  } else {
    camera.position.z = -15;
  }
  camera.updateProjectionMatrix();

  //your other stuff ...
}

onResize();

// const vid_01 = document.querySelector('.point_0')
// const pointVideo = new CSS2DObject (vid_01)
// pointVideo.position.set(1.5,0,0)
// pointVideo.center.set

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enableZoom = false;
controls.autoRotate = true;
controls.maxPolarAngle = Math.PI / 2.5;

// let video_001 = document.querySelector(".textvideo")
// let video_002 = document.querySelector(".textvideo_01")
// video_001.muted = true
// video_002.muted = true
// video_001.playsinline = true
// video_002.playsinline = true
// // video_001.autoplay = true

// points[0].element.addEventListener('mouseover', autoRotOn_0)
// points[0].element.addEventListener('mouseout', autoRotOff_0)
// points[1].element.addEventListener('mouseover', autoRotOn_1)
// points[1].element.addEventListener('mouseout', autoRotOff_1)

// function autoRotOn_0() {
// controls.autoRotate = false
// video_001.muted = false
// video_001.play()
// // video_001.autoplay = true
// }
// function autoRotOff_0() {
// controls.autoRotate = true
// video_001.muted = true
// video_001.pause()
// }

// function autoRotOn_1() {
// controls.autoRotate = false
// video_002.muted = false
// video_002.play()
// // video_001.autoplay = true
// }
// function autoRotOff_1() {
// controls.autoRotate = true
// video_002.muted = true
// video_002.pause()

// }

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
  alpha: true,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping = THREE.ReinhardToneMapping;
renderer.toneMappingExposure = 3;
// renderer.shadowMap.enabled = true
// renderer.shadowMap.type = THREE.PCFSoftShadowMap

/**
 * Media Query
 */

const mediaQuery = window.matchMedia("(min-width:815px)");
if (mediaQuery.matchMedia) {
  gltf.scene.scale.set(0.5, 0.5, 0.5);
  console.log("Done");
}

/**
 * Animate
 */

const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update controls
  controls.update();
  // controls.autoRotate()

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);

  //

  // let delta = clock.getDelta()
  // if (mixer) mixer.update(delta)
  // renderer.render(scene, camera)
};

tick();
