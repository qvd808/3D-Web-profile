import "./style.css";

import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

//Always need three objects scene, camera and renderer

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#c"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

//Create objects
const geometry = new THREE.BoxGeometry(5, 5, 5);
const material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true,
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

renderer.render(scene, camera);

function animate() {
    requestAnimationFrame(animate);
  cube.rotation.z += 0.05;
  cube.rotation.x += 0.05;


    renderer.render(scene, camera);
}

animate();
