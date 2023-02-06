// keeping this around in a separate file for reference, but these entries are unused on the live site at this point
export const portfolioData = [
  // Client work (older)
  {
    shortTitle: 'Missouri Valley FCU',
    title: 'Missouri Valley FCU (for BancVue)',
    images: {
      thumbnail: require('../../images/screenshots/movfcu-thumb.jpg'),
      full: require('../../images/screenshots/movfcu-full.jpg'),
    },
    descriptionChunks: [
      {
        type: 'info',
        content:
          'I built this site several years ago as an employee of BancVue (now Kasasa). The live site has since been redesigned, but the archived version in the link below is the version of the site that I built.',
      },
      'Missouri Valley was a very fast build (about 1.5 weeks instead of the normal 2-3). The design had many transparent elements that were difficult to optimize.',
      'This caused me to start digging into the topic of image optimization. I now consider image compression one of my &ldquo;pet topics&rdquo; and I love reading about new algorithms, formats, and compression techniques.',
    ],
    links: [
      {
        type: 'link',
        label: 'View Archived Site',
        href: 'https://web.archive.org/web/20131126160341/https://www.movfcu.org/',
      },
    ],
  },
  {
    shortTitle: 'War of 1812',
    title: 'War of 1812 (for Thinkport)',
    images: {
      thumbnail: require('../../images/screenshots/war-of-1812-thumb.jpg'),
      full: require('../../images/screenshots/war-of-1812-full.jpg'),
    },
    descriptionChunks: [
      'I was brought in on The War of 1812 website project as a freelance developer. The client was Thinkport (the digital side of Maryland Public Television) and the main contract was through a developer friend of mine. I was responsible for navigation and various interactive modules.',
      'The thing I remember most about this project was the seamless remote collaboration. Amidst changing client demands and across different time zones we were able work effectively together by being very intentional about milestones, check-ins, code reviews, and communication tone/medium.',
      {
        type: 'info',
        content:
          'I was one of two freelance developers on this project. While I had a smaller share of the work, it still represents a significant amount of development work from me.',
      },
    ],
    links: [
      {
        type: 'link',
        label: 'Live Site',
        href: 'http://warof1812.thinkport.org/',
      },
    ],
  },
  {
    shortTitle: 'Saving Smith Island',
    title: 'Saving Smith Island (for Thinkport)',
    images: {
      thumbnail: require('../../images/screenshots/saving-smith-island-thumb.jpg'),
      full: require('../../images/screenshots/saving-smith-island-full.jpg'),
    },
    descriptionChunks: [
      'This was my second project with Thinkport (the digital side of Maryland Public Television) through a fellow freelance developer. The client had very specific requirements for the site regarding the type of activities and device support.',
      'This was before the broad popularization of MVC frameworks like Sproutcore and Dojo (and later, Angular, React, etc). We ended up creating a small custom MVC framework. Working with the concepts directly was an enlightening experience and it has made approaching future frameworks like Angular much easier.',
      {
        type: 'info',
        content:
          'I was one of two freelance developers on this project. While I had a smaller share of the work, it still represents a significant amount of development work from me.',
      },
    ],
    links: [
      {
        type: 'link',
        label: 'Live Site',
        href: 'http://smithisland.thinkport.org/',
      },
    ],
  },
  // Side Projects
  {
    title: 'Haven',
    images: {
      thumbnail: require('../../images/screenshots/haven-thumb.png'),
      full: require('../../images/screenshots/haven-full.jpg'),
    },
    descriptionChunks: [
      'Haven is an simple meditation helper I made as an entry for the 10k Apart contest. The contest prompted participants to create a compelling web experience without requiring JavaScript and with an initial load less than 10 kilobytes.',
      'My goal was to create a simple, aesthetically pleasing site that felt as if it were created without any size limitations at all.',
    ],
    links: [
      {
        type: 'link',
        label: 'Contest Page',
        href: 'https://a-k-apart.com/gallery/Haven',
      },
      {
        type: 'github',
        label: 'View Source',
        href: 'https://github.com/jhnsnc/haven',
      },
    ],
  },
  {
    title: 'GamerEye Trainer',
    images: {
      thumbnail: require('../../images/screenshots/gamereye-trainer-thumb.jpg'),
      full: require('../../images/screenshots/gamereye-trainer-full.jpg'),
    },
    descriptionChunks: [
      'In late 2014, Tobii and Overwolf held a contest for building an Overwolf app utilizing their eye-tracking tools. My entry &ldquo;GamerEye Trainer&rdquo; won second place.',
      'With my app, users designate important screen regions and receive reminders if they have not looked at a region recently. Users simply look at the screen region and the notification disappears. This helps users train themselves on gaming skills like map awareness. The project was a lot of fun to work on since it involved new hardware and designing for capabilities.',
      {
        type: 'warning',
        content:
          '<strong>Note:</strong> This app requires the Tobii EyeX hardware, but there is a video on the contest page that demonstrates the app.',
      },
    ],
    links: [
      {
        type: 'link',
        label: 'Contest Page',
        href: 'http://www.overwolf.com/sentry-challenge-2014/#prize02',
      },
      {
        type: 'github',
        label: 'View Source',
        href: 'https://github.com/jhnsnc/gamereye-trainer',
      },
    ],
  },
  // Game Jam Games
  {
    shortTitle: 'Impulse (LD35)',
    title: 'Impulse (Ludum Dare 35)',
    images: {
      thumbnail: require('../../images/screenshots/ld-35-thumb.png'),
      full: require('../../images/screenshots/ld-35-full.jpg'),
    },
    descriptionChunks: [
      {
        type: 'info',
        content:
          'This game was made for the Ludum Dare 48-hour contest. This means that <u>all</u> design, code, art, music, etc were created by myself within 48 hours.',
      },
      'Leading up to Ludum Dare 35, I had been observing my 3-year-old daughter playing children&rsquo;s games on the iPad. So I knew I wanted to make a game that was something she could enjoy and Impulse was the result. The result was perhaps overly simplistic, but my daughter enjoyed it greatly.',
      {
        type: 'warning',
        content:
          '<strong>Note:</strong> This game requires <strong>a keyboard</strong> to play. You may also wish to <strong>adjust the volume</strong> on your headset before playing.',
      },
    ],
    links: [
      {
        type: 'link',
        label: 'Play Now',
        href: 'http://cjdevsite.com/games/ld35/',
      },
      {
        type: 'github',
        label: 'View Source',
        href: 'https://github.com/jhnsnc/ld35',
      },
    ],
  },
  {
    shortTitle: 'Laser Command (LD34)',
    title: 'Laser Command (Ludum Dare 34)',
    images: {
      thumbnail: require('../../images/screenshots/ld-34-thumb.jpg'),
      full: require('../../images/screenshots/ld-34-full.jpg'),
    },
    descriptionChunks: [
      {
        type: 'info',
        content:
          'This game was made for the Ludum Dare 48-hour contest. This means that <u>all</u> design, code, art, music, etc were created by myself within 48 hours.',
      },
      'My goal with this game jam was to recreate the core appeal of a classic game without directly copying all of its mechanics. Laser Command is my interpretation of the arcade classic Missile Command.',
      'As with Missile Command, Laser Command is about managing finite time/attention and making tough decisions, but the mechanics are more accessible. The charge mechanic with instant release maintains tension but gives the player more immediate feedback. And like predicting trajectory in Missile Command, lining up shots in Laser Command feels great despite the mounting dread from swarming enemies.',
      'I also reduced the defensive turrets to one and added a shield mechanic. This helps with focus and ramps up the complexity similar to the effect of Missile Command&rsquo;s forking projectiles and low-flying planes.',
      {
        type: 'warning',
        content:
          '<strong>Note:</strong> This game requires <strong>a keyboard</strong> to play. You may also wish to <strong>adjust the volume</strong> on your headset before playing.',
      },
    ],
    links: [
      {
        type: 'link',
        label: 'Play Now',
        href: 'http://cjdevsite.com/games/ld34/',
      },
      {
        type: 'github',
        label: 'View Source',
        href: 'https://github.com/jhnsnc/ld34',
      },
    ],
  },
  {
    title: 'Monstrous Mixtures (JS48)',
    images: {
      thumbnail: require('../../images/screenshots/js48-1-thumb.jpg'),
      full: require('../../images/screenshots/js48-1-full.jpg'),
    },
    descriptionChunks: [
      {
        type: 'info',
        content:
          'This game was made for a new game jam called JS48. This game jam had a 48-hour time limit, but permitted the use of outside assets. Most of the images I used were from Oryx Design Lab.',
      },
      'This game jam was a great opportunity for me to both learn a new tool and experiment with different design ideas at the same time. This game was my first exposure to the JavaScript game framework Phaser and my first attempt tuning the numbers on an RPG combat system.',
      'This game was a departure from my normal style, and I spent the majority of my time on research and game design rather than visual assets. Overall I&rsquo;m happy with the result, but I feel that the lack of emphasis on presentation hurt the game since it was not able to clearly communicate the subtleties designed into the mechanics.',
    ],
    links: [
      {
        type: 'link',
        label: 'Play Now',
        href: 'https://docjekyll.itch.io/monstrous-mixtures',
      },
      {
        type: 'github',
        label: 'View Source',
        href: 'https://github.com/jhnsnc/js48-1',
      },
    ],
  },
  {
    shortTitle: 'Audio Assault (LD32)',
    title: 'Audio Assault (Ludum Dare 32)',
    images: {
      thumbnail: require('../../images/screenshots/ld-32-thumb.jpg'),
      full: require('../../images/screenshots/ld-32-full.jpg'),
    },
    descriptionChunks: [
      {
        type: 'info',
        content:
          'This game was made for the Ludum Dare 48-hour contest. This means that <u>all</u> design, code, art, music, etc were created by myself within 48 hours.',
      },
      'For this game jam, I wanted to create an experience with music as an integral part of the design. I ended up creating a simple rhythm game and learning some valuable lessons about game feel and content.',
      'While many of the game elements came together well, I underestimated the amount of work and complexity involved in creating the game content. Creating the note timings took nearly 8 hours instead of the estimated 2.',
      'Seeing the toll this took on overall game feel has changed the way I think about pulling together different types of work. I am now much more purposeful in giving other team members enough lead time and regular updates so they can better understand how things will fit together in the final product.',
      {
        type: 'warning',
        content:
          '<strong>Note:</strong> This game requires <strong>Flash</strong> and <strong>a keyboard</strong> to play. You may also wish to <strong>adjust the volume</strong> on your headset before playing.',
      },
    ],
    links: [
      {
        type: 'link',
        label: 'Play Now',
        href: 'http://cjdevsite.com/games/ld32/',
      },
      {
        type: 'github',
        label: 'View Source',
        href: 'https://github.com/jhnsnc/ld32',
      },
    ],
  },
  {
    shortTitle: 'Shadow of a Thought (LD30)',
    title: 'Shadow of a Thought (Ludum Dare 30)',
    images: {
      thumbnail: require('../../images/screenshots/ld-30-thumb.jpg'),
      full: require('../../images/screenshots/ld-30-full.jpg'),
    },
    descriptionChunks: [
      {
        type: 'info',
        content:
          'This game was made for the Ludum Dare 48-hour contest. This means that <u>all</u> design, code, art, music, etc were created by myself within 48 hours.',
      },
      'This was my first Ludum Dare game jam. It was a great experience that got me hooked on solo game jams, but it was also a tough lesson in scoping.',
      'The initial game design required many times more art and coding. Luckily I was able to scope things down and meet the deadline, but details were left unpolished as a result.',
      {
        type: 'warning',
        content:
          '<strong>Note:</strong> This game requires <strong>Flash</strong> to play. You may also wish to <strong>adjust the volume</strong> on your headset before playing.',
      },
    ],
    links: [
      {
        type: 'link',
        label: 'Play Now',
        href: 'http://cjdevsite.com/games/ld30/',
      },
      {
        type: 'github',
        label: 'View Source',
        href: 'https://github.com/jhnsnc/ld30',
      },
    ],
  },
  // Experiments
  {
    title: 'Coverflow UI',
    images: {
      thumbnail: require('../../images/screenshots/coverflow-thumb.jpg'),
      full: require('../../images/screenshots/coverflow-full.jpg'),
    },
    descriptionChunks: [
      'This is a demo I put together to illustrate how I sometimes like to handle state on HTML components. As long as state transitions do not require complex timing, my approach helps keep the CSS and JS clean and focused.',
      'With this approach, HTML maintains its own state through the use of data- attributes. Then CSS handles the visual transitions between states and JS handles the user inputs in order to trigger state changes.',
    ],
    links: [
      {
        type: 'codepen',
        label: 'View on Codepen',
        href: 'http://codepen.io/jhnsnc/full/YyRVNG',
      },
    ],
  },
  {
    title: 'Image Letterboxing',
    images: {
      thumbnail: require('../../images/screenshots/letterboxing-thumb.jpg'),
      full: require('../../images/screenshots/letterboxing-full.jpg'),
    },
    descriptionChunks: [
      'This is an example of me experimenting with different ways to apply visual patterns. In this case, I noticed how many video services are starting to do letterboxing on portrait-oriented videos and I wanted to see if I could apply it cleanly/tactfully for static images.',
    ],
    links: [
      {
        type: 'codepen',
        label: 'View on Codepen',
        href: 'http://codepen.io/jhnsnc/full/dpVkap',
      },
    ],
  },
  {
    title: 'XSS Vulnerability Demo',
    images: {
      thumbnail: require('../../images/screenshots/xss-demo-thumb.png'),
      full: require('../../images/screenshots/xss-demo-full.png'),
    },
    descriptionChunks: [
      'This is not a pretty demo, but it&rsquo;s an important one. I created this to help address problematic patterns I was seeing on our team that were introducing serious vulnerabilities to the app.',
      'Eventually I took the ideas generated from this quick demo and expanded it into a full discussion about how/when/why to use (or avoid using) jQuery in 2016.',
    ],
    links: [
      {
        type: 'codepen',
        label: 'View on Codepen',
        href: 'http://codepen.io/jhnsnc/pen/xOOXZb?editors=1010',
      },
    ],
  },
];
