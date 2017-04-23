'use strict';

import * as THREE from 'THREE';

export function setupWebglScene(container, vertexShader, fragmentShader, textures) {
  let isPaused;
  let lastUpdate;
  let camera, scene, renderer;
  let uniforms;

  function init() {
    isPaused = false;

    // basic setup
    camera = new THREE.Camera();
    camera.position.z = 1;
    scene = new THREE.Scene();
    const geometry = new THREE.PlaneBufferGeometry( 2, 2 );

    // shader uniforms
    uniforms = {
      iGlobalTime: { type: 'f', value: 1.0 },
      iResolution: { type: 'v2', value: new THREE.Vector2() },
    };
    (textures || []).forEach((texture, i) => {
      // TODO: maybe run some sanity/safety checks on textures first
      uniforms[`iChannel${i}`] = { type: 't', value: texture };
      // uniforms[`iChannelResolution${i}`] = ???; // TODO: add texture resolutions
    });

    // shader setup
    const material = new THREE.ShaderMaterial( {
      uniforms,
      vertexShader,
      fragmentShader,
    } );
    lastUpdate = new Date().getTime();

    // put it together for rendering
    scene.add( new THREE.Mesh(geometry, material) );
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.domElement.classList.add('webgl-scene');
    container.appendChild( renderer.domElement );

    // event listeners
    onResize();
    window.addEventListener( 'resize', onResize, false); // TODO: debounce me?
    container.addEventListener('click', togglePause); // TODO: remove me in favor of autostart/stop
  }

  // events
  function onResize(evt) {
    renderer.setSize( container.getBoundingClientRect().width, container.getBoundingClientRect().height );
    uniforms.iResolution.value.x = renderer.domElement.width;
    uniforms.iResolution.value.y = renderer.domElement.height;
    progressRender(0);
  }
  function tickAnimation() {
    var currentTime = new Date().getTime()
    var timeSinceLastUpdate = currentTime - lastUpdate;
    lastUpdate = currentTime;
    progressRender(timeSinceLastUpdate);
    // loop
    if (!isPaused) {
      requestAnimationFrame( tickAnimation );
    }
  }
  function progressRender(timeDelta) {
    uniforms.iGlobalTime.value += (timeDelta ? timeDelta / 1000 : 0.05);
    renderer.render( scene, camera );
  }
  function togglePause() {
    if (isPaused) {
      isPaused = false;
      lastUpdate = new Date().getTime();
      tickAnimation();
    } else {
      isPaused = true;
    }
  }

  // boot
  init();
  tickAnimation();
}
