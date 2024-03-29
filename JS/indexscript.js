//FOR THREE.JS LIBRARY--------------------------------------------------------------------------------------------------------------------
//Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
//HOME PAGE--------------------------------------------------------------------------------------------------------------------
//import a scene (kind of a container with all the cameras lights and everything)
const scene = new THREE.Scene();
//get a camera, specifically a perspective camera (designed to mimic human eyeball vision)
//PerspectiveCamera takes in 4 arguments, (fov, aspectratio, camera frustrum near plane, camera frustrum far plane)
//camera frustrum is effectively the view perspective of the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
//create a renderer in order to render out the objects to the scene
const renderer = new THREE.WebGLRenderer(
  //select which element to render in
  {canvas: document.querySelector('#homebg'),}
);
//set ratio and make the size fullscreen
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

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

//textures
const moonTexture = new THREE.TextureLoader().load('Assets/moon.jpg' );
const marsTexture = new THREE.TextureLoader().load('Assets/mars.jpg' );
const jupiterTexture = new THREE.TextureLoader().load('Assets/jupiter.jpg' );
const earthTexture = new THREE.TextureLoader().load('Assets/earth.jpg' );
const saturnTexture = new THREE.TextureLoader().load('Assets/saturn.jpg' );
//make planets + random objects
const moon = new THREE.Mesh(
  new THREE.SphereGeometry(20, 32, 16),
  new THREE.MeshBasicMaterial({
    map: moonTexture
  })
)
const jupiter = new THREE.Mesh(
  new THREE.SphereGeometry(30, 32, 16),
  new THREE.MeshBasicMaterial({
    map: jupiterTexture
  })
)
const earth = new THREE.Mesh(
  new THREE.SphereGeometry(7, 32, 16),
  new THREE.MeshBasicMaterial({
    map: earthTexture
  })
)
const mars = new THREE.Mesh(
  new THREE.SphereGeometry(9, 32, 16),
  new THREE.MeshBasicMaterial({
    map: marsTexture
  })
)
const meteor = new THREE.Mesh(
  new THREE.SphereGeometry(7, 32, 16),
  new THREE.MeshBasicMaterial({
    map: saturnTexture
  })
)
const torus = new THREE.Mesh(
  new THREE.TorusGeometry(15, 1, 16, 100),
  new THREE.MeshStandardMaterial({
    color: 0xf4edbc
  })
)
//add all to the scene
scene.add(moon, jupiter, earth, mars, meteor, torus)
//change location of each
moon.position.set(-60, 20, -48);
jupiter.position.set(-85, -35, -100);
earth.position.set(45, -30, -50);
mars.position.set(40, 0, -10);
meteor.position.set(45, 30, -50);
torus.position.set(45, 30, -50);
//set the background colour
scene.background = new THREE.Color( 0x000119 );
//make a recursive function to animate the screen
//all moving/animations are in here as they need to be moved everytime function is called
function animate(){
  requestAnimationFrame(animate);
  //torus animation
  torus.rotation.x += 0.01;
  moon.rotation.y += 0.001;
  jupiter.rotation.y -= 0.001;
  earth.rotation.x += 0.002;
  earth.rotation.y += 0.001;
  mars.rotation.y += 0.001;
  renderer.render(scene,camera);
}

animate()

//if the window gets resized, change the aspect ratio
window.onresize = function(e){
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

//to move the mouse with the camera like a parallax effect
//oldx and oldy are the old position of the camera (or current position before it gets changed?)
let oldx = 0;
let oldy = 0;
//when the mouse moves, alter the camera position according to the mouse position to make a parallax effect
window.onmousemove = function(ev){
  let changex = ev.x - oldx;
  let changey = ev.y - oldy;
  camera.position.x += changex/100;
  camera.position.y += changey/100;
  //set the new 'old' position
  oldx = ev.x;
  oldy = ev.y;
}

/* -----------------FOR LEADERBOARD-------------------- */
document.addEventListener("DOMContentLoaded", function (){
  const APIKEY = "65bf102f0496a574bb2b4723";
  getInfo(10,true);
  

  
  // By default, we only retrieve 10 results
  function getInfo(limit = 10, all = true) {

    //settings
    var settings = {
      async: true,
      crossDomain: true,
      url: "https://cosmoboard-64b9.restdb.io/rest/playerstats",
      method: "GET",
      headers: {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache"
      }
    }
    
    $.ajax(settings).done(function (response) {
      console.log(response);
    });

    // Once we get the response, we modify our table content by creating the content internally. We run a loop to continuously add on data
    fetch("https://cosmoboard-64b9.restdb.io/rest/playerstats", settings)
      .then(response => response.json())
      .then(response => {
        //sort based on points in descending order
        response.sort((a, b) => b.points - a.points);

        let content = "";

        for (var i = 0; i < response.length && i < limit; i++) {
          console.log(response[i])
          content = `${content}<tr id='${response[i]._id}'>
          <td>${response[i].name}</td>
          <td>${response[i].points}</td>
          <td>${response[i].difficulty}</td>
          <td>${response[i].Category}</td>
          <td>${response[i].fuelleft}</td>`;
        }
        document.getElementById("data-list").getElementsByTagName('tbody')[0].innerHTML = content;
      })
    
}})