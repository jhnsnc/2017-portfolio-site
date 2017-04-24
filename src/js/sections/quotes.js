import * as THREE from 'THREE';

import { setupWebglScene } from '../webgl-utils/setup';

export function setupQuotesSection() {
  console.log('Setup: QUOTES');

  setupWebglScene({
    container: document.getElementById( 'quotes' ),
    vertexShader: require('shaders/passthru-vuv.vert'),
    fragmentShader: require('shaders/light-background.frag'),
    animate: false,
  });
}
