import { setupWebglScene } from '../utils/webgl-scene-setup';

export function setupIntroSection() {
  console.log('Setup: INTRO');

  setupWebglScene({
    container: document.getElementById( 'intro' ),
    vertexShader: require('shaders/passthru.vert'),
    fragmentShader: require('shaders/purple-clouds-waves.frag'),
    animate: true,
    timerType: 'cycle',
    timerCyclePeriod: 128.0,
  });
}
