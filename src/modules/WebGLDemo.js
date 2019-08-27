import * as THREE from 'three';
import GLTFLoader from 'three-gltf-loader';

class WebGLDemo {

  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext("webgl2");
    this.loader = new GLTFLoader();

    this.init();
    this.animate();
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    if (this.canvas.width !== this.canvas.clientWidth || this.canvas.height !== this.canvas.clientHeight) {
      this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight, false);
      this.camera.aspect = this.canvas.clientWidth / this.canvas.clientHeight;
      this.camera.updateProjectionMatrix();
    }

    this.forEachChild(this.scene, child => {
      if (child.type === "Mesh") {
        child.rotation.y += 0.02;
      }
    });

    this.renderer.render(this.scene, this.camera);
  }

  init() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000);
    let ambientLight = new THREE.AmbientLight(0x888888);
    this.scene.add(ambientLight);
    let directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
    directionalLight.position.set(0, 1, 1);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.1;
    directionalLight.shadow.camera.far = 5;
    directionalLight.shadow.bias = -0.01;
    this.scene.add(directionalLight);
    this.camera = new THREE.PerspectiveCamera(75, this.canvas.clientWidth / this.canvas.clientHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({canvas: this.canvas, context: this.context});
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;
    this.camera.position.z = 3;
  }

  clearMesh() {
    let meshes = [];
    this.forEachChild(this.scene, child => {
      if(child.type === "Mesh") {
        meshes.push(child);
      }
    });
    meshes.forEach(mesh => {
      this.scene.remove(mesh);
    })
  }

  loadMesh(meshURL) {
    this.loader.load(meshURL, gltf => {
      let meshes = [];
      this.forEachChild(gltf.scene, child => {
        if (child.type === "Mesh") {
          child.castShadow = true;
          child.receiveShadow = true;
          child.material.shadowSide = THREE.DoubleSide;
          meshes.push(child);
        }
      });
      meshes.forEach(mesh => {
        this.scene.add(mesh);
      });
    }, undefined, error => {
      console.log(error);
    });
  }

  forEachChild(object, callback) {
    object.children.forEach(child => {
      this.forEachChild(child, callback);
      callback(child);
    })
  }
}

export {WebGLDemo}
