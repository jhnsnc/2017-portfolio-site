// dummy includes: have to require in JS so they show up in webpack build
  // main SCSS
  require('scss/main.scss');
  // favicon, social media, "app" assets
  require('!file-loader?name=[name].[ext]!misc/social-image.jpg')
  require('!file-loader?name=[name].[ext]!misc/og-image.jpg')
  require('!file-loader?name=[name].[ext]!misc/favicon.ico')
  require('!file-loader?name=[name].[ext]!misc/favicon-16x16.png')
  require('!file-loader?name=[name].[ext]!misc/favicon-32x32.png')
  require('!file-loader?name=[name].[ext]!misc/manifest.json')
  require('!file-loader?name=[name].[ext]!misc/android-chrome-192x192.png')
  require('!file-loader?name=[name].[ext]!misc/android-chrome-256x256.png')
  require('!file-loader?name=[name].[ext]!misc/safari-pinned-tab.svg')
  require('!file-loader?name=[name].[ext]!misc/apple-touch-icon.png')
  require('!file-loader?name=[name].[ext]!misc/browserconfig.xml')
  require('!file-loader?name=[name].[ext]!misc/mstile-150x150.png')

import { showStats } from './misc/stats';
import { showConsoleMessage } from './misc/console-message';

import { setupIntroSection } from './sections/intro';
import { setupAboutSection } from './sections/about';
import { setupQuotesSection } from './sections/quotes';
import { setupWorkSection } from './sections/work';
import { setupContactSection } from './sections/contact';

function runApp() {
  // showStats();
  showConsoleMessage();

  setupIntroSection();
  setupAboutSection();
  setupQuotesSection();
  setupWorkSection();
  setupContactSection();
}

runApp();
