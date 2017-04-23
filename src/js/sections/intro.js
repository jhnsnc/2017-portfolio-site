import * as THREE from 'THREE';

import { setupWebglScene } from '../webgl-utils/setup';

export function setupIntroSection() {
  console.log('Setup: INTRO');

  setupWebglScene(
    document.getElementById( 'intro' ), // container
    require('shaders/passthru.vert'), // vertex shader
    require('shaders/purple-clouds-waves.frag'), // fragment shader
  );
}
