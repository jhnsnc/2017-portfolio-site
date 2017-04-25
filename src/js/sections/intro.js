import * as THREE from 'THREE';

import { setupWebglScene } from '../webgl-utils/setup';

export function setupIntroSection() {
  console.log('Setup: INTRO');

  setupWebglScene({
    container: document.getElementById( 'intro' ),
    vertexShader: require('shaders/passthru.vert'),
    fragmentShader: require('shaders/purple-clouds-waves.frag'),
    animate: true,
  });
}