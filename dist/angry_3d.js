

THREE.Cache.enabled = true;

let container, stats, camera, scene, renderer, controls, group;

init();
animate();
  
function init() {
    const angryWidth = 400;
    const angryHeight = 400;

    container = document.getElementById("angry-3d");
    container.style.cursor = "pointer";

    // CAMERA
    camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 10000);

    camera.position.x = 0;
    camera.position.y = 20;
    camera.position.z = 100;

    camera.lookAt (new THREE.Vector3(0,0,0));

    // SCENE
    scene = new THREE.Scene();

    // LIGHTS
    var pointLight = new THREE.PointLight(0xc4c4c4);
    pointLight.position.set(-30, 0, 0);
    scene.add(pointLight);

    var pointLight = new THREE.PointLight(0xc4c4c4);
    pointLight.position.set(30, 0, 0);
    scene.add(pointLight);

    var pointLight = new THREE.PointLight(0xc4c4c4);
    pointLight.position.set(0, 50, 0);
    scene.add(pointLight);

    var pointLight = new THREE.PointLight(0xc4c4c4);
    pointLight.position.set(0, -30, 0);
    scene.add(pointLight);

    var pointLight = new THREE.PointLight(0xc4c4c4);
    pointLight.position.set(0, 0, 30);
    scene.add(pointLight);

    var pointLight = new THREE.PointLight(0xc4c4c4);
    pointLight.position.set(0, 0, -30);
    scene.add(pointLight);

    // THUMBS DOWN
    const loader = new THREE.OBJLoader();

    loader.load("threejs/15809_Thumbs_Up_v1.obj", function(obj) {
        const buttonHand = document.getElementById("button-hand");
        buttonHand.parentElement.removeChild(buttonHand);

        container.style.display = "block";

        scene.add(obj);
    });

    // RENDERER
    renderer = new THREE.WebGLRenderer({ 
        antialias: true,
        alpha: true
    });

    renderer.setClearColor( 0x000000, 0 ); 
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( angryWidth, angryHeight);
    container.appendChild( renderer.domElement );

    // CONTROLS
    controls = new THREE.OrbitControls( camera, renderer.domElement );
    controls.autoRotate = true;
    controls.autoRotateSpeed = 5;

    // window.addEventListener( 'resize', onWindowResize, false );

    // window.addEventListener( 'pointerdown', () => {
    //     onThumbsDownStartedGrabbing();
    // }, false);

    // window.addEventListener( 'pointerup', () => {
    //     onThumbsDownStoppedGrabbing();
    // }, false);
}

function animate( time ) {

    requestAnimationFrame( animate );

    TWEEN.update( time );

    render();

}

function render() {

    controls.update();

    renderer.clear();
    renderer.render( scene, camera );

}