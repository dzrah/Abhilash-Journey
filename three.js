// import * as dat from "lil-gui";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import Stats from 'https://cdnjs.cloudflare.com/ajax/libs/stats.js/17/Stats.js'
// import { gsap } from "gsap";
// import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
// console.log(CSS2DRenderer,CSS2DObject );

// import Stats from 'stats.js'


/**
 * Stats
 */

let stats = new Stats();
stats.showPanel( 1 ); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild( stats.dom );

function animate() {

	stats.begin();

	// monitored code goes here

	stats.end();

	requestAnimationFrame( animate );

}

requestAnimationFrame( animate );


javascript:(function(){var script=document.createElement('script');script.onload=function(){var stats=new Stats();document.body.appendChild(stats.dom);requestAnimationFrame(function loop(){stats.update();requestAnimationFrame(loop)});};script.src='https://mrdoob.github.io/stats.js/build/stats.min.js';document.head.appendChild(script);})()

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

// Scene
const scene = new THREE.Scene();

/**
 * Loaders
 */

/**
 * CubeTexture 
 */

const cubeTextureLoader = new THREE.CubeTextureLoader()

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

// Texture loader
const textureLoader = new THREE.TextureLoader();

// Draco loader
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.6/");
dracoLoader.setDecoderConfig({type:'js'});

// GLTF loader
const gltfLoader = new GLTFLoader();
gltfLoader.setDRACOLoader(dracoLoader);


/**
 * Textures
 */
const bakedTexture = textureLoader.load("baked_019.jpg");
bakedTexture.flipY = false;
bakedTexture.encoding = THREE.sRGBEncoding;

/**
 * Materials
 */
// Baked material
const bakedMaterial = new THREE.MeshBasicMaterial({ map: bakedTexture });
scene.background = new THREE.Color(0xffffff);
// Portal light material
// const portalLightMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff })

// Pole light material
// const poleLightMaterial = new THREE.MeshBasicMaterial({ color: 0xffffe5 })

// Glass Material 
const glassMaterial = new THREE.MeshPhysicalMaterial({
  color: 0x000000, metalness: 0, roughness: 0,reflectivity:0, clearcoat:0.64, emissive:0x000000,
})

/**
 * Model
 */
gltfLoader.load("GGR_Boat_New_Home_33.gltf", (gltf) => {
  // const bakedMesh = gltf.scene.children.find(child => child.name === 'baked')
  // const portalLightMesh = gltf.scene.children.find(child => child.name === 'portalLight')
  // const poleLightAMesh = gltf.scene.children.find(child => child.name === 'poleLightA')
  // const poleLightBMesh = gltf.scene.children.find(child => child.name === 'poleLightB')

  const glass_01 = gltf.scene.children.find(child => child.name === 'glass_01')
  // const glass_02 = gltf.scene.children.find(child => child.name === 'glass_02')
  // const glass_03 = gltf.scene.children.find(child => child.name === 'glass_03')
  // const glass_04 = gltf.scene.children.find(child => child.name === 'glass_04')
  // const glass_05 = gltf.scene.children.find(child => child.name === 'glass_05')
  // const glass_06 = gltf.scene.children.find(child => child.name === 'glass_06')
  // const glass_07 = gltf.scene.children.find(child => child.name === 'glass_07')
  // const glass_08 = gltf.scene.children.find(child => child.name === 'glass_08')
  // const glass_09 = gltf.scene.children.find(child => child.name === 'glass_09')
  // const glass_010 = gltf.scene.children.find(child => child.name === 'glass_010')
  // const glass_011 = gltf.scene.children.find(child => child.name === 'glass_011')
  // const glass_012 = gltf.scene.children.find(child => child.name === 'glass_012')
  // const glass_013 = gltf.scene.children.find(child => child.name === 'glass_013')
  // const glass_014 = gltf.scene.children.find(child => child.name === 'glass_014')
  // const glass_015 = gltf.scene.children.find(child => child.name === 'glass_015')
  // const glass_016 = gltf.scene.children.find(child => child.name === 'glass_016')
  // const glass_017 = gltf.scene.children.find(child => child.name === 'glass_017')
  // const glass_018 = gltf.scene.children.find(child => child.name === 'glass_018')

  // console.log(glass_01, glass_02, glass_03);

  gltf.scene.traverse((child) => {
    child.material = bakedMaterial;
  });
  // bakedMesh.material = bakedMaterial
  // portalLightMesh.material = portalLightMaterial
  // poleLightAMesh.material = poleLightMaterial
  // poleLightBMesh.material = poleLightMaterial

  glass_01.material = glassMaterial
  // glass_02.material = glassMaterial
  // glass_03.material = glassMaterial
  // glass_04.material = glassMaterial
  // glass_05.material = glassMaterial
  // glass_06.material = glassMaterial
  // glass_07.material = glassMaterial
  // glass_08.material = glassMaterial
  // glass_09.material = glassMaterial
  // glass_010.material = glassMaterial
  // glass_011.material = glassMaterial
  // glass_012.material = glassMaterial
  // glass_013.material = glassMaterial
  // glass_014.material = glassMaterial
  // glass_015.material = glassMaterial
  // glass_016.material = glassMaterial
  // glass_017.material = glassMaterial
  // glass_018.material = glassMaterial

  gltf.scene.scale.set(0.13, 0.13, 0.13);
  gltf.scene.rotation.set(0, 90, 0);
  gltf.scene.position.set(0, -0.1, 0);
  scene.add(gltf.scene);
  // camera.lookAt(gltf.scene.position);
  // const boat = gltf.scene;
});


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



