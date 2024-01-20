//GAME PAGE FOR GETTING INPUT--------------------------------------------------------------------------------------------------------------------
//Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
//import GLTF loader (to load the spaceship 3d model)
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";
//loader for the gltf file

let loader = new GLTFLoader();

//variable to store spaceship
var spaceship;
//load the spaceship model
loader.load('Assets/scene.gltf', function(gltf){
  spaceship = gltf.scene;
  //add spaceship to the scene
  scene.add(spaceship);
});

//threejs 
//import a scene 
const scene = new THREE.Scene();
//get a camera, specifically a perspective camera (designed to mimic human eyeball vision)
//PerspectiveCamera takes in 4 arguments, (fov, aspectratio, camera frustrum near plane, camera frustrum far plane)
//camera frustrum is effectively the view perspective of the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
//create a renderer in order to render out the objects to the scene
const renderer = new THREE.WebGLRenderer(
  //select which element to render in
  {canvas: document.querySelector('#gamebg'),}
);
//set ratio and make the size fullscreen
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);


//add a light (ambient light because it lights up everything)
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

//make stars
function addStar(){
  //make the geometry and material for all stars
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial( {color: 0xffffff} );
  const star = new THREE.Mesh(geometry, material);
  //get x y z values random from -100 to 100 to place them around randomly
  const x = Math.floor(Math.random() * (100 - (-100)) + (-100));
  const y = Math.floor(Math.random() * (100 - (-100)) + (-100));
  const z = Math.floor(Math.random() * (100 - (-100)) + (-100));
  star.position.set(x, y, z);
  scene.add(star);
}
//call the function 300 times to make 300 stars
for (let i = 0; i<300; i++){
  addStar();
}

//texture
const earthTexture = new THREE.TextureLoader().load('Assets/earth.jpg' );
//make earth

const earth = new THREE.Mesh(
  new THREE.SphereGeometry(25, 32, 16),
  new THREE.MeshBasicMaterial({
    map: earthTexture
  })
)

//add earth to the scene
scene.add(earth)
//change location of models and camera
camera.position.set(0,40,60);
earth.position.set(0,50,-50);
//set the background colour
scene.background = new THREE.Color( 0x000119 );
//make a recursive function to animate the screen
//all moving/animations are in here as they need to be moved everytime function is called
function animate(){
  requestAnimationFrame(animate);
  //animation
  //if spaceship is loaded, rotate it
  if (spaceship){
    spaceship.rotation.y += 0.01;
  }
  earth.rotation.z += 0.0015;
  renderer.render(scene,camera);
}

animate()

//if the window gets resized, change the aspect ratio
window.onresize = function(e){
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

