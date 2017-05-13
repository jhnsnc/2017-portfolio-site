import fitText from '../utils/fit-text';
import debounce from '../utils/debounce';

export function setupWorkSection() {
  console.log('Setup: WORK');

  const workSection = document.getElementById('work');
  const textContainer = workSection.querySelector('.portfolio-section__inner-content');
  const textHeadings = [...textContainer.querySelectorAll('.section-heading')];
  const textSubHeadings = [...textContainer.querySelectorAll('.section-heading__subheading')];

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

  window.addEventListener('resize', debounce(adjustTextSize, 100));
  setTimeout(adjustTextSize, 10);
}
