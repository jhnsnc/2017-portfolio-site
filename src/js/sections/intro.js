import { setupWebglScene } from '../utils/webgl-scene-setup';

export function setupIntroSection() {
  const introSection = document.getElementById('intro');
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
