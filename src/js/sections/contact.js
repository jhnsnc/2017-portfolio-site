import fitText from '../utils/fit-text';
import handleResize from '../utils/resize';

export const contactSection = document.getElementById('contact');

export function setupContactSection() {
  if (!contactSection) {
    return;
  }

  const textContainer = contactSection.querySelector('.section__inner-content');
  const sectionHeading = textContainer.querySelector('.section-heading');
  const textDetails = [...textContainer.querySelectorAll('.contact-details')];

  handleResize(function adjustTextSize() {
    const widthLimit = textContainer.getBoundingClientRect().width;

    sectionHeading.classList.add('position-absolute');
    fitText(sectionHeading, 'width', widthLimit, 12, 120);
    sectionHeading.classList.remove('position-absolute');

    textDetails.forEach((item) => {
      item.classList.add('position-absolute');
      fitText(item, 'width', widthLimit, 12, 64);
      item.classList.remove('position-absolute');
    });
  });
}
