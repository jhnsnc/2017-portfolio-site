// dummy includes: have to require in JS so they show up in webpack build
// main SCSS
require('scss/main.scss');
// favicon, social media, "app" assets
require('misc/social-image.jpg?root-asset');
require('misc/og-image.jpg?root-asset');
require('misc/favicon.ico?root-asset');
require('misc/favicon-16x16.png?root-asset');
require('misc/favicon-32x32.png?root-asset');
require('misc/manifest.json?root-asset');
require('misc/android-chrome-192x192.png?root-asset');
require('misc/android-chrome-256x256.png?root-asset');
require('misc/safari-pinned-tab.svg?root-asset');
require('misc/apple-touch-icon.png?root-asset');
require('misc/browserconfig.xml?root-asset');
require('misc/mstile-150x150.png?root-asset');

import { showStats } from './misc/stats';
import { showConsoleMessage } from './misc/console-message';
import { setupActiveNav } from './misc/active-nav';

import { setupIntroSection } from './sections/intro';
import { setupAboutSection } from './sections/about';
import { setupQuotesSection } from './sections/quotes';
import { setupWorkSection } from './sections/work';
import { setupContactSection } from './sections/contact';

function runApp() {
  // showStats();
  showConsoleMessage();
  setupActiveNav();

  setupIntroSection();
  setupAboutSection();
  setupQuotesSection();
  setupWorkSection();
  setupContactSection();
}

runApp();
