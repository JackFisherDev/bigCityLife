;(function() {
    var scene = new THREE.Scene(),
        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ),
        renderer = new THREE.WebGLRenderer();

    renderer.setSize( window.innerWidth, window.innerHeight );

    var geometry = new THREE.BoxGeometry( 1, 1, 1 ),
        material = new THREE.MeshBasicMaterial( { color: 0x9995c7 } ),
        cube = new THREE.Mesh( geometry, material );

    scene.add( cube );

    camera.position.z = 5;

    city.appendChild( renderer.domElement );

    function animate() {
        requestAnimationFrame( animate );

        cube.rotation.x += 0.03;
        cube.rotation.y += 0.03;

        renderer.render( scene, camera );
    }

    animate();

    window.onresize = () => {
        console.log('works');
        renderer.setSize(window.innerWidth, innerHeight);
    }
}());