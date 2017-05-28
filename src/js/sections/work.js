import fitText from '../utils/fit-text';
import debounce from '../utils/debounce';

export function setupWorkSection() {
  const workSection = document.getElementById('work');
  if (!workSection) { return; }

  // cache DOM elements
  const textContainer = workSection.querySelector('.portfolio-section__inner-content');
  const textHeadings = [...textContainer.querySelectorAll('.section-heading')];
  const textSubHeadings = [...textContainer.querySelectorAll('.section-heading__subheading')];

  // setup resize function
  function adjustTextSize() {
    const widthLimit = textContainer.getBoundingClientRect().width;
    textHeadings.forEach(item => {
      item.classList.add('position-absolute');
      fitText(item, 'width', widthLimit, 12, 120);
      item.classList.remove('position-absolute');
    });
    textSubHeadings.forEach(item => {
      item.classList.add('position-absolute');
      fitText(item, 'width', widthLimit, 12, 64);
      item.classList.remove('position-absolute');
    });
  }

  // resize now and watch for updates
  window.addEventListener('resize', debounce(adjustTextSize, 100));
  setTimeout(adjustTextSize, 10);
}
