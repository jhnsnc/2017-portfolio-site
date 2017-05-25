import { setupWebglScene } from '../utils/webgl-scene-setup';

export function setupIntroSection() {
  setupWebglScene({
    container: document.getElementById( 'intro' ),
    vertexShader: require('shaders/passthru.vert'),
    fragmentShader: require('shaders/purple-clouds-waves.frag'),
    animate: true,
    timerType: 'cycle',
    timerCyclePeriod: 128.0,
  });
}
