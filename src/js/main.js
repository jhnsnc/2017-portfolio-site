// have to include SCSS so it shows up in webpack
require('scss/main.scss');

import { showStats } from './misc/stats';

import { setupIntroSection } from './sections/intro';
import { setupAboutSection } from './sections/about';
import { setupSkillsSection } from './sections/skills';
import { setupWorkSection } from './sections/work';
import { setupQuotesSection } from './sections/quotes';
import { setupContactSection } from './sections/contact';

function runApp() {
  showStats();

  setupIntroSection();
  setupAboutSection();
  setupSkillsSection();
  setupWorkSection();
  setupQuotesSection();
  setupContactSection();
}

runApp();
