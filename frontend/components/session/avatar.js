import * as THREE from 'three';
var TWEEN = require('@tweenjs/tween.js');
import {MTLLoader, OBJLoader} from 'three-obj-mtl-loader';
import OrbitControlsThree from 'three-orbit-controls'
import { debug } from 'util';
const OrbitControls = OrbitControlsThree(THREE);

// Declare avatar states
const STATE_IDLE = "idle";
const STATE_PEEKING = "peek";
const STATE_DISCREET = "discrete";
// radians per frame of rotational velocity
const ROT_VELO = 6 * Math.PI / 180 / 60; // degree per second assuming 60fps
const GLASSES_VELO = 4 / 60; // pixel per second assuming 60fps
const GLASSES_ROT_VELO = 4 * Math.PI / 180 / 60; // degree per second assuming 60fps
const DEBUG_MODE = true;

// equation to find the distance between vector A & vector B
Math.arcLength = function(vectorA, vectorB) {
    const temp = new THREE.Vector3(vectorA.x, vectorA.y, vectorA.z);
    // See Vector-Version: https://en.wikipedia.org/wiki/Great-circle_distance
    return ((temp.cross(vectorB)).length()) / (vectorA.dot(vectorB));
}


// Breakdown a vector to two angles
Math.cartisianToSphericalCoord = function(vector) {
    // see: https://en.wikipedia.org/wiki/List_of_common_coordinate_transformations
    const vLen = vector.length();
    return new THREE.Vector2(
        Math.acos(vector.z / vLen),
        Math.atan2(vector.y, vector.x)
    );
}

Math.sphericalToCartisianCoord = function(angles, radius) {
    // see: https://en.wikipedia.org/wiki/Spherical_coordinate_system
    return new THREE.Vector3(
      Math.sin(angles.x) * Math.cos(angles.y) * radius,
      Math.sin(angles.x) * Math.sin(angles.y) * radius,
      Math.cos(angles.x) * radius,
    );
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
    // see: https://stackoverflow.com/questions/14607640
    return new THREE.Vector3(
        vector.x,
        vector.y * cos(theta) - vector.z * sin(theta),
        vector.y * sin(theta) + vector.z * cos(theta)
    );
}

class AnimatedAvatar {
    constructor(viewport, width, height) {
        let scene = new THREE.Scene();
        let camera = new THREE.PerspectiveCamera( 50, width/height, 0.1, 100000 );
        let renderer = new THREE.WebGLRenderer({antialias:true});
        renderer.domElement.setAttribute("style", "border-radius: 50%;")
        renderer.setSize(width, height);
        viewport.appendChild( renderer.domElement );
        // debugger;
        camera.position.z = 150;


        let ambientLight = new THREE.AmbientLight("aliceblue", 1);
        scene.add(ambientLight);

        this._addPanda(scene);
        this._addGlasses(scene).then(() => this._memorizeAngles());
        renderer.setClearColor("#03a9f4", 1);

        if (DEBUG_MODE) {
            // Add controls
            this.controls = new OrbitControls(camera, renderer.domElement);

            // Add XYZ axis view
            const axes = new THREE.AxesHelper( 100 );
            scene.add(axes);

            // Add avatar to window
            window.avatar = this;
        }

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
        // console.log(this.camera.position);
    }

    // Have Panda Peek At textbox
    peekAt(textbox, textWidth) {
        if(DEBUG_MODE)
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
        this._interpolateCamera(camPos);
        if(this.state === STATE_DISCREET)
            this._resetGlasses();
        this.state = STATE_PEEKING;
    }

    idle() {
        if(DEBUG_MODE)
            console.log(this.state, "->", 'idling');
        this._interpolateCamera(this._homePosition);
        if(this.state === STATE_DISCREET)
            this._resetGlasses();
        this.state = STATE_IDLE;
    }

    lookAway() {
        if(DEBUG_MODE)
            console.log(this.state, "->", 'bein discreet');
        this._interpolateCamera(this._lookAway);
        this.state = STATE_DISCREET;
        this._interpolateGlasses(this._glassesUpPosition, this._glassesUpRotation);
    }

