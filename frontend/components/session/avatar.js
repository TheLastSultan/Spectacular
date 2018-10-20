import * as THREE from 'three';
import {MTLLoader, OBJLoader} from 'three-obj-mtl-loader';
import OrbitControlsThree from 'three-orbit-controls'
const OrbitControls = OrbitControlsThree(THREE);

var scene = new THREE.Scene();
var WIDTH = 200,
    HEIGHT = 200;

var camera = new THREE.PerspectiveCamera( 50, WIDTH/HEIGHT, 0.1, 1000 );

const avatarEntryPoint = function(viewport) {
    var renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.domElement.setAttribute("style", "border-radius: 50%;")
    renderer.setSize(WIDTH, HEIGHT);
    viewport.appendChild( renderer.domElement );

    // camera.position.x = 1;
    camera.position.z = 1.5;

    const axes = new THREE.AxesHelper( 100 );
    scene.add( axes );

    var controls = new OrbitControls(camera, renderer.domElement);

    const phongMaterialEyes = new THREE.MeshPhongMaterial(
        { ambient: 0x555555, color: "white", specular: 0xffffff, shininess: 50, shading: THREE.SmoothShading }
    );
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
                            obj.material = phongMaterialEyes;
                        }
                    }
                    scene.add(object);
                }, (e) => {console.log(e);}, () => {console.error(e);}); //, onProgress, onError 
        });

    
    const phongMaterial = new THREE.MeshPhongMaterial(
        { ambient: 0x555555, color: "#9b59b6", specular: 0xffffff, shininess: 50, shading: THREE.SmoothShading }
    );
    new MTLLoader()
        .load('./Sunglasses.mtl', (materials) => {
            materials.preload();
            // console.log(materials);
            new OBJLoader()
                .setMaterials(materials)
                .load('./Sunglasses.obj', (object) => {
                    var box = new THREE.Box3().setFromObject( object );
                    object.position.y -= 0.06;
                    object.position.z += 0.35;
                    object.scale.set(.002, .002, .002);
                    console.log(object);
                    for(let key in object.children) {
                        let child = object.children[key];
                        if (child.name === "Plane")
                            continue;
                        child.material = phongMaterial;
                    }
                    scene.add(object);
                }, (e) => {console.log(e);}, () => {console.error(e);}); //, onProgress, onError 
        });

    var ambientLight = new THREE.AmbientLight("aliceblue", 1);
    scene.add(ambientLight);

    // var sceneLight = new THREE.PointLight("white");
    // scene.add(sceneLight);

    renderer.setClearColor("#03a9f4", 1);

    var animate = function () {
        requestAnimationFrame( animate );
        controls.update();
    //   sceneLight.position.set(-camera.position.x, -camera.position.y, -camera.position.z);
        renderer.render(scene, camera);
        // console.log(camera.position, camera.rotation);
    };

    animate();
}

 export default avatarEntryPoint;