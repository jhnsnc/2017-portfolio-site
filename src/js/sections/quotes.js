import fitText from '../utils/fit-text';
import handleResize from '../utils/resize';

export const quotesSection = document.getElementById('quotes');

export function setupQuotesSection() {
  if (!quotesSection) {
    return;
  }

  // cache DOM elements
  const textContainer = quotesSection.querySelector('.section__inner-content');
  const rotatingContentContainer = quotesSection.querySelector(
    '.rotating-content__container'
  );
  const btnPrev = rotatingContentContainer.querySelector(
    '.rotating-content__previous-button'
  );
  const btnNext = rotatingContentContainer.querySelector(
    '.rotating-content__next-button'
  );
  const quoteItems = [
    ...rotatingContentContainer.querySelectorAll('.rotating-content__item'),
  ];

  // size adjustment
  handleResize(function adjustTextSize() {
    // adjust text sizing
    const containerStyles = getComputedStyle(textContainer);
    const heightLimit = Math.min(
      quotesSection.getBoundingClientRect().height -
        parseInt(containerStyles.paddingTop, 10) -
        parseInt(containerStyles.paddingBottom, 10),
      (textContainer.getBoundingClientRect().width * 9) / 16
    );
    quoteItems.forEach((item) => fitText(item, 'height', heightLimit, 6, 24));
    // adjust quote area height
    if (window.innerWidth < 600) {
      rotatingContentContainer.style.height = 'auto';
    } else {
      let largestHeight = 0;
      quoteItems.forEach((el) => {
        const dimensions = el.getBoundingClientRect();
        if (dimensions.height > largestHeight) {
          largestHeight = dimensions.height;
        }
      });
      rotatingContentContainer.style.height = `${largestHeight}px`;
    }
  });

  // cycle content
  setupRotatingContent(rotatingContentContainer, btnPrev, btnNext, quoteItems);
}

function setupRotatingContent(
  rotatingContentContainer,
  btnPrev,
  btnNext,
  quoteItems
) {
  // show initial
  let currentQuote = 0;
  quoteItems.forEach((el) => {
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
  const showPrevQuote = () => {
    showQuote((currentQuote + quoteItems.length - 1) % quoteItems.length);
  };
  const showNextQuote = () => {
    showQuote((currentQuote + 1) % quoteItems.length);
  };

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
  rotatingContentContainer.classList.add('interaction-enabled');
}