    _interpolateGlasses(toGlassesPos, toGlassesRot) {
        // Stop all tweens in case some are in-progress
        if(this._tweenGlasses && this._tweenGlasses.length !== 0)
            for(let i in this._tweenGlasses){
                this._tweenGlasses[i].stop();
            }

        const fromGlassesPos = new THREE.Vector3(this._glasses.position.x, this._glasses.position.y, this._glasses.position.z)
        const distance = new THREE.Vector3().subVectors(toGlassesPos, fromGlassesPos).length();
        const posTime = distance / GLASSES_VELO;

        const fromGlassesRot = new THREE.Vector3(this._glasses.rotation.x, this._glasses.rotation.y, this._glasses.rotation.z);
        const arcLength =  new THREE.Vector3().subVectors(
            toGlassesRot, fromGlassesRot
        ).length();
        const rotTime = arcLength / GLASSES_ROT_VELO;

        console.log(posTime, rotTime);

        this._tweenGlasses = [
            new TWEEN.Tween(fromGlassesPos)
                .to(toGlassesPos, posTime)
                .easing(TWEEN.Easing.Cubic.InOut)
                .onUpdate((coord) => {
                    this._glasses.position.set(coord.x, coord.y, coord.z)
                })
                .start(),
            
            new TWEEN.Tween(fromGlassesRot)
                .to(toGlassesRot, rotTime)
                .easing(TWEEN.Easing.Cubic.InOut)
                .onUpdate((rot) => {
                    this._glasses.rotation.set(rot.x, rot.y, rot.z);
                })
                .start(),
        ];
    }
    
    _interpolateCamera(toCameraPos) {
        const fromCameraPos = new THREE.Vector3(this.camera.position.x, this.camera.position.y, this.camera.position.z);

        // Find radial length between two points
        const arcLength = Math.arcLength(fromCameraPos, toCameraPos);
        const time = arcLength/ROT_VELO; // time = distance / velocity

        // If a tween is in-progress, stop that one first
        if(this._tweenCamera)
            this._tweenCamera.stop();

        this._tweenCamera = new TWEEN.Tween(fromCameraPos)
            .to(toCameraPos, time)
            .easing(TWEEN.Easing.Cubic.InOut)
            .onUpdate((coord) => {
                coord.normalize();
                const currPos = coord.multiplyScalar(this._radius);
                this.camera.position.set(currPos.x, currPos.y, currPos.z);
            })
            .start();
    }
    
    _resetGlasses() {
        this._interpolateGlasses(this._glassesHomePosition, this._glassesHomeRotation);
    }

    _memorizeAngles() {
        // Store variables that will be used for interpolation later
        this._radius = this.camera.position.length();
        // We don't want the panda looking straight-down,
        // this is the comfortable viewing X angle.
        this._lookDown = new THREE.Vector3(0, 50.81068803679385, 142.658477444273);
        this._homePosition = new THREE.Vector3(this.camera.position.x, this.camera.position.y, this.camera.position.z);
        this._glassesHomePosition = new THREE.Vector3(this._glasses.position.x, this._glasses.position.y, this._glasses.position.z);
        this._glassesHomeRotation = new THREE.Euler(this._glasses.rotation.x, this._glasses.rotation.y, this._glasses.rotation.z);
        // Home position coordinates
        this._lookAway = new THREE.Vector3(-44.89629858812347, -37.30348307472845, 138.17659904477216);
        this._glassesUpPosition = new THREE.Vector3(0, 17, 30);
        this._glassesUpRotation = new THREE.Euler(-1.0471975511965976, 0, 0);
    }

    _addPanda(scene) {
        const eyesMaterial = new THREE.MeshPhongMaterial({ color: "white"});

        return new Promise((resolve, reject) => {
            new MTLLoader()
                .load('./panda.mtl', (materials) => {
                    materials.preload();
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
                            resolve(object);
                        }, () => {}, () => reject(e)); //, onProgress, onError 
                });
        });
    }

    _addGlasses(scene) {
        const glassesMaterial = new THREE.MeshPhongMaterial({color: "#9b59b6"});
        return new Promise((resolve, reject) => {
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
                            this._glasses = object;
                            scene.add(object);
                            resolve(object);
                        }, () => {}, () => reject(e)); //, onProgress, onError 
                });
        });
    }

    _addMustache(scene) {
        const mustacheMaterial = new THREE.MeshPhongMaterial({color: "#6032bb"});
        return new Promise((resolve, reject) => {
            new OBJLoader()
                .load('./Mustache.obj', (object) => {
                    object.rotateX(Math.PI/2);
                    object.scale.set(.00001, .00001, .00001);
                    object.position.x -= 14;
                    object.position.y -= 75;
                    object.position.z += 50;
                    for(let i in object.children)
                        object.children[i].material = mustacheMaterial;
                    this.scene.add(object);
                    resolve(object);
                }, () => {}, () => reject(e)); //, onProgress, onError 
        });
    }


    addMustache() {
        this._addMustache(this.scene);
    }
}


 export default AnimatedAvatar;