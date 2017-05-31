import fitText from '../utils/fit-text';
import debounce from '../utils/debounce';

import { portfolioData } from './portfolio-data';

export function setupWorkSection() {
  const workSection = document.getElementById('work');
  if (!workSection) { return; }

  // cache DOM elements
  const textContainer = workSection.querySelector('.portfolio-section__inner-content');
  const textHeadings = [...textContainer.querySelectorAll('.section-heading')];
  const textSubHeadings = [...textContainer.querySelectorAll('.section-heading__subheading')];
  const listContainer = workSection.querySelector('.portfolio-list__container');
  const detailsContainer = document.querySelector('.portfolio-details');

  setupTextAdjustment(textContainer, textHeadings, textSubHeadings);
  setupPortfolioEntries(listContainer, detailsContainer);
}

function setupTextAdjustment(textContainer, textHeadings, textSubHeadings) {
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

function setupPortfolioEntries(listContainer, detailsContainer) {
  const portfolioEntries = [];
  let lastViewedEntry;

  // prepare manipulation functions
  function showPortfolioDetails(target) {
    // reset overlay state and return focus
    document.body.classList.remove('overlay-active');
    if (lastViewedEntry) {
      lastViewedEntry.listItem.focus();
      lastViewedEntry = undefined;
    }
    // check each entry: activate/deactivate overlay depending on if it is the target
    portfolioEntries.forEach(entry => {
      if (target === entry.title) {
        lastViewedEntry = entry;
        document.body.classList.add('overlay-active');
        entry.detailView.classList.add('active');
        entry.detailView.querySelector('.portfolio-details__close-button').focus();
      } else {
        entry.detailView.classList.remove('active');
      }
    });
  }

  // create each entry
  portfolioData.forEach(entryData => {
    const newEntry = {
      title: entryData.shortTitle,
      listItem: createPortfolioListItem(entryData),
      detailView: createPortfolioDetailView(entryData),
    };

    portfolioEntries.push(newEntry);

    // add to DOM
    listContainer.appendChild(newEntry.listItem);
    detailsContainer.appendChild(newEntry.detailView);

    // add events for this entry
    newEntry.listItem.addEventListener('click', (evt) => {
      evt.preventDefault();
      showPortfolioDetails(newEntry.title);
    });
    newEntry.detailView.querySelector('.portfolio-details__close-button').addEventListener('click', (evt) => {
      evt.preventDefault();
      showPortfolioDetails(undefined);
    });
  });

  // add events
  detailsContainer.addEventListener('click', evt => {
    if (evt.target === detailsContainer) {
      showPortfolioDetails(undefined);
    }
  });
}

function createPortfolioListItem(entryData) {
  // create elements
  const listItem = document.createElement('a');
  listItem.classList.add('portfolio-list__item');
  listItem.setAttribute('href', '#work');
  const thumbnail = document.createElement('div');
  thumbnail.classList.add('portfolio-list__thumbnail', 'letterboxed-image');
  const thumbnailFill = document.createElement('div');
  thumbnailFill.classList.add('letterboxed-image__fill');
  thumbnailFill.style.backgroundImage = `url('${entryData.images.thumbnail}')`;
  const thumbnailFit = document.createElement('div');
  thumbnailFit.classList.add('letterboxed-image__fit');
  thumbnailFit.style.backgroundImage = `url('${entryData.images.thumbnail}')`;
  const itemTitle = document.createElement('h3');
  itemTitle.classList.add('portfolio-list__title');
  itemTitle.innerText = entryData.shortTitle;

  // combine
  thumbnail.appendChild(thumbnailFill);
  thumbnail.appendChild(thumbnailFit);
  listItem.appendChild(thumbnail);
  listItem.appendChild(itemTitle);

  return listItem;
}

function createPortfolioDetailView(entryData) {
  // create elements
  const container = document.createElement('div');
  container.classList.add('portfolio-details__container');
  const entryTitle = document.createElement('h2');
  entryTitle.classList.add('portfolio-details__title');
  entryTitle.innerHTML = entryData.fullTitle;
  const closeButton = document.createElement('a');
  closeButton.classList.add('portfolio-details__close-button');
  closeButton.innerHTML = '&times;';
  closeButton.setAttribute('href', '#');
  const screenshot = document.createElement('div');
  screenshot.classList.add('portfolio-details__screenshot', 'letterboxed-image');
  const screenshotFill = document.createElement('div');
  screenshotFill.classList.add('letterboxed-image__fill');
  screenshotFill.style.backgroundImage = `url('${entryData.images.full}')`;
  const screenshotFit = document.createElement('div');
  screenshotFit.classList.add('letterboxed-image__fit');
  screenshotFit.style.backgroundImage = `url('${entryData.images.full}')`;
  const descriptionContainer = document.createElement('div');
  descriptionContainer.classList.add('portfolio-details__information');

  // add description content
  entryData.descriptionChunks.forEach(descriptionChunk => {
    const descriptionItem = document.createElement('p');
    let iconId;
    if (descriptionChunk.type === 'info') {
      iconId = 'info';
      descriptionItem.classList.add('portfolio-details__notification--information');
    } else if (descriptionChunk.type === 'warning') {
      iconId = 'warning';
      descriptionItem.classList.add('portfolio-details__notification--warning');
    } else { // normal
      descriptionItem.classList.add('portfolio-details__description');
    }
    descriptionItem.innerHTML = descriptionChunk.content;
    // append
    if (iconId) {
      descriptionItem.insertBefore(createSvgIconElement(iconId), descriptionItem.firstChild);
    }
    descriptionContainer.appendChild(descriptionItem);
  });

  // add links
  entryData.links.forEach(linkData => {
    // create link
    const linkItem = document.createElement('a');
    linkItem.classList.add('portfolio-details__link');
    linkItem.setAttribute('target', '_blank');
    linkItem.setAttribute('href', linkData.href);
    // select icon
    let linkIconType = 'link';
    if (linkData.type === 'github') {
      linkIconType = 'github-logo';
    } else if (linkData.type === 'codepen') {
      linkIconType = 'codepen-logo';
    } else if (linkData.type === 'link') {
      linkIconType = 'link';
    }
    // append
    linkItem.appendChild(createSvgIconElement(linkIconType));
    linkItem.appendChild(document.createTextNode(linkData.label));
    descriptionContainer.appendChild(linkItem);
  });

  // combine
  container.appendChild(entryTitle);
  container.appendChild(closeButton);
  screenshot.appendChild(screenshotFill);
  screenshot.appendChild(screenshotFit);
  container.appendChild(screenshot);
  container.appendChild(descriptionContainer);

  return container;
}

function createSvgIconElement(iconId) {
  const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svgElement.classList.add('icon');
  const useElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  useElement.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `${require('images/icon-sprite.svg')}#${iconId}`);
  svgElement.appendChild(useElement);

  return svgElement;
}