/**
 * Points
 */
const raycaster = new THREE.Raycaster()
const points = [
  {
    position: new THREE.Vector3(0.2, 0.3, 0.6),
    element: document.querySelector('.point_0'),
  },
]
  //   {
  //     position: new THREE.Vector3(1.55, 1.7, - 0.6),
  //     element: document.querySelector('.circle')
  // },
// ]

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
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
// camera.position.x = 0;
// camera.position.y = 0.3;
// camera.position.z = 0.7;
scene.add(camera);
camera.position.set(4,2.6,-4)
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
 * Points
 */

// const vid_01 = document.querySelector('.point_0')
// const pointVideo = new CSS2DObject (vid_01)
// pointVideo.position.set(1.5,0,0)
// pointVideo.center.set


// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enableZoom = false;
controls.autoRotate = true;
controls.maxPolarAngle = Math.PI / 2.5

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.outputEncoding = THREE.sRGBEncoding;

// let labelRenderer = new CSS2DRenderer();


// const maxFPS = 60;
// const frameDelay = 1000 / maxFPS;

// let lastFrameTime = 0;

// function update(currentTime) {

//   const elapsed = currentTime - lastFrameTime;

//   // Only render the frame if enough time has passed
//   if (elapsed > frameDelay) {
//     renderer.render(scene,camera)

//     lastFrameTime = currentTime - (elapsed % frameDelay);
//   }
// requestAnimationFrame(update)
// }

// update() ;


/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update controls
  controls.update();
  // controls.autoRotate()

  // Update Points

  
  
  
      // Go through each point
      for(const point of points)
      {

        // console.log(point)
          // Get 2D screen position
          const screenPosition = point.position.clone()
          screenPosition.project(camera)

          // console.log(screenPosition.x);

  
          // Set the raycaster
          raycaster.setFromCamera(screenPosition, camera)
          const intersects = raycaster.intersectObjects(scene.children, true)
          // console.log(scene.children);
          // console.log(intersects)
  
          // No intersect found
          // if(intersects.length === 0)
          // {
          //     // Show
          //     point.element.classList.add('visible')
          // }

          // // Intersect found
          // else
          // {
          //     // Get the distance of the intersection and the distance of the point
          //     const intersectionDistance = intersects[0].distance
          //     const pointDistance = point.position.distanceTo(camera.position)
  
          //     // Intersection is close than the point
          //     if(intersectionDistance < pointDistance)
          //     {
          //         // Hide
          //         point.element.classList.remove('visible')
          //     }
          //     // Intersection is further than the point
          //     else
          //     {
          //         // Show
          //         point.element.classList.add('visible')
          //     }
          // }
  
          // const translateX = screenPosition.x * sizes.width / 2
          // const translateY = - screenPosition.y * sizes.height / 2
          // point.element.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`
      }

      


  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();



