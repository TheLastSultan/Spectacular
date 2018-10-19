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
    
    camera.position.x = 1;
    camera.position.z = -1;

    camera.setRotationFromEuler(
        new THREE.Euler(
            3.115900480091839,
            0.6176907036944816,
            -3.126710749186239,
            'XYZ'
        )
    );

    var controls = new OrbitControls(camera, renderer.domElement);

    new MTLLoader()
        .load('./panda.mtl', (materials) => {
            materials.preload();
            console.log(materials);
            new OBJLoader()
                .setMaterials(materials)
                .load('./panda.obj', (object) => {
                    console.log(object);
                    scene.add(object);
                }, (e) => {console.log(e);}, () => {console.error(e);}); //, onProgress, onError 
        });

    var ambientLight = new THREE.AmbientLight( "aliceblue", 1);
    scene.add( ambientLight );

    var sceneLight = new THREE.PointLight("white");
    scene.add(sceneLight);

    renderer.setClearColor("#03a9f4", 1);
    
    var animate = function () {
      requestAnimationFrame( animate );
      controls.update();
      sceneLight.position.set(-camera.position.x, -camera.position.y, -camera.position.z);
      renderer.render(scene, camera);
      console.log(camera.rotation);
    };
    
    animate();
 }

 export default avatarEntryPoint;