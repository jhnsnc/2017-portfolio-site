import debounce from './debounce';

export default function handleResize(callback) {
  // run once, run again on resize
  window.addEventListener('resize', debounce(callback, 100));
  setTimeout(callback, 10);
}
