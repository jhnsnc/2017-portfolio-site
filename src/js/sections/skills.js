import * as THREE from 'THREE';

import { setupWebglScene } from '../webgl-utils/setup';

export function setupSkillsSection() {
  console.log('Setup: SKILLS');

  // setupWebglScene({
  //   container: document.getElementById( 'skills' ),
  //   vertexShader: require('shaders/passthru.vert'),
  //   fragmentShader: require('shaders/test-just-noise.frag'),
  //   animate: true,
  // });

  setupWebglScene({
    container: document.getElementById( 'skills' ),
    vertexShader: require('shaders/passthru-vuv.vert'),
    fragmentShader: require('shaders/light-background.frag'),
    animate: false,
  });
}
