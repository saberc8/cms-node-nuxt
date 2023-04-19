<template>
	<div ref="sceneRef" class="sceneContainer"></div>
</template>

<script lang="ts" setup>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'
const sceneRef = ref<HTMLDivElement>()
let mixer: any = null

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
	45,
	1440/800,
	0.01,
	100
)
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(1440, 800)
const refDiv = sceneRef.value as HTMLDivElement
refDiv.appendChild(renderer.domElement)

camera.position.set(5, 10, 25)

const controls = new OrbitControls(camera, renderer.domElement)

scene.background = new THREE.Color(0.2, 0.2, 0.2)

// const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
// scene.add(ambientLight);

const directionLight = new THREE.DirectionalLight(0xffffff, 0.4)
scene.add(directionLight)

// const boxGeometry = new THREE.BoxGeometry(1,1,1);
// const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00});
// const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
// scene.add(boxMesh);

new GLTFLoader().load('../assets/resources/room.glb', (gltf) => {
	// console.log(gltf);
	scene.add(gltf.scene)
})

function animate() {
	requestAnimationFrame(animate)
	renderer.render(scene, camera)
	controls.update()
	if (mixer) {
		mixer.update(0.02)
	}
}

onMounted(() => {
  animate()
})
</script>

<style>
.sceneContainer {
	width: 100vw;
	height: 75vh;
}
</style>
