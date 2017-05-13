// have to include SCSS so it shows up in webpack
require('scss/main.scss');

import { showStats } from './misc/stats';

import { setupIntroSection } from './sections/intro';
import { setupAboutSection } from './sections/about';
import { setupQuotesSection } from './sections/quotes';
// import { setupWorkSection } from './sections/work';
import { setupContactSection } from './sections/contact';

function runApp() {
  // showStats();

  setupIntroSection();
  setupAboutSection();
  setupQuotesSection();
  // setupWorkSection();
  setupContactSection();
}

runApp();
