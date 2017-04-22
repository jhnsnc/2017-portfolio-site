import * as THREE from 'THREE';

export function setupSkillsSection() {
  var isPaused;
  var lastUpdate;
  var container;
  var camera, scene, renderer;
  var uniforms;

  function init() {
    console.log('Setup: SKILLS');

    isPaused = true; // PAUSE

    // basic setup
    container = document.getElementById( 'skills' );
    camera = new THREE.Camera();
    camera.position.z = 1;
    scene = new THREE.Scene();
    var geometry = new THREE.PlaneBufferGeometry( 2, 2 );

    // image
    var textureLoader = new THREE.TextureLoader();
    var texture = textureLoader.load('/images/scratch2.png');
    texture.magFilter = THREE.NearestFilter;

    // shader stuff
    uniforms = {
      time: { type: "f", value: 1.0 },
      resolution: { type: "v2", value: new THREE.Vector2() },
      texture: { type: 't', value: texture }
    };
    var material = new THREE.ShaderMaterial( {
      uniforms: uniforms,
      vertexShader: require('shaders/passthru-vuv.vert'),
      fragmentShader: require('shaders/test-image-light-rays.frag'),
      transparent: true
    } );
    lastUpdate = new Date().getTime();

    // put it together for rendering
    var mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.domElement.classList.add('webgl-render-canvas');
    container.appendChild( renderer.domElement );

    // event listeners
    onResize();
    window.addEventListener( 'resize', onResize, false);
    container.addEventListener('click', togglePause); // PAUSE
  }

  // events
  function onResize(evt) {
    renderer.setSize( container.getBoundingClientRect().width, container.getBoundingClientRect().height );
    uniforms.resolution.value.x = renderer.domElement.width;
    uniforms.resolution.value.y = renderer.domElement.height;
  }
  function animate() {
    var currentTime = new Date().getTime()
    var timeSinceLastUpdate = currentTime - lastUpdate;
    lastUpdate = currentTime;

    if (!isPaused) { // PAUSE
      requestAnimationFrame( animate );
    }
    render(timeSinceLastUpdate);
  }
  function render(timeDelta) {
    uniforms.time.value += (timeDelta ? timeDelta / 1000 : 0.05);
    renderer.render( scene, camera );
  }
  function togglePause() { // PAUSE
    if (isPaused) {
      isPaused = false;
      lastUpdate = new Date().getTime();
      animate();
    } else {
      isPaused = true;
    }
  }

  // boot
  init();
  animate();
}
