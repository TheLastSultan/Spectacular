import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';
import {MTLLoader, OBJLoader} from 'three-obj-mtl-loader';
import OrbitControlsThree from 'three-orbit-controls'
import { debug } from 'util';
const OrbitControls = OrbitControlsThree(THREE);

// Declare avatar states
const STATE_IDLE = "idle";
const STATE_PEEKING = "peek";
const STATE_DISCREET = "discrete";
// radians per frame of rotational velocity
const ROT_VELO = Math.PI / 180 / 60; // one degree per second assuming 60fps
const DEBUG_MODE = true;

// equation to find the distance between vector A & vector B
Math.arcLength = function(vectorA, vectorB, radius) {
    // See Vector-Version: https://en.wikipedia.org/wiki/Great-circle_distance
    return ((vectorA.cross(vectorB)).length()) / (vectorA.dot(vectorB));
}


// Breakdown a vector to three angles
Math.vectorToAngles = function(vector) {
    // see: http://www.mathcentre.ac.uk/resources/uploaded/mc-ty-cartesian1-2009-1.pdf
    const vLen = vector.length();
    return new THREE.Vector3(
        Math.acos(vector.x/vLen),
        Math.acos(vector.y/vLen),
        Math.acos(vector.z/vLen)
    );
}

Math.anglesToVector = function(angles, radius) {
    return new THREE.Vector3(
      Math.cos(angles.x) * radius,
      Math.cos(angles.y) * radius,
      Math.cos(angles.z) * radius,
    );
}

Math.rotateX = function(vector, theta) {
    // see: https://stackoverflow.com/questions/14607640
    // |cos θ   −sin θ   0| |x|   |x cos θ − y sin θ|   |x'|
    // |sin θ    cos θ   0| |y| = |x sin θ + y cos θ| = |y'|
    // |  0       0      1| |z|   |        z        |   |z'|
    return new THREE.Vector3(
        vector.x * Math.cos(theta) - vector.y * Math.sin(theta),
        vector.x * Math.sin(theta) + vector.y * Math.cos(theta),
        vector.z
    );
}

Math.rotateY = function(vector, theta) {
    // | cos θ    0   sin θ| |x|   | x cos θ + z sin θ|   |x'|
    // |   0      1       0| |y| = |         y        | = |y'|
    // |−sin θ    0   cos θ| |z|   |−x sin θ + z cos θ|   |z'|
    return new THREE.Vector3(
        vector.x * Math.cos(theta) + vector.z * Math.sin(theta),
        vector.y,
        -1 * vector.x * Math.sin(theta) + vector.z * Math.cos(theta)
    );
}

Math.rotateX = function(vector, theta) {
    return new THREE.Vector3(
        vector.x,
        vector.y * cos(theta) - vector.z * sin(theta),
        vector.y * sin(theta) + vector.z * cos(theta)
    );
}

class AnimatedAvatar {
    constructor(viewport, width, height) {
        let scene = new THREE.Scene();
        let camera = new THREE.PerspectiveCamera( 50, width/height, 0.1, 1000 );
        let renderer = new THREE.WebGLRenderer({antialias:true});
        renderer.domElement.setAttribute("style", "border-radius: 50%;")
        renderer.setSize(width, height);
        viewport.appendChild( renderer.domElement );
        // debugger;
        camera.position.z = 150;


        let ambientLight = new THREE.AmbientLight("aliceblue", 1);
        scene.add(ambientLight);

        this._addPanda(scene);
        this._addGlasses(scene);
        renderer.setClearColor("#03a9f4", 1);

        if (DEBUG_MODE) {
            // Add controls
            this.controls = new OrbitControls(camera, renderer.domElement);

            // Add XYZ axis view
            const axes = new THREE.AxesHelper( 100 );
            scene.add(axes);
        }

        this._memorizeAngles(camera);

        this.renderer = renderer;
        this.scene = scene;
        this.camera = camera;
        this.animate = this.animate.bind(this);

        this.state = STATE_IDLE;
    }

    animate() {
        TWEEN.update();
        requestAnimationFrame(this.animate);
        if (DEBUG_MODE)
            this.controls.update();
        this.renderer.render(this.scene, this.camera);
        console.log(this.camera.position);
    }

    // Have Panda Peek At textbox
    peekAt(textbox, textWidth) {
        console.log(this.state, "->", 'peekin');
        const PADDING = 12; // ASSUME 12px of padding
        let myRect = this.renderer.domElement.getBoundingClientRect();
        let otherRect = textbox.getBoundingClientRect();
        let myMiddle = new THREE.Vector2(myRect.x + myRect.width / 2, myRect.y + myRect.height / 2);
        let lookTo = new THREE.Vector2(
            Math.min(otherRect.right - PADDING, otherRect.x + textWidth + PADDING),
            otherRect.y + otherRect.height / 2
        );

        // This is a vector between the center of the panda to the current character
        let delta = lookTo.sub(myMiddle);
        let deltaAngle =  Math.atan2(delta.x, delta.y);
        let camPos = Math.rotateY(this._lookDown, -deltaAngle);
        // let straightDownAngles = Math.vectorToAngles(this._lookDown);
        // straightDownAngles.x += deltaAngle;
        // let camPos = Math.anglesToVector(straightDownAngles, this._radius);
        
        console.log(camPos);
        this.camera.position.set(camPos.x, camPos.y, camPos.z);
        this.camera.lookAt(0, 0, 0);
        this.state = STATE_PEEKING;
    }

    idle() {
        console.log(this.state, "->", 'idling');
        this.camera.position.set(this._homePosition.x, this._homePosition.y, this._homePosition.z);
        this.camera.lookAt(0, 0, 0);
        this.state = STATE_IDLE;
    }

    lookAway() {
        console.log(this.state, "->", 'bein discreet');
        this.camera.position.set(this._lookAway.x, this._lookAway.y, this._lookAway.z);
        this.camera.lookAt(0, 0, 0);
        this.state = STATE_DISCREET;
    }

    _memorizeAngles(camera) {
        this._radius = camera.position.length();
        // We don't want the panda looking straight-down,
        // this is the comfortable viewing X angle.
        this._lookDown = new THREE.Vector3(0, 50.81068803679385, 142.658477444273);
        this._homePosition = new THREE.Vector3(camera.position.x, camera.position.y, camera.position.z);
        this._lookAway = new THREE.Vector3(-44.89629858812347, -37.30348307472845, 138.17659904477216);
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
                        object.position.z += 20;
                        object.scale.set(100, 100, 100);
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
                        object.position.y -= 6;
                        object.position.z += 35;
                        object.scale.set(.2, .2, .2);
                        for(let key in object.children) {
                            let child = object.children[key];
                            if (child.name !== "Plane")
                                child.material = glassesMaterial;
                        }
                        this.glasses = object;
                        scene.add(object);
                    }, (e) => {console.log(e);}, () => {console.error(e);}); //, onProgress, onError 
            });
    }
}

 export default AnimatedAvatar;