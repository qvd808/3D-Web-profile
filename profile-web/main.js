import "./style.css";
import * as THREE from "three";

//Get the canvas from index.html
const canvas = document.querySelector("#c");

//Create camera, renderer, scene
const renderer = new THREE.WebGL1Renderer({ canvas });
const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 50);
camera.position.z = 2;
const scene = new THREE.Scene();

const geomery = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x44aa88 });
const cube = new THREE.Mesh(geomery, material);
scene.add(cube);
renderer.render(scene, camera);

function render(time) {
  time *= 0.001;
  cube.rotation.x = time;
  cube.rotation.y = time;

  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

requestAnimationFrame(render); //calling recursive to always rendered it and make the animation