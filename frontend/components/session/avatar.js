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
    camera.position.z = 1.7;

    const axes = new THREE.AxisHelper( 100 );
    scene.add( axes );

    var controls = new OrbitControls(camera, renderer.domElement);

    new MTLLoader()
        .load('./panda.mtl', (materials) => {
            materials.preload();
            console.log(materials);
            new OBJLoader()
                .setMaterials(materials)
                .load('./panda.obj', (object) => {
                    console.log(object);
                    object.rotateY(3.14/180*-145);
                    // rotateAroundObjectAxis(object, new Vector3(0, 1, 0), 0);
                    object.position.z += 0.2;
                    // object.position.x -= 0.2;
                    // object.position.y += 0.1;
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
        console.log(camera.position, camera.rotation);
    };

    animate();
}

 export default avatarEntryPoint;