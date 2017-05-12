import * as THREE from 'THREE';

import { setupWebglScene } from '../utils/webgl-scene-setup';

export function setupContactSection() {
  console.log('Setup: CONTACT');

  setupWebglScene({
    container: document.getElementById( 'contact' ),
    vertexShader: require('shaders/passthru-vuv.vert'),
    fragmentShader: require('shaders/light-background.frag'),
    animate: false,
  });
}
