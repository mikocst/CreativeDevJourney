import * as THREE from "../node_modules/three/build/three.module.js"

const scene = new THREE.Scene;

const canvas = document.querySelector('canvas.webgl')

const textureLoader = new THREE.TextureLoader()
const particleTexture = textureLoader.load('../static/textures/muzzle_05.png', () => {
    // This function is a callback, called when the texture is loaded successfully.
    particlesMaterial.map = particleTexture;
    particlesMaterial.needsUpdate = true;
    // You might also need to adjust other properties here, like wrapS and wrapT.
    particlesMaterial.map.wrapS = particlesMaterial.map.wrapT = THREE.RepeatWrapping;
});
particleTexture.SRGBColorSpace

console.log(particleTexture)

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 2;
scene.add(camera)

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})



window.addEventListener('resize',() =>
{
        //full screen resize
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    //camera 
    camera.updateProjectionMatrix()

    //renderer
    renderer.setSize(sizes.width, sizes.height)
})
//randomizing position of the particles
const particlesBuffGeo = new THREE.BufferGeometry()
const count = 2500;
const positions = new Float32Array(count * 3)

for (let i = 0; i < count * 3; i++){
    positions[i] = (Math.random() - 0.5) * 10

}

particlesBuffGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
const particlesMaterial = new THREE.PointsMaterial({
    size: 0.2,
    sizeAttenuation: true,
    color: "pink",
    map: particleTexture,
    transparent: true,
    alphaMap: particleTexture,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
})

const particles = new THREE.Points(particlesBuffGeo, particlesMaterial)
scene.add(particles)

const clock = new THREE.Clock()

    const tick = () =>{
const elapsedTime = clock.getElapsedTime()

const positions = particlesBuffGeo.getAttribute('position').array;
    for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] -= 0.001; // Decrease y-coordinate by 0.01 in each frame
        // You can adjust the value (-0.01) to change the speed of the animation
        // For example, decreasing the value will make particles move faster
    }
    particlesBuffGeo.getAttribute('position').needsUpdate = true
        renderer.render(scene, camera)
        requestAnimationFrame(tick);
        
        
    }
    
    tick()

//animate()

