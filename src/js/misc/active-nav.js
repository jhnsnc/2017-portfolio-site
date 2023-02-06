import { introSection } from '../sections/intro';
import { aboutSection } from '../sections/about';
import { quotesSection } from '../sections/quotes';
import { workSection } from '../sections/work';
import { contactSection } from '../sections/contact';

import debounce from '../utils/debounce';

let navLinks;
let sections;

export function setupActiveNav() {
  navLinks = [...document.querySelectorAll('.site-nav__link')];
  sections = [
    introSection,
    aboutSection,
    quotesSection,
    workSection,
    contactSection,
  ].filter((el) => document.contains(el));

  const scrollContainer = document.querySelector(
    '.scrollable-overlays__normal-flow'
  );
  scrollContainer.addEventListener('scroll', debounce(handleScroll, 150));
}

function handleScroll() {
  let closestPosition = Infinity;
  let closestSection = null;

  sections.forEach((section) => {
    const position = Math.abs(
      section.getBoundingClientRect().top + window.innerHeight / 4
    );

    if (!closestSection || position < closestPosition) {
      closestPosition = position;
      closestSection = section;
    }
  });

  setActive(closestSection);
}

function setActive(section) {
  navLinks.forEach((navLink) => navLink.classList.remove('active'));

  const navLink = navLinks.find(
    (link) => link.getAttribute('href') === `#${section.getAttribute('id')}`
  );
  if (navLink) {
    navLink.classList.add('active');
  }
}
