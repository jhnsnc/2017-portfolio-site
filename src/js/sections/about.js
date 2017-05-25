import fitText from '../utils/fit-text';
import debounce from '../utils/debounce';

export function setupAboutSection() {
  // cache DOM elements
  const aboutSection = document.getElementById('about');
  const textContainer = aboutSection.querySelector('.portfolio-section__inner-content');

  // define update function
  function adjustTextSize() {
    const heightLimit = aboutSection.getBoundingClientRect().height;
    fitText(textContainer, 'height', heightLimit, 6, 30);
  }

  // run once, run again on resize
  window.addEventListener('resize', debounce(adjustTextSize, 100));
  setTimeout(adjustTextSize, 10);
}
