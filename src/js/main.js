require('scss/main.scss'); // FOOBAR
require('images/scratch.png'); // FOOBAR
require('images/scratch2.png'); // FOOBAR

console.log('MEOW'); // FOOBAR

import { showStats } from './misc/stats.js';

import { setupIntroSection } from './sections/intro.js';
import { setupSkillsSection } from './sections/skills.js';

function runApp() {
  showStats();

  setupIntroSection();
  setupSkillsSection();
}

runApp();
