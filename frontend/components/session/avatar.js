import * as THREE from 'three';
import {MTLLoader, OBJLoader} from 'three-obj-mtl-loader';
import OrbitControlsThree from 'three-orbit-controls'
import { debug } from 'util';
const OrbitControls = OrbitControlsThree(THREE);


const STATE_IDLE = "idle";
const STATE_PEEKING = "peek";
const STATE_DISCREET = "discrete";

class AnimatedAvatar {
    constructor(viewport, width, height) {
        let scene = new THREE.Scene();
        let camera = new THREE.PerspectiveCamera( 50, width/height, 0.1, 1000 );
        let renderer = new THREE.WebGLRenderer({antialias:true});
        renderer.domElement.setAttribute("style", "border-radius: 50%;")
        renderer.setSize(width, height);
        viewport.appendChild( renderer.domElement );
        // debugger;
        camera.position.z = 1.5;

        const axes = new THREE.AxesHelper( 100 );
        scene.add(axes);

        let controls = new OrbitControls(camera, renderer.domElement);

        let ambientLight = new THREE.AmbientLight("aliceblue", 1);
        scene.add(ambientLight);

        this._addPanda(scene);
        this._addGlasses(scene);
        renderer.setClearColor("#03a9f4", 1);

        this.controls = controls;
        this.renderer = renderer;
        this.scene = scene;
        this.camera = camera;
        this.animate = this.animate.bind(this);

        this.state = STATE_IDLE;
    }

    animate() {
        console.log('wee');
        requestAnimationFrame(this.animate);
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }

    // Have Panda Peek At textbox
    peekAt(textbox) {
        console.log('peekin', this.state);

        this.state = STATE_PEEKING;
    }

    idle() {
        console.log('idling', this.state);
        this.state = STATE_IDLE;
    }

    lookAway() {
        console.log('bein discreet', this.state);
        this.state = STATE_DISCREET;
    }


    _addPanda(scene) {
        const eyesMaterial = new THREE.MeshPhongMaterial({ color: "white"});
        new MTLLoader()
            .load('./panda.mtl', (materials) => {
                materials.preload();
                console.log(materials);
                new OBJLoader()
                    .setMaterials(materials)
                    .load('./panda.obj', (object) => {
                        object.rotateY(3.14/180*-145);
                        object.position.z += 0.2;
                        for(let idx in object.children) {
                            let obj = object.children[idx];
                            if (obj.name === "mesh237222022" || obj.name === "mesh1424064081") {
                                obj.material = eyesMaterial;
                            }
                        }
                        scene.add(object);
                    }, (e) => {console.log(e);}, () => {console.error(e);}); //, onProgress, onError 
            });
    }

    _addGlasses(scene) {
        const glassesMaterial = new THREE.MeshPhongMaterial({color: "#9b59b6"});
        new MTLLoader()
            .load('./Sunglasses.mtl', (materials) => {
                materials.preload();
                new OBJLoader()
                    .setMaterials(materials)
                    .load('./Sunglasses.obj', (object) => {
                        let box = new THREE.Box3().setFromObject( object );
                        object.position.y -= 0.06;
                        object.position.z += 0.35;
                        object.scale.set(.002, .002, .002);
                        for(let key in object.children) {
                            let child = object.children[key];
                            if (child.name !== "Plane")
                                child.material = glassesMaterial;
                        }
                        scene.add(object);
                    }, (e) => {console.log(e);}, () => {console.error(e);}); //, onProgress, onError 
            });
    }
}

 export default AnimatedAvatar;