import { setupWebglScene } from '../utils/webgl-scene-setup';

export const introSection = document.getElementById('intro');

export function setupIntroSection() {
  if (!introSection) { return; }

  setupWebglScene({
    container: introSection,
    vertexShader: require('shaders/passthru.vert'),
    fragmentShader: require('shaders/purple-clouds-waves.frag'),
    animate: true,
    timerType: 'cycle',
    timerCyclePeriod: 128.0,
  });
}
