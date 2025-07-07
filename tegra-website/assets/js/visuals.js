// Initialize Three.js scene with GSAP animations
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ 
  antialias: true,
  alpha: true,
  powerPreference: "high-performance"
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('three-container').appendChild(renderer.domElement);

// Create floating geometric shapes
const geometry = new THREE.IcosahedronGeometry(2, 1);
const material = new THREE.MeshPhongMaterial({
  color: 0xc97a4d,
  emissive: 0x1a1615,
  specular: 0xe3c4b1,
  shininess: 100,
  transparent: true,
  opacity: 0.8
});

// Generate random floating shapes
const shapes = Array.from({length: 15}, () => {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(
    Math.random() * 20 - 10,
    Math.random() * 20 - 10,
    Math.random() * 20 - 10
  );
  scene.add(mesh);
  return mesh;
});

// Ambient lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Directional lighting
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

camera.position.z = 25;

// GSAP animations for shapes
shapes.forEach((shape, i) => {
  gsap.to(shape.rotation, {
    duration: 10 + Math.random() * 10,
    x: Math.PI * 2,
    y: Math.PI * 2,
    repeat: -1,
    ease: "power1.inOut"
  });
  
  gsap.to(shape.position, {
    duration: 15 + Math.random() * 10,
    y: "+=10",
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut"
  });
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

// Responsive handling
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
