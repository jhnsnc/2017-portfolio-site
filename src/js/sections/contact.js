import fitText from '../utils/fit-text';
import debounce from '../utils/debounce';


export function setupContactSection() {
  console.log('Setup: CONTACT');

  const contactSection = document.getElementById('contact');
  const textContainer = contactSection.querySelector('.portfolio-section__inner-content');
  const textHeadings = [...textContainer.querySelectorAll('.section-heading')];
  const textDetails = [...textContainer.querySelectorAll('.contact-details')];

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

  window.addEventListener('resize', debounce(adjustTextSize, 100)); // TODO: debounce
  setTimeout(adjustTextSize, 10);
}
