'use strict';

import * as THREE from 'THREE';

export function setupWebglScene(options) {
  options = options || {};

  let isPaused;
  let lastUpdate;
  let camera;
  let scene;
  let renderer;
  let uniforms;
  let useGlobalTime;
  let useCycleTime;
  let timer;

  function init() {
    isPaused = !options.animate;

    // basic setup
    camera = new THREE.Camera();
    camera.position.z = 1;
    scene = new THREE.Scene();
    const geometry = new THREE.PlaneBufferGeometry(2, 2);

    // shader uniforms
    uniforms = {
      iResolution: { type: 'v2', value: new THREE.Vector2() },
    };
    timer = 0.0;
    if (
      options.timerType === 'cycle' &&
      typeof !isNaN(options.timerCyclePeriod) &&
      options.timerCyclePeriod > 0.0
    ) {
      uniforms.iCycleTime = { type: 'f', value: 0.0 };
      useCycleTime = true;
    } else if (options.timerType) {
      uniforms.iGlobalTime = { type: 'f', value: 0.0 };
      useGlobalTime = true;
    }
    (options.textures || []).forEach((texture, i) => {
      // TODO: maybe run some sanity/safety checks on textures first
      uniforms[`iChannel${i}`] = { type: 't', value: texture };
      // uniforms[`iChannelResolution${i}`] = ???; // TODO: add texture resolutions
    });

    // shader setup
    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: options.vertexShader,
      fragmentShader: options.fragmentShader,
    });
    if (options.transparent) {
      material.transparent = true;
    }
    lastUpdate = new Date().getTime();

    // put it together for rendering
    scene.add(new THREE.Mesh(geometry, material));
    renderer = new THREE.WebGLRenderer({
      alpha: !!options.transparent,
    });
    renderer.setPixelRatio(window.devicePixelRatio / 1);
    renderer.domElement.classList.add('webgl-scene');
    options.container.appendChild(renderer.domElement);

    // event listeners
    onResize();
    window.addEventListener('resize', onResize, false); // TODO: debounce me?
    if (options.animate) {
      // options.container.addEventListener('click', togglePause); // TODO: remove me in favor of autostart/stop
    }
  }

  // events
  function onResize(evt) {
    renderer.setSize(
      options.container.getBoundingClientRect().width,
      options.container.getBoundingClientRect().height
    );
    uniforms.iResolution.value.x = renderer.domElement.width;
    uniforms.iResolution.value.y = renderer.domElement.height;
    progressRender(0);
  }
  function tickAnimation() {
    var currentTime = new Date().getTime();
    var timeSinceLastUpdate = currentTime - lastUpdate;
    lastUpdate = currentTime;
    progressRender(timeSinceLastUpdate);
    // loop
    if (!isPaused) {
      requestAnimationFrame(tickAnimation);
    }
  }
  function progressRender(timeDelta) {
    if (timeDelta) {
      timer += timeDelta / 1000;
      if (useCycleTime) {
        if (timer >= options.timerCyclePeriod) {
          timer -= options.timerCyclePeriod;
        }
        uniforms.iCycleTime.value = timer / options.timerCyclePeriod;
      }
      if (useGlobalTime) {
        uniforms.iGlobalTime.value = timer;
      }
    }
    renderer.render(scene, camera);
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
