import * as THREE from 'THREE';

import { setupWebglScene } from '../webgl-utils/setup';

export function setupAboutSection() {
  console.log('Setup: ABOUT');

  // image
  var texture = new THREE.TextureLoader().load(require('images/scratch2.png'));
  texture.magFilter = THREE.NearestFilter;

  setupWebglScene(
    document.getElementById( 'about' ), // container
    require('shaders/passthru-vuv.vert'), // vertex shader
    require('shaders/test-image-light-rays.frag'), // fragment shader
    [texture], // texture channels
  );
}
