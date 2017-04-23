// have to include SCSS so it shows up in webpack
require('scss/main.scss');

require('images/scratch2.png'); // FOOBAR

import { showStats } from './misc/stats';

import { setupIntroSection } from './sections/intro';
import { setupAboutSection } from './sections/about';
import { setupSkillsSection } from './sections/skills';

function runApp() {
  showStats();

  setupIntroSection();
  setupAboutSection();
  setupSkillsSection();
}

runApp();
