import * as THREE from 'THREE';

import { setupWebglScene } from '../webgl-utils/setup';

export function setupAboutSection() {
  console.log('Setup: ABOUT');

  // // image
  // var texture = new THREE.TextureLoader().load(require('images/scratch2.png'));
  // texture.magFilter = THREE.NearestFilter;

  // setupWebglScene({
  //   container: document.getElementById( 'about' ),
  //   vertexShader: require('shaders/passthru-vuv.vert'),
  //   fragmentShader: require('shaders/test-image-light-rays.frag'),
  //   textures: [texture],
  //   animate: true,
  // });

  setupWebglScene({
    container: document.getElementById( 'about' ),
    vertexShader: require('shaders/passthru-vuv.vert'),
    fragmentShader: require('shaders/light-background.frag'),
    animate: false,
  });
}
