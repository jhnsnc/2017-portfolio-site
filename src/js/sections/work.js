import * as THREE from 'THREE';

import { setupWebglScene } from '../webgl-utils/setup';

export function setupWorkSection() {
  console.log('Setup: WORK');

  setupWebglScene({
    container: document.getElementById( 'work' ),
    vertexShader: require('shaders/passthru-vuv.vert'),
    fragmentShader: require('shaders/light-background.frag'),
    animate: false,
  });
}
