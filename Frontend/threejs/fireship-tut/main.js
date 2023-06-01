import './style.css'
import * as THREE from 'three'

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

// initial
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000)
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg')
})
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth,window.innerHeight)
camera.position.setZ(30)
renderer.render(scene,camera)

//object
const geometry = new THREE.TorusGeometry(10,3,16,100)
const material = new THREE.MeshStandardMaterial({
    color: 'orange', wireframe:false
})

const torus = new THREE.Mesh(geometry,material)
scene.add(torus)

//lights
const pointLight = new THREE.PointLight('white')
pointLight.position.set(5,5,5)

const ambientLight = new THREE.AmbientLight('white')

scene.add(pointLight,ambientLight)

//helpers
// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200,50)
// scene.add(lightHelper, gridHelper)

//Orbit control - position camera on mouse drag
const controls = new OrbitControls(camera, renderer.domElement)

//random stars
function addStar(){
    const geometry = new THREE.SphereGeometry(0.25)
    const material = new THREE.MeshStandardMaterial({color:'white'})
    const star = new THREE.Mesh(geometry,material)

    const [x,y,z] = Array(3).fill().map(()=> THREE.MathUtils.randFloatSpread(100))
    star.position.set(x,y,z)
    scene.add(star)
}

Array(200).fill().forEach(addStar)


//bg 
const spaceTexture = new THREE.TextureLoader().load('space.jpg')
scene.background = spaceTexture

//avatar
const avatarTexture = new THREE.TextureLoader().load('khabib.jpeg')

const avatar = new THREE.Mesh(
    new THREE.BoxGeometry(3,3,3),
    new THREE.MeshBasicMaterial({
        map:avatarTexture
    })
)

scene.add(avatar)

//moon
const moonTexture = new THREE.TextureLoader().load('moon.jpg')

const moon = new THREE.Mesh(
    new THREE.SphereGeometry(3,32,32),
    new THREE.MeshBasicMaterial({
        map:moonTexture
    })
)

moon.position.z = 30
moon.position.setX(-10) //functions same as above for x

scene.add(moon)

//scroll animation
function moveCamera(){
    
    const current = document.body.getBoundingClientRect().top
    moon.rotation.x += 0.05
    // moon.rotation.y += 0.075
    moon.rotation.z += 0.05

    avatar.rotation.y +=0.01
    avatar.rotation.z +=0.01

    camera.position.z = current * -0.01
    camera.position.x = current * -0.0002
    camera.position.y = current * -0.0002
}

document.body.onscroll = moveCamera
moveCamera()

//recursive render function
function animate(){
    requestAnimationFrame(animate)
    renderer.render(scene,camera)

    controls.update()

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005
    torus.rotation.y += 0.01

}

animate()
