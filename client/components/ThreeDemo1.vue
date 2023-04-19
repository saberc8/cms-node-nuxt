<template>
	<div ref="sceneRef" class="sceneContainer"></div>
</template>

<script lang="ts" setup>
import {
	PerspectiveCamera,
	Scene,
	BoxGeometry,
	MeshNormalMaterial,
	Mesh,
	WebGLRenderer,
} from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import RoomGlb from '@/assets/resources/room.glb'
const sceneRef = ref<HTMLDivElement>()
console.log(RoomGlb)
let camera: PerspectiveCamera | null = null
let scene: any = null
let renderer: WebGLRenderer | null = null

const refDiv = sceneRef.value as HTMLDivElement

camera = new PerspectiveCamera(
	70,
	+refDiv.clientWidth / +refDiv.clientHeight,
	0.01,
	10
)
camera.position.z = 1

scene = new Scene()

new GLTFLoader().load(RoomGlb, (gltf) => {
	scene.add(gltf.scene)
})
</script>

<style>
.sceneContainer {
	width: 100vw;
	height: 75vh;
}
</style>
