import crel from 'crel';

import { fragFromStr, XLINK_NAMESPACE, crsvg } from '../utils/dom';
import fitText from '../utils/fit-text';
import handleResize from '../utils/resize';

import { portfolioData } from './portfolio-data';

export const workSection = document.getElementById('work');

export function setupWorkSection() {
  if (!workSection) {
    return;
  }

  // cache DOM elements
  const textContainer = workSection.querySelector('.section__inner-content');
  const sectionHeading = textContainer.querySelector('.section-heading');
  const listContainer = workSection.querySelector('.portfolio-list__container');
  const detailsContainer = document.querySelector('.portfolio-details');

  // size adjustment
  handleResize(function adjustTextSize() {
    const widthLimit = textContainer.getBoundingClientRect().width;
    sectionHeading.classList.add('position-absolute');
    fitText(sectionHeading, 'width', widthLimit, 12, 120);
    sectionHeading.classList.remove('position-absolute');
  });

  // setup dynamic content from data
  setupPortfolioEntries(listContainer, detailsContainer);
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
    portfolioEntries.forEach((entry) => {
      if (target === entry.title) {
        lastViewedEntry = entry;
        document.body.classList.add('overlay-active');
        entry.detailView.classList.add('active');
        entry.detailView
          .querySelector('.portfolio-details__close-button')
          .focus();
      } else {
        entry.detailView.classList.remove('active');
      }
    });
  }

  // create each entry
  portfolioData.forEach((entryData) => {
    const newEntry = {
      title: entryData.shortTitle || entryData.title,
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
    newEntry.detailView
      .querySelector('.portfolio-details__close-button')
      .addEventListener('click', (evt) => {
        evt.preventDefault();
        showPortfolioDetails(undefined);
      });
  });

  // add events
  detailsContainer.addEventListener('click', (evt) => {
    if (evt.target === detailsContainer) {
      showPortfolioDetails(undefined);
    }
  });
}

function createPortfolioListItem(entryData) {
  return crel(
    'a',
    { class: 'portfolio-list__item', href: '#work' },
    crel('div', {
      class: 'portfolio-list__thumbnail',
      style: `background-image: url('${entryData.images.thumbnail}')`,
    }),
    crel(
      'h3',
      { class: 'portfolio-list__title' },
      entryData.shortTitle || entryData.title
    )
  );
}

function createPortfolioDetailView(entryData) {
  // prepare description content
  const descriptionClassLookup = {
    info: 'portfolio-details__notification--information',
    warning: 'portfolio-details__notification--warning',
    normal: 'portfolio-details__description',
  };
  const descriptionIconLookup = {
    info: 'info',
    warning: 'warning',
    normal: null,
  };
  const descriptionContent = entryData.descriptionChunks.map(
    (descriptionChunk) =>
      typeof descriptionChunk === 'string'
        ? crel(
            'p',
            { class: descriptionClassLookup['normal'] },
            fragFromStr(descriptionChunk)
          )
        : crel(
            'p',
            { class: descriptionClassLookup[descriptionChunk.type] },
            createSvgIconElement(descriptionIconLookup[descriptionChunk.type]),
            fragFromStr(descriptionChunk.content)
          )
  );

  // prepare links content
  const linkIconLookup = {
    github: 'github-logo',
    codepen: 'codepen-logo',
    link: 'link',
  };
  const linksContent = entryData.links.map((linkData) =>
    linkData.type === 'break'
      ? crel('br')
      : crel(
          'a',
          {
            class: 'portfolio-details__link',
            target: '_blank',
            href: linkData.href,
          },
          createSvgIconElement(linkIconLookup[linkData.type] || 'link'),
          linkData.label
        )
  );

  return crel(
    'div',
    { class: 'portfolio-details__container' },
    // title
    crel('h2', { class: 'portfolio-details__title' }, entryData.title),
    // close button
    crel('a', { class: 'portfolio-details__close-button', href: '#' }, '×'),
    // screenshot
    crel(
      'div',
      {
        class: 'portfolio-details__screenshot letterboxed-image',
      },
      crel('div', {
        class: 'letterboxed-image__fill',
        style: `background-image: url('${entryData.images.full}')`,
      }),
      crel('div', {
        class: 'letterboxed-image__fit',
        style: `background-image: url('${entryData.images.full}')`,
      })
    ),
    // content
    crel(
      'div',
      {
        class: 'portfolio-details__information',
      },
      descriptionContent,
      linksContent
    )
  );
}

function createSvgIconElement(iconId) {
  if (!iconId) return null;

  const useElement = crsvg('use');
  useElement.setAttributeNS(
    XLINK_NAMESPACE,
    'xlink:href',
    `${require('images/icon-sprite.svg')}#${iconId}`
  );

  return crsvg('svg', { class: 'icon' }, useElement);
}
