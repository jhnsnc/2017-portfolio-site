import { setupWebglScene } from '../utils/webgl-scene-setup';

export function setupErrorSection() {
  console.log('Setup: ERROR');

  setupWebglScene({
    container: document.getElementById( 'error' ),
    vertexShader: require('shaders/passthru.vert'),
    fragmentShader: require('shaders/purple-clouds-waves.frag'),
    animate: true,
    timerType: 'cycle',
    timerCyclePeriod: 128.0,
  });
}
