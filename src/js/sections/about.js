import fitText from '../utils/fit-text';
import handleResize from '../utils/resize';

export const aboutSection = document.getElementById('about');

export function setupAboutSection() {
  if (!aboutSection) {
    return;
  }

  const textContainer = aboutSection.querySelector('.section__inner-content');

  handleResize(function adjustTextSize() {
    const heightLimit = aboutSection.getBoundingClientRect().height;
    fitText(textContainer, 'height', heightLimit, 6, 30);
  });
}
