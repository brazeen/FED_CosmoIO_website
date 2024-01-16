//FOR THREE.JS LIBRARY--------------------------------------------------------------------------------------------------------------------
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
//make planets + random objects
const moon = new THREE.Mesh(
  new THREE.SphereGeometry(20, 32, 16),
  new THREE.MeshBasicMaterial({
    color: 0xC0C0C0
  })
)
const mercury = new THREE.Mesh(
  new THREE.SphereGeometry(30, 32, 16),
  new THREE.MeshBasicMaterial({
    color: 0xB3B3B3
  })
)
const venus = new THREE.Mesh(
  new THREE.SphereGeometry(7, 32, 16),
  new THREE.MeshBasicMaterial({
    color: 0xE5D288
  })
)
const mars = new THREE.Mesh(
  new THREE.SphereGeometry(9, 32, 16),
  new THREE.MeshBasicMaterial({
    color: 0xff6347
  })
)
const meteor = new THREE.Mesh(
  new THREE.DodecahedronGeometry(5, 32, 32),
  new THREE.MeshBasicMaterial({
    color: 0xFFA500,
    wireframe: true
  })
)
const torus = new THREE.Mesh(
  new THREE.TorusGeometry(15, 3, 16, 100),
  new THREE.MeshBasicMaterial({
    color: 0xfff000,
    wireframe: true
  })
)
//add all to the scene
scene.add(moon, mercury, venus, mars, meteor, torus)
//change location of each
moon.position.set(-60, 20, -50);
mercury.position.set(-85, -20, -100);
venus.position.set(45, -30, -50);
mars.position.set(30, 0, -10);
meteor.position.set(45, 30, -50);
torus.position.set(45, 30, -50);
//set the background colour
scene.background = new THREE.Color( 0x000119 );
//make a recursive function to animate the screen
//all moving/animations are in here as they need to be moved everytime function is called
function animate(){
  requestAnimationFrame(animate);
  //moon animation
  
  
  //torus animation
  torus.rotation.x += 0.01;
  
  torus.rotation.z += 0.01;
  renderer.render(scene,camera);
}

animate()

//API--------------------------------------------------------------------------------------------------------------------
var category = 'music';
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/trivia?category=' + category,
    headers: { 'X-Api-Key': 'YOUR_API_KEY'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});



[
    {
      "category": "mathematics",
      "question": "What is the minimum number of integer degrees in a reflex angle?",
      "answer": "181"
    }
  ]
  
  [
    {
      "category": "mathematics",
      "question": "What geometric shape has 4 equal sides",
      "answer": "Square"
    }
  ]