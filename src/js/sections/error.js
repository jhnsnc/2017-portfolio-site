import { setupWebglScene } from '../utils/webgl-scene-setup';

export function setupErrorSection() {
  const errorSection = document.getElementById('error');
  if (!errorSection) { return; }

  setupWebglScene({
    container: errorSection,
    vertexShader: require('shaders/passthru.vert'),
    fragmentShader: require('shaders/purple-clouds-waves.frag'),
    animate: true,
    timerType: 'cycle',
    timerCyclePeriod: 128.0,
  });
}
