export const portfolioData = [
  // Evernote
  // {
  //   shortTitle: 'Evernote Editor Quality',
  //   title: 'Editor Codebase Quality and Stability at Evernote',
  //   images: {
  //     thumbnail: require('../../images/screenshots/ld-30-thumb.jpg'), // TODO: charts and such
  //     full: require('../../images/screenshots/ld-30-full.jpg'), // TODO: charts and such
  //   },
  //   descriptionChunks: ['TODO'],
  //   links: [
  //     {
  //       type: 'link',
  //       label: 'TODO',
  //       href: 'https://www.evernote.com/',
  //     },
  //   ],
  // },
  {
    shortTitle: 'Evernote Richlinks',
    title: 'Richlinks for Evernote',
    images: {
      thumbnail: require('../../images/screenshots/evernote-richlinks-full.png'),
      full: require('../../images/screenshots/evernote-richlinks-full.png'),
    },
    descriptionChunks: [
      'Richlinks are one of the many features I built as part of the editor team at Evernote.',
      'Richlinks are special content blocks that represent a linked external object but are presented inside the note as rich, interactive content. For example, a YouTube richlink is semantically the same as a text link pointing to a YouTube video, but with a richlink the user can view the external video inline.',
      'During my time at Evernote, we went from richlinks being static images representing Google Drive docs to a set of interactive blocks that allowed YouTube video playback, viewing Google Drive file data, and embedding content from other Evernote notes.',
      'This was a huge challenge because when I joined the team, the editor framework could not handle nested iframe documents without significant risk of data loss and editor instability. So a big part of developing this functionality was getting a handle on our fundamental editor architecture, data loss mitigation, and process controls for regressions.',
      'After rebuiling many of our core editor systems and addressing issues with regressions, we were able to find ways to expand richlink functionality to include additional providers and additional modes of interaction. Today, richlink logic represents a stable foundation on which Evernote will be able to dramatically extend the interactivity of note content in the future with minimal incremental risk or complexity.',
    ],
    links: [
      {
        type: 'link',
        label: 'Try with a free Evernote account',
        href: 'https://evernote.com/',
      },
    ],
  },
  // IBM
  {
    shortTitle: 'IBM\xa0Bluemix Maintenance',
    title: 'Maintenance Microservice for IBM\xa0Bluemix',
    images: {
      thumbnail: require('../../images/screenshots/bluemix-maintenance-thumb.jpg'),
      full: require('../../images/screenshots/bluemix-maintenance-full.jpg'),
    },
    descriptionChunks: [
      {
        type: 'info',
        content:
          'Since my time at IBM, Bluemix has been rebranded to "IBM\xa0Cloud" and I have no way of knowing if the rebranded versions of these pages are running on the same microservice I wrote or not.',
      },
      'One of my first projects at IBM was creating a new "Maintenance" microservice for Bluemix that could reliably render pages with simple messages such as "down for maintenance", 4xx errors,  5xx errors, etc.',
      'The previous implementation was heavy and slow, requiring many unnecessary round-trip HTTP calls for heavy assets, which could be quite problematic during maintenance periods, when the microservice would bear significantly increased request load.',
      'I simplified and revised the code, removing all dependencies and features that were not strictly necessary. I then added comprehensive tests to ensure reliable operation in production. The previous solution had used heavy client-side JavaScript to handle translation and other external assets, which delayed error page requests by entire seconds.',
      'I instead decided to translate the messages server-side, embed all assets and styles in the HTML document, and remove all client-side JavaScript. The design was also updated with a series of quirky robot illustrations, which was part of the IBM\xa0Bluemix branding at the time.',
    ],
    links: [
      // {
      //   type: 'link',
      //   label: '404 Error Page',
      //   href: 'https://cloud.ibm.com/maintenance/404', // previously https://console.ng.bluemix.net/maintenance/404
      // },
      // {
      //   type: 'link',
      //   label: '500 Error Page',
      //   href: 'https://cloud.ibm.com/maintenance/500', // previously https://console.ng.bluemix.net/maintenance/500
      // },
    ],
  },
  {
    shortTitle: 'IBM\xa0Bluemix API\xa0Docs',
    title: 'API\xa0Docs Microservice for IBM\xa0Bluemix',
    images: {
      thumbnail: require('../../images/screenshots/bluemix-apidocs-full.jpg'),
      full: require('../../images/screenshots/bluemix-apidocs-full.jpg'),
    },
    descriptionChunks: [
      {
        type: 'info',
        content:
          'Since my time at IBM, Bluemix has been rebranded to "IBM\xa0Cloud". The URLs and styling have changed a bit to match the new branding, but the general layout and functionality of the API Docs framework that I built and helped design is still intact in 2023.',
      },
      'The Bluemix API Docs project was created to provide Bluemix-affiliated service teams with a standardized and validated user experience for their API Documentation. It was later merged with the related "Papillon" API Catalog project, with API Catalog ultimately providing the backend and Bluemix API Docs defining the new frontend experience.',
      'The solution began as a simple documentation page based on data definitions in the Open API (fka Swagger) format, because that was a format nearly all service teams were comfortable working with. We continued to refine the user experience and add on additional features such as sample code generation, Bluemix-related metadata, endpoint groupings, human-readable comments, etc.',
      'During the active experimentation phase, I was the only developer—both backend and frontend—and I actively collaborated with one designer. Later on, additional team members were brought on and the microservice was integrated into existing infrastructure from other service teams. Even though the styles have changed a bit over time, the overall structure that we arrived at through iteration and experimentation is still evident today.',
    ],
    links: [
      {
        type: 'link',
        label: 'API Docs Catalog',
        href: 'https://console.ng.bluemix.net/apidocs',
      },
      {
        type: 'link',
        label: 'Text-to-Speech API Docs (Archived via Wayback Machine)',
        href: 'https://web.archive.org/web/20190622090204/https://cloud.ibm.com/apidocs/text-to-speech',
      },
    ],
  },
  // Client Work (older)
  {
    title: 'Destinations\xa0CU',
    images: {
      thumbnail: require('../../images/screenshots/destinations-cu-full.jpg'),
      full: require('../../images/screenshots/destinations-cu-full.jpg'),
    },
    descriptionChunks: [
      'At BancVue (now known as Kasasa) I built out dozens of sites for various financial institutions. Roughly every two weeks I would build out a new site while reviewing designs for upcoming builds, then move on to the next build. This is an example of one such site build.',
      'The design for Destinations\xa0CU had interesting use of color where each section had a different color scheme, which SCSS helped solve without code duplication. This site also shows some early indications of my focus on motion. Since I finished the primary build with several days to spare, I worked with the designer and client to add a few touches of animated transitions.',
      {
        type: 'info',
        content:
          'I have not been involved with content updates or modifications since the site launched in 2013, and the site has since been completely redesigned. The partially-archived version linked below is a decent representation of the site layout, but it may have some missing images, broken links, etc.',
      },
    ],
    links: [
      {
        type: 'link',
        label: 'Archived Site (via Wayback Machine)',
        href: 'https://web.archive.org/web/20140106072719/https://www.destinationscu.org/',
      },
    ],
  },
  // Game Jam Games
  {
    shortTitle: 'Game Jams',
    title: 'Game Jam Games',
    images: {
      thumbnail: require('../../images/screenshots/ld-35-thumb.png'),
      full: require('../../images/screenshots/ld-30-full.jpg'),
    },
    descriptionChunks: [
      '<a href="https://ldjam.com/" target="_blank">Ludum Dare</a> is one of my favorite events. It is a game jam (similar to a hackathon) where participants create a game from scratch in a short amount of time. Ludum Dare happens once every 4 months, with thousands of new entries each time.',
      'For Ludum Dare, participants create all assets, design, art, code, music, etc for an original game (based on a shared theme) in one weekend. Solo participants have 48 hours and must create all assets from scratch, while group participants have 72 hours and fewer asset restrictions. I used to participate in the solo competition more frequently, but in recent years I have mostly been helping friends with music or art for their projects.',
      'I love the Ludum Dare event because I always learn something new. There is valuable experience to be gained in the practice of completing a project—no matter how small the scope. I leave each competition feeling creatively rejuvinated, ready to tackle even more ambitious creative and technical challenges.',
      {
        type: 'warning',
        content:
          '<strong>Note:</strong> All of these games have music, so you may wish to <strong>adjust the volume</strong> on your computer before playing. You will need a <strong>keyboard</strong> in order to play most of these games. Additionally, the games from LD30 and LD32 also require <strong>Flash</strong> to play.',
      },
    ],
    links: [
      {
        type: 'github',
        label: 'LD37 Source',
        href: 'https://github.com/jhnsnc/ld37',
      },
      {
        type: 'link',
        label: '(LD37) Play "Dining Zoom"',
        href: 'http://cjdevsite.com/games/ld37/',
      },
      {
        type: 'break',
      },
      {
        type: 'github',
        label: 'LD35 Source',
        href: 'https://github.com/jhnsnc/ld35',
      },
      {
        type: 'link',
        label: '(LD35) Play "Impulse"',
        href: 'http://cjdevsite.com/games/ld35/',
      },
      {
        type: 'break',
      },
      {
        type: 'github',
        label: 'JS48-1 Source',
        href: 'https://github.com/jhnsnc/js48-1',
      },
      {
        type: 'link',
        label: '(JS48-1) Play "Monstrous Mixtures"',
        href: 'https://docjekyll.itch.io/monstrous-mixtures',
      },
      {
        type: 'break',
      },
      {
        type: 'github',
        label: 'LD34 Source',
        href: 'https://github.com/jhnsnc/ld34',
      },
      {
        type: 'link',
        label: '(LD37) Play "Laser Command"',
        href: 'http://cjdevsite.com/games/ld34/',
      },
      {
        type: 'break',
      },
      {
        type: 'github',
        label: 'LD32 Source',
        href: 'https://github.com/jhnsnc/ld32',
      },
      {
        type: 'link',
        label: '(LD32) Play "Audio Assault"',
        href: 'http://cjdevsite.com/games/ld32/', // TODO: maybe provide downloadable version? (b/c Flash)
      },
      {
        type: 'break',
      },
      {
        type: 'github',
        label: 'LD30 Source',
        href: 'https://github.com/jhnsnc/ld30',
      },
      {
        type: 'link',
        label: '(LD30) Play "Shadow of a Thought"',
        href: 'http://cjdevsite.com/games/ld30/', // TODO: maybe provide downloadable version? (b/c Flash)
      },
      // TODO: maybe add "Impossible Carrot"?
    ],
  },
  // Experiments
  {
    shortTitle: 'WebGL Experiments',
    title: 'WebGL Shader Experiments on CodePen',
    images: {
      thumbnail: require('../../images/screenshots/shaders-thumb.jpg'), // TODO: update
      full: require('../../images/screenshots/shaders-full.jpg'), // TODO: update
    },
    descriptionChunks: [
      'WebGL is becoming increasingly attractive as a technology for engaging web users in unique ways. As I see more and more sites taking advantage of the technology, I am driven to learn and experiment with it more and more.',
      'Here is a collection of WebGL shader experiments I have created on CodePen in order to explore concepts/techniques and to attempt to recreate interesting effects I see on websites.',
      {
        type: 'warning',
        content:
          '<strong>Note:</strong> These experiments have not been optimized, so they may run somewhat inefficiently, especially on mobile devices.',
      },
    ],
    links: [
      {
        type: 'codepen',
        label: 'Interactive Ripple',
        href: 'https://codepen.io/jhnsnc/details/ExWKzRz',
      },
      {
        type: 'codepen',
        label: 'Active Camo Effect',
        href: 'https://codepen.io/jhnsnc/details/GRRaKxR',
      },
      {
        type: 'codepen',
        label: 'Pastel Rays',
        href: 'https://codepen.io/jhnsnc/details/PmJggb',
      },
      {
        type: 'codepen',
        label: 'Synth Canyon Run',
        href: 'https://codepen.io/jhnsnc/details/GRJeOWZ',
      },
      {
        type: 'codepen',
        label: 'Text Displacement Shader',
        href: 'https://codepen.io/jhnsnc/details/YrpRbe',
      },
      {
        type: 'codepen',
        label: 'Magic Circle of the First Order',
        href: 'https://codepen.io/jhnsnc/details/BxRWBZ',
      },
      {
        type: 'codepen',
        label: 'Gloopy Spheres',
        href: 'https://codepen.io/jhnsnc/details/YQpvNN',
      },
      {
        type: 'codepen',
        label: 'Toon Fire Effect Breakdown',
        href: 'https://codepen.io/jhnsnc/details/bRWwgX',
      },
      {
        type: 'codepen',
        label: 'Heart Beats 💓',
        href: 'https://codepen.io/jhnsnc/details/Kvayyv',
      },
    ],
  },
  {
    shortTitle: 'SVG Experiments',
    title: 'SVG Experiments on CodePen',
    images: {
      thumbnail: require('../../images/screenshots/svg-text-experiments-thumb.jpg'), // TODO: update
      full: require('../../images/screenshots/svg-text-experiments-full.jpg'), // TODO: update
    },
    descriptionChunks: [
      'SVG is an interesting format that can be used to allow for a unique combination of accessibility, technical flexibility, and visual interest.',
      'Here is a selection of CodePen demos involving SVGs, ranging from very simple static visual effects to dynamic animations.',
      "I have a bit of a strange interest in different image formats, including SVG, so I'm always open to a discussion about exploring new ways to put images to use on the Web.",
    ],
    links: [
      {
        type: 'codepen',
        label: 'The Faces of "Animation at Work"',
        href: 'https://codepen.io/jhnsnc/details/XzQOew',
      },
      {
        type: 'codepen',
        label: 'Convergence',
        href: 'https://codepen.io/jhnsnc/details/oomEwW',
      },
      {
        type: 'codepen',
        label: 'Breathing Polygons',
        href: 'https://codepen.io/jhnsnc/details/EwEqvW',
      },
      {
        type: 'codepen',
        label: 'Text Effect - Radius',
        href: 'https://codepen.io/jhnsnc/details/qrazOQ',
      },
      {
        type: 'codepen',
        label: 'Text Effect - Optimist',
        href: 'https://codepen.io/jhnsnc/details/wJWNqB',
      },
      {
        type: 'codepen',
        label: '(SVG+CSS) Squiggly Pattern',
        href: 'https://codepen.io/jhnsnc/details/JbeVBZ',
      },
      {
        type: 'codepen',
        label: 'Text Effect - Mystique',
        href: 'https://codepen.io/jhnsnc/details/Egyjbo',
      },
      {
        type: 'codepen',
        label: 'Smoodge',
        href: 'https://codepen.io/jhnsnc/details/QKEwYe',
      },
      {
        type: 'codepen',
        label: 'Headlander Title Animation',
        href: 'https://codepen.io/jhnsnc/details/JRGoLM',
      },
    ],
  },
  {
    shortTitle: 'Miscellaneous Experiments',
    title: 'Other Experiments on CodePen',
    images: {
      thumbnail: require('../../images/screenshots/headlander-thumb.png'), // TODO: update
      full: require('../../images/screenshots/headlander-full.jpg'), // TODO: update
    },
    descriptionChunks: [
      "Here is a collection of miscellaneous public demos I have created on CodePen over several years. I often use CodePen privately to experiment with ideas or reproduce bugs I'm working on, and sometimes I create a more polished public demo to share a technique or just for fun.",
      'The first few examples here are more practical demos, tools, and technique breakdowns. The last few links are just for fun.',
    ],
    links: [
      {
        type: 'codepen',
        label: 'Coverflow Example (SCSS + light vanilla JS)',
        href: 'https://codepen.io/jhnsnc/details/YyRVNG',
      },
      {
        type: 'codepen',
        label: 'Audio Waveform Visualizer - v2',
        href: 'https://codepen.io/jhnsnc/details/jOwjjGJ',
      },
      {
        type: 'codepen',
        label: 'Live Audio Filter (with Precision Inputs)',
        href: 'https://codepen.io/jhnsnc/details/qVqNaY',
      },
      {
        type: 'codepen',
        label: 'Canvas Drawing - Image Effects',
        href: 'https://codepen.io/jhnsnc/details/wveZmzb',
      },
      {
        type: 'codepen',
        label: 'Calculator: Alpha Color Equivalent (Multi)',
        href: 'https://codepen.io/jhnsnc/details/zYYPbrK',
      },
      {
        type: 'codepen',
        label: 'Incremental Delaunay Triangulation Demo',
        href: 'https://codepen.io/jhnsnc/details/PpPgqL',
      },
      {
        type: 'codepen',
        label: 'Recurve - Easing Functions Demo',
        href: 'https://codepen.io/jhnsnc/details/Egzwjr',
      },
      {
        type: 'codepen',
        label: 'Filter + Blend Modes Demo',
        href: 'https://codepen.io/jhnsnc/details/XmZpZb',
      },
      {
        type: 'codepen',
        label: "Color Separation Deemo (Y'CbCr)",
        href: 'https://codepen.io/jhnsnc/details/EPJyjK',
      },
      {
        type: 'codepen',
        label: 'Animated Text - 🍌Bananas🍌',
        href: 'https://codepen.io/jhnsnc/details/JWZbzb',
      },
      {
        type: 'codepen',
        label: '(SCSS) NecroDancer boss room',
        href: 'https://codepen.io/jhnsnc/details/xReRVr',
      },
    ],
  },
];
