import fitText from '../utils/fit-text';
import debounce from '../utils/debounce';

export const contactSection = document.getElementById('contact');

export function setupContactSection() {
  if (!contactSection) { return; }

  // cache DOM elements
  const textContainer = contactSection.querySelector('.portfolio-section__inner-content');
  const textHeadings = [...textContainer.querySelectorAll('.section-heading')];
  const textDetails = [...textContainer.querySelectorAll('.contact-details')];

  // setup resize function
  function adjustTextSize() {
    const widthLimit = textContainer.getBoundingClientRect().width;
    textHeadings.forEach(item => {
      item.classList.add('position-absolute');
      fitText(item, 'width', widthLimit, 12, 120);
      item.classList.remove('position-absolute');
    });
    textDetails.forEach(item => {
      item.classList.add('position-absolute');
      fitText(item, 'width', widthLimit, 12, 64);
      item.classList.remove('position-absolute');
    });
  }

  // resize now and watch for updates
  window.addEventListener('resize', debounce(adjustTextSize, 100));
  setTimeout(adjustTextSize, 10);
}
