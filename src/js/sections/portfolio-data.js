export const portfolioData = [
  // Evernote
  // TODO: bug control / quality?
  {
    // TODO: IME processes?
    shortTitle: 'Evernote IME Support',
    title: 'Evernote IME Support Policies',
    images: {
      thumbnail: require('../../images/screenshots/ld-30-thumb.jpg'),
      full: require('../../images/screenshots/ld-30-full.jpg'),
    },
    descriptionChunks: ['TODO'],
    links: [
      {
        type: 'link',
        label: 'TODO',
        href: 'https://www.evernote.com/',
      },
    ],
  },
  {
    // TODO: Evernote features?
    title: 'Evernote Features',
    images: {
      thumbnail: require('../../images/screenshots/ld-30-thumb.jpg'),
      full: require('../../images/screenshots/ld-30-full.jpg'),
    },
    descriptionChunks: ['TODO'],
    links: [
      {
        type: 'link',
        label: 'TODO',
        href: 'https://www.evernote.com/',
      },
    ],
  },
  {
    // TODO: Evernote internal docs & training
    shortTitle: 'Evernote Docs',
    title: 'Evernote Internal Docs & Training',
    images: {
      thumbnail: require('../../images/screenshots/ld-30-thumb.jpg'),
      full: require('../../images/screenshots/ld-30-full.jpg'),
    },
    descriptionChunks: ['TODO'],
    links: [
      {
        type: 'link',
        label: 'TODO',
        href: 'https://www.evernote.com/',
      },
    ],
  },
  // IBM
  {
    shortTitle: 'Bluemix Maintenance',
    title: 'Bluemix Maintenance Microservice',
    images: {
      thumbnail: require('../../images/screenshots/bluemix-maintenance-thumb.jpg'),
      full: require('../../images/screenshots/bluemix-maintenance-full.jpg'),
    },
    descriptionChunks: [
      'One of my first projects at IBM was creating a new "Maintenance" microservice for Bluemix that could reliably render pages with simple messages such as "down for maintenance", 4xx errors,  5xx errors, etc. Most of the work was writing the Node back-end and integrating it with the existing Bluemix infrastructure.',
      'Reliability was key: this microservice needed to work with the rest of the Bluemix code, but also continue running even in the case of catastrophic failure. I simplified and revised the code, removing all dependencies and features that were not strictly necessary. I then added comprehensive tests to ensure reliable operation in production.',
      'The microservice needed to deliver render pages worldwide as fast as possible and in 10 different languages. The previous solution had used heavy client-side JavaScript to handle translation and external stylesheets for presentation. This meant error messages could be delayed thousands of miliseconds while the multiple round-trip requests completed.',
      "I instead decided to translate the messages server-side, embed all assets and styles in the HTML document, and remove all client-side JavaScript. As a result, the microservice is fast and reliable, without having to compromise on the designers' vision.",
    ],
    links: [
      {
        type: 'link',
        label: '404 Error Page',
        href: 'https://console.ng.bluemix.net/maintenance/404',
      },
      {
        type: 'link',
        label: '500 Error Page',
        href: 'https://console.ng.bluemix.net/maintenance/500',
      },
      {
        type: 'link',
        label: 'Maintenance Page',
        href: 'https://console.ng.bluemix.net/maintenance',
      },
    ],
  },
  {
    shortTitle: 'Bluemix API Docs',
    title: 'Bluemix API Docs Microservice',
    images: {
      thumbnail: require('../../images/screenshots/bluemix-apidocs-thumb.jpg'),
      full: require('../../images/screenshots/bluemix-apidocs-full.jpg'),
    },
    descriptionChunks: [
      "Bluemix API Docs was created to give Bluemix-affiliated service teams a tool for creating and hosting API Documentation. That way the teams wouldn't have to spend time designing, implementing, and maintaining their own documentation if they didn't want to.",
      'The solution began as a simple documentation page based on data definitions in the Open API (fka Swagger) format, because that was a format nearly all service teams were comfortable with. We continued to refine the user experience and add on additional features such as sample code generation, Bluemix-related metadata, endpoint groupings, human-readable comments, etc.',
    ],
    links: [
      {
        type: 'link',
        label: 'API Docs Catalog',
        href: 'https://console.ng.bluemix.net/apidocs',
      },
      {
        type: 'link',
        label: 'Watson Text-to-Speech API Docs',
        href: 'https://console.ng.bluemix.net/apidocs/81-watson-developer-cloud-text-to-speech',
      },
    ],
  },
  // Client Work (older)
  {
    title: 'Destinations CU',
    images: {
      thumbnail: require('../../images/screenshots/destinations-cu-thumb.jpg'),
      full: require('../../images/screenshots/destinations-cu-full.jpg'),
    },
    descriptionChunks: [
      {
        type: 'info',
        content:
          'I built this site several years ago as an employee of BancVue (now Kasasa). I have not been involved with content updates or modifications, but most of the site remains as it was at launch.',
      },
      'The design for Destinations CU had interesting use of color, which varied from section to section. By working with my designer and taking advantage of SCSS, I was able to avoid code duplication without compromising on the designer&rsquo;s vision.',
      'This site also shows some early indications of my focus on motion. Since I finished the primary build with several days to spare, I worked with the designer to identify opportunities to make the site more engaging. Fortunately the client&rsquo;s brand valued playfulness and they welcomed the use of motion.',
    ],
    links: [
      {
        type: 'link',
        label: 'View Archived Site',
        href: 'https://destinationscu.fipreview.com/', // TODO: get archive from wayback machine (maybe https://web.archive.org/web/20140106072719/https://www.destinationscu.org/)
      },
    ],
  },
  // Game Jam Games
  {
    // TODO: probably just make it "Game Jam Games" and include more recent stuff
    shortTitle: 'Ludum Dare Games',
    title: 'Ludum Dare Game Jam Games',
    images: {
      thumbnail: require('../../images/screenshots/ld-35-thumb.png'),
      full: require('../../images/screenshots/ld-30-full.jpg'),
    },
    descriptionChunks: [
      '<a href="https://ldjam.com/" target="_blank">Ludum Dare</a> is one of my favorite events. It is a game jam (similar to a hackathon) where participants create a game from scratch in a short amount of time. Ludum Dare happens once every 4 months, with thousands of new entries each time.',
      'For Ludum Dare, participants create all assets, design, art, code, music, etc for an original game (based on a shared theme) in one weekend. Solo participants have 48 hours and must create all assets from scratch, while group participants have 72 hours and fewer asset restrictions. I usually participate in the solo competition.',
      'I love the Ludum Dare event because I always learn something new. The value in the practice of completing a project--no matter how small the scope--cannot be overstated. I leave each competition feeling creatively rejuvinated, ready to tackle even more ambitious creative and technical challenges.',
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
        label: 'Play LD37 ("Dining Zoom")',
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
        label: 'Play LD35 ("Impulse")',
        href: 'http://cjdevsite.com/games/ld35/',
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
        label: 'Play LD34 ("Laser Command")',
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
        label: 'Play LD32 ("Audio Assault")',
        href: 'http://cjdevsite.com/games/ld32/',
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
        label: 'Play LD30 ("Shadow of a Thought")',
        href: 'http://cjdevsite.com/games/ld30/',
      },
    ],
  },
  // Experiments
  {
    // TODO: probably convert this into a new category of miscellaneous CodePen demos
    shortTitle: 'Headlander Animation Copy',
    title: 'Headlander Animation Recreation',
    images: {
      thumbnail: require('../../images/screenshots/headlander-thumb.png'),
      full: require('../../images/screenshots/headlander-full.jpg'),
    },
    descriptionChunks: [
      'I really enjoyed the bold art style of &ldquo;Headlander&rdquo; (from DoubleFine and Adult Swim Games). I often play around with recreating effects I see in the wild, and this is an example of one that I decided to carry through to a relatively complete state.',
      'On this animation, I wanted to focus on choreographing the overlapping effects and pushing the limits of what I can do with SVG effects.',
      {
        type: 'warning',
        content:
          '<strong>Note:</strong> This animation was implemented for the latest version of Chrome. Some elements might not work as designed in older browsers.',
      },
    ],
    links: [
      {
        type: 'codepen',
        label: 'View on Codepen',
        href: 'http://codepen.io/jhnsnc/full/JRGoLr',
      },
    ],
  },
  {
    // TODO: update with more recent shaders, especially "active camo effect" (https://codepen.io/jhnsnc/pen/GRRaKxR), "interactive ripple" (https://codepen.io/jhnsnc/pen/ExWKzRz), "synth canyon run" (https://codepen.io/jhnsnc/pen/GRJeOWZ), "heart beats" (https://codepen.io/jhnsnc/pen/bGwggNV), "magic circle..." (https://codepen.io/jhnsnc/pen/BxRWBZ)
    shortTitle: 'Shader Experiments',
    title: 'GLSL (WebGL) Shader Experiments',
    images: {
      thumbnail: require('../../images/screenshots/shaders-thumb.jpg'),
      full: require('../../images/screenshots/shaders-full.jpg'),
    },
    descriptionChunks: [
      'WebGL is becoming increasingly attractive as a technology for engaging web users in unique ways. As I see more and more sites taking advantage of the technology, I am driven to learn and experiment with it more and more.',
      'Here is a collection of GLSL shader experiments I have created on CodePen in order to explore concepts/techniques like Perlin noise, raytracing, feedback loops, fractal noise, etc.',
      {
        type: 'warning',
        content:
          '<strong>Note:</strong> These experiments will only work if your browser is enabled for WebGL. Most of them have not been optimized for older graphics cards or mobile devices, so distortion may occur especially as the shader runs over a long time.',
      },
    ],
    links: [
      {
        type: 'codepen',
        label: '"Gloopy Spheres"',
        href: 'https://codepen.io/jhnsnc/pen/YQpvNN',
      },
      {
        type: 'codepen',
        label: '"Playful Pixies"',
        href: 'https://codepen.io/jhnsnc/pen/rwOGrK',
      },
      {
        type: 'codepen',
        label: '"Springy Dots"',
        href: 'https://codepen.io/jhnsnc/pen/PjPGZd',
      },
      {
        type: 'codepen',
        label: '"Pastel Rays"',
        href: 'https://codepen.io/jhnsnc/pen/PmJggb',
      },
      {
        type: 'codepen',
        label: '"Emerald Noise"',
        href: 'https://codepen.io/jhnsnc/pen/pPjqbL',
      },
      {
        type: 'codepen',
        label: '"Sphere Pulse"',
        href: 'https://codepen.io/jhnsnc/pen/BWXpGv',
      },
      {
        type: 'codepen',
        label: '"Rainbow Pulse"',
        href: 'https://codepen.io/jhnsnc/pen/aJeNZX',
      },
      {
        type: 'codepen',
        label: '"Orange Helix"',
        href: 'https://codepen.io/jhnsnc/pen/dXbEoE',
      },
    ],
  },
  {
    // TODO: update this to include more general "SVG" experiments
    title: 'SVG Text Experiments',
    images: {
      thumbnail: require('../../images/screenshots/svg-text-experiments-thumb.jpg'),
      full: require('../../images/screenshots/svg-text-experiments-full.jpg'),
    },
    descriptionChunks: [
      'Over the last few years, I have been using SVG more and more in production at work. Learning accessibility and compatibility tricks, optimizing SVGs by hand, and replacing icon fonts with SVG sprites has made me appreciate the format more.',
      'I began thinking about how one might use SVG in a meaningful way on the web. Eventually I came to the conclusion that fully accessible, visually-engaging text was a potentially great application for SVG.',
      'Here are some of my experiments with the format. Some are more practical than others, but each aims to create a unique effect while remaining fully accessible. No JavaScript is used in these demos&mdash;SVG and CSS only.',
      {
        type: 'warning',
        content:
          '<strong>Note:</strong> Some of these experiments use graphically-intensive effects and may render slowly or cause issues if opened at full-screen on a high-resolution display. Some demos might only work properly in Chrome.',
      },
    ],
    links: [
      {
        type: 'codepen',
        label: '"Breathe"',
        href: 'https://codepen.io/jhnsnc/pen/BWQOJJ',
      },
      {
        type: 'codepen',
        label: '"Radius"',
        href: 'https://codepen.io/jhnsnc/pen/qrazOQ',
      },
      {
        type: 'codepen',
        label: '"Optimist"',
        href: 'https://codepen.io/jhnsnc/pen/wJWNqB',
      },
      {
        type: 'codepen',
        label: '"Mystique"',
        href: 'https://codepen.io/jhnsnc/pen/Egyjbo',
      },
    ],
  },
];
