// import * as Stats from 'stats'; // TODO: commented out in order to temporarily fix build

export function showStats() {
  // stats
  var stats = new Stats();
  stats.domElement.style.position = 'fixed';
  stats.domElement.style.left = '0';
  stats.domElement.style.top = '0';
  stats.domElement.style.zIndex = '999';
  document.body.appendChild(stats.domElement);
  requestAnimationFrame(function updateStats(){
    stats.update();
    requestAnimationFrame(updateStats);
  });
}
