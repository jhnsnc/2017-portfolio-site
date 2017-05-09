import * as THREE from 'THREE';

import { setupWebglScene } from '../webgl-utils/setup';

export function setupQuotesSection() {
  console.log('Setup: QUOTES');

  // cache DOM elements
  const quotesSection = document.getElementById('quotes');
  const rotatingContent = quotesSection.querySelector('.rotating-content__container');
  const btnPrev = quotesSection.querySelector('.rotating-content__previous-button');
  const btnNext = quotesSection.querySelector('.rotating-content__next-button');
  const quoteItems = [...quotesSection.querySelectorAll('.rotating-content__item')];

  // resize quotes area
  function adjustQuoteAreaHeight() {
    let largestHeight = 0;
    quoteItems.forEach(el => {
      const dimensions = el.getBoundingClientRect();
      if (dimensions.height > largestHeight) {
        largestHeight = dimensions.height;
      }
    });

    rotatingContent.style.height = `${largestHeight}px`;
  }
  window.addEventListener('resize', adjustQuoteAreaHeight); // TODO: debounce
  adjustQuoteAreaHeight(); // initial

  // show initial
  let currentQuote = 0;
  quoteItems.forEach(el => {
    el.classList.remove('default');
    el.classList.remove('active');
  });
  quoteItems[currentQuote].classList.add('active');

  // changing quotes
  function showQuote(idx) {
    quoteItems[currentQuote].classList.remove('active');
    currentQuote = idx;
    quoteItems[currentQuote].classList.add('active');
  }
  const showPrevQuote = () => { showQuote((currentQuote + quoteItems.length - 1) % quoteItems.length); };
  const showNextQuote = () => { showQuote((currentQuote + 1) % quoteItems.length); };

  // quote change events
  let autorotate = setInterval(showNextQuote, 8000);
  function stopAutorotate() {
    if (autorotate) {
      clearInterval(autorotate);
      autorotate = false;
    }
  }
  btnPrev.addEventListener('click', () => {
    stopAutorotate();
    showPrevQuote();
  });
  btnNext.addEventListener('click', () => {
    stopAutorotate();
    showNextQuote();
  });

  // all done
  rotatingContent.classList.add('interaction-enabled');
}
