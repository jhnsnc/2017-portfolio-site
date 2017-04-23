import * as THREE from 'THREE';

import { setupWebglScene } from '../webgl-utils/setup';

export function setupSkillsSection() {
  console.log('Setup: SKILLS');

  setupWebglScene(
    document.getElementById( 'skills' ), // container
    require('shaders/passthru.vert'), // vertex shader
    require('shaders/test-just-noise.frag'), // fragment shader
  );
}
