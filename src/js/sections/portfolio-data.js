export const portfolioData = [
  // IBM
  {
    shortTitle: 'Bluemix Maintenance',
    fullTitle: 'Bluemix Maintenance Microservice',
    images: {
      thumbnail: require('../../images/screenshots/bluemix-maintenance-thumb.jpg'),
      full: require('../../images/screenshots/bluemix-maintenance-full.jpg'),
    },
    tags: [
    ],
    descriptionChunks: [
      {
        type: 'normal',
        content: 'One of my first projects at IBM was creating a new "Maintenance" microservice for Bluemix that could reliably render pages with simple messages such as "down for maintenance", 4xx errors,  5xx errors, etc. Most of the work was writing the Node back-end and integrating it with the existing Bluemix infrastructure.',
      },
      {
        type: 'normal',
        content: 'Reliability was key: this microservice needed to work with the rest of the Bluemix code, but also continue running even in the case of catastrophic failure. I simplified and revised the code, removing all dependencies and features that were not strictly necessary. I then added comprehensive tests to ensure reliable operation in production.',
      },
      {
        type: 'normal',
        content: 'The microservice needed to deliver render pages worldwide as fast as possible and in 10 different languages. The previous solution had used heavy client-side JavaScript to handle translation and external stylesheets for presentation. This meant error messages could be delayed thousands of miliseconds while the multiple round-trip requests completed.',
      },
      {
        type: 'normal',
        content: 'I instead decided to translate the messages server-side, embed all assets and styles in the HTML document, and remove all client-side JavaScript. As a result, the microservice is fast and reliable, without having to compromise on the designers\' vision.',
      },
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
    fullTitle: 'Bluemix API Docs Microservice',
    images: {
      thumbnail: require('../../images/screenshots/bluemix-apidocs-thumb.jpg'),
      full: require('../../images/screenshots/bluemix-apidocs-full.jpg'),
    },
    tags: [
    ],
    descriptionChunks: [
      {
        type: 'normal',
        content: 'Bluemix API Docs was created to give Bluemix-affiliated service teams a tool for creating and hosting API Documentation. That way the teams wouldn\'t have to spend time designing, implementing, and maintaining their own documentation if they didn\'t want to.',
      },
      {
        type: 'normal',
        content: 'The solution began as a simple documentation page based on data definitions in the Open API (fka Swagger) format, because that was a format nearly all service teams were comfortable with. We continued to refine the user experience and add on additional features such as sample code generation, Bluemix-related metadata, endpoint groupings, human-readable comments, etc.',
      },
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
  // Side Projects
  // {
  //   shortTitle: 'Haven',
  //   fullTitle: 'Haven',
  //   images: {
  //     thumbnail: require('../../images/screenshots/haven-thumb.png'),
  //     full: require('../../images/screenshots/haven-full.jpg'),
  //   },
  //   tags: [
  //   ],
  //   descriptionChunks: [
  //     {
  //       type: 'normal',
  //       content: 'Haven is an simple meditation helper I made as an entry for the 10k Apart contest. The contest prompted participants to create a compelling web experience without requiring JavaScript and with an initial load less than 10 kilobytes.',
  //     },
  //     {
  //       type: 'normal',
  //       content: 'My goal was to create a simple, aesthetically pleasing site that felt as if it were created without any size limitations at all.',
  //     },
  //   ],
  //   links: [
  //     {
  //       type: 'link',
  //       label: 'Contest Page',
  //       href: 'https://a-k-apart.com/gallery/Haven',
  //     },
  //     {
  //       type: 'github',
  //       label: 'View Source',
  //       href: 'https://github.com/jhnsnc/haven',
  //     },
  //   ],
  // },
  // {
  //   shortTitle: 'GamerEye Trainer',
  //   fullTitle: 'GamerEye Trainer',
  //   images: {
  //     thumbnail: require('../../images/screenshots/gamereye-trainer-thumb.jpg'),
  //     full: require('../../images/screenshots/gamereye-trainer-full.jpg'),
  //   },
  //   tags: [
  //   ],
  //   descriptionChunks: [
  //     {
  //       type: 'normal',
  //       content: 'In late 2014, Tobii and Overwolf held a contest for building an Overwolf app utilizing their eye-tracking tools. My entry &ldquo;GamerEye Trainer&rdquo; won second place.',
  //     },
  //     {
  //       type: 'normal',
  //       content: 'With my app, users designate important screen regions and receive reminders if they have not looked at a region recently. Users simply look at the screen region and the notification disappears. This helps users train themselves on gaming skills like map awareness. The project was a lot of fun to work on since it involved new hardware and designing for capabilities.',
  //     },
  //     {
  //       type: 'warning',
  //       content: '<strong>Note:</strong> This app requires the Tobii EyeX hardware, but there is a video on the contest page that demonstrates the app.',
  //     },
  //   ],
  //   links: [
  //     {
  //       type: 'link',
  //       label: 'Contest Page',
  //       href: 'http://www.overwolf.com/sentry-challenge-2014/#prize02',
  //     },
  //     {
  //       type: 'github',
  //       label: 'View Source',
  //       href: 'https://github.com/jhnsnc/gamereye-trainer',
  //     },
  //   ],
  // },
  // Client Work (older)
  {
    shortTitle: 'Destinations CU',
    fullTitle: 'Destinations CU <span>(for BancVue)</span>',
    images: {
      thumbnail: require('../../images/screenshots/destinations-cu-thumb.jpg'),
      full: require('../../images/screenshots/destinations-cu-full.jpg'),
    },
    tags: [
    ],
    descriptionChunks: [
      {
        type: 'info',
        content: 'I built this site several years ago as an employee of BancVue (now Kasasa). I have not been involved with content updates or modifications, but most of the site remains as it was at launch.',
      },
      {
        type: 'normal',
        content: 'The design for Destinations CU had interesting use of color, which varied from section to section. By working with my designer and taking advantage of SCSS, I was able to avoid code duplication without compromising on the designer&rsquo;s vision.',
      },
      {
        type: 'normal',
        content: 'This site also shows some early indications of my focus on motion. Since I finished the primary build with several days to spare, I worked with the designer to identify opportunities to make the site more engaging. Fortunately the client&rsquo;s brand valued playfulness and they welcomed the use of motion.',
      },
    ],
    links: [
      {
        type: 'link',
        label: 'View Archived Site',
        href: 'https://destinationscu.fipreview.com/',
      },
    ],
  },
  {
    shortTitle: 'Missouri Valley FCU',
    fullTitle: 'Missouri Valley FCU <span>(for BancVue)</span>',
    images: {
      thumbnail: require('../../images/screenshots/movfcu-thumb.jpg'),
      full: require('../../images/screenshots/movfcu-full.jpg'),
    },
    tags: [
    ],
    descriptionChunks: [
      {
        type: 'info',
        content: 'I built this site several years ago as an employee of BancVue (now Kasasa). The live site has since been redesigned, but the archived version in the link below is the version of the site that I built.',
      },
      {
        type: 'normal',
        content: 'Missouri Valley was a very fast build (about 1.5 weeks instead of the normal 2-3). The design had many transparent elements that were difficult to optimize.',
      },
      {
        type: 'normal',
        content: 'This caused me to start digging into the topic of image optimization. I now consider image compression one of my &ldquo;pet topics&rdquo; and I love reading about new algorithms, formats, and compression techniques.',
      },
    ],
    links: [
      {
        type: 'link',
        label: 'View Archived Site',
        href: 'https://movfcu.fipreview.com/',
      },
    ],
  },
  // {
  //   shortTitle: 'War of 1812',
  //   fullTitle: 'War of 1812 <span>(for Thinkport)</span>',
  //   images: {
  //     thumbnail: require('../../images/screenshots/war-of-1812-thumb.jpg'),
  //     full: require('../../images/screenshots/war-of-1812-full.jpg'),
  //   },
  //   tags: [
  //   ],
  //   descriptionChunks: [
  //     {
  //       type: 'normal',
  //       content: 'I was brought in on The War of 1812 website project as a freelance developer. The client was Thinkport (the digital side of Maryland Public Television) and the main contract was through a developer friend of mine. I was responsible for navigation and various interactive modules.',
  //     },
  //     {
  //       type: 'normal',
  //       content: 'The thing I remember most about this project was the seamless remote collaboration. Amidst changing client demands and across different time zones we were able work effectively together by being very intentional about milestones, check-ins, code reviews, and communication tone/medium.',
  //     },
  //     {
  //       type: 'info',
  //       content: 'I was one of two freelance developers on this project. While I had a smaller share of the work, it still represents a significant amount of development work from me.',
  //     },
  //   ],
  //   links: [
  //     {
  //       type: 'link',
  //       label: 'Live Site',
  //       href: 'http://warof1812.thinkport.org/',
  //     },
  //   ],
  // },
  {
    shortTitle: 'Saving Smith Island',
    fullTitle: 'Saving Smith Island <span>(for Thinkport)</span>',
    images: {
      thumbnail: require('../../images/screenshots/saving-smith-island-thumb.jpg'),
      full: require('../../images/screenshots/saving-smith-island-full.jpg'),
    },
    tags: [
    ],
    descriptionChunks: [
      {
        type: 'normal',
        content: 'This was my second project with Thinkport (the digital side of Maryland Public Television) through a fellow freelance developer. The client had very specific requirements for the site regarding the type of activities and device support.',
      },
      {
        type: 'normal',
        content: 'This was before the broad popularization of MVC frameworks like Sproutcore and Dojo (and later, Angular, React, etc). We ended up creating a small custom MVC framework. Working with the concepts directly was an enlightening experience and it has made approaching future frameworks like Angular much easier.',
      },
      {
        type: 'info',
        content: 'I was one of two freelance developers on this project. While I had a smaller share of the work, it still represents a significant amount of development work from me.',
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
  // Game Jam Games
  // {
  //   shortTitle: 'Impulse (LD35)',
  //   fullTitle: 'Impulse <span>(Ludum Dare 35)</span>',
  //   images: {
  //     thumbnail: require('../../images/screenshots/ld-35-thumb.png'),
  //     full: require('../../images/screenshots/ld-35-full.jpg'),
  //   },
  //   tags: [
  //   ],
  //   descriptionChunks: [
  //     {
  //       type: 'info',
  //       content: 'This game was made for the Ludum Dare 48-hour contest. This means that <u>all</u> design, code, art, music, etc were created by myself within 48 hours.',
  //     },
  //     {
  //       type: 'normal',
  //       content: 'Leading up to Ludum Dare 35, I had been observing my 3-year-old daughter playing children&rsquo;s games on the iPad. So I knew I wanted to make a game that was something she could enjoy and Impulse was the result. The result was perhaps overly simplistic, but my daughter enjoyed it greatly.',
  //     },
  //     {
  //       type: 'warning',
  //       content: '<strong>Note:</strong> This game requires <strong>a keyboard</strong> to play. You may also wish to <strong>adjust the volume</strong> on your headset before playing.',
  //     },
  //   ],
  //   links: [
  //     {
  //       type: 'link',
  //       label: 'Play Now',
  //       href: 'http://cjdevsite.com/games/ld35/',
  //     },
  //     {
  //       type: 'github',
  //       label: 'View Source',
  //       href: 'https://github.com/jhnsnc/ld35',
  //     },
  //   ],
  // },
  // {
  //   shortTitle: 'Laser Command (LD34)',
  //   fullTitle: 'Laser Command <span>(Ludum Dare 34)</span>',
  //   images: {
  //     thumbnail: require('../../images/screenshots/ld-34-thumb.jpg'),
  //     full: require('../../images/screenshots/ld-34-full.jpg'),
  //   },
  //   tags: [
  //   ],
  //   descriptionChunks: [
  //     {
  //       type: 'info',
  //       content: 'This game was made for the Ludum Dare 48-hour contest. This means that <u>all</u> design, code, art, music, etc were created by myself within 48 hours.',
  //     },
  //     {
  //       type: 'normal',
  //       content: 'My goal with this game jam was to recreate the core appeal of a classic game without directly copying all of its mechanics. Laser Command is my interpretation of the arcade classic Missile Command.',
  //     },
  //     {
  //       type: 'normal',
  //       content: 'As with Missile Command, Laser Command is about managing finite time/attention and making tough decisions, but the mechanics are more accessible. The charge mechanic with instant release maintains tension but gives the player more immediate feedback. And like predicting trajectory in Missile Command, lining up shots in Laser Command feels great despite the mounting dread from swarming enemies.',
  //     },
  //     {
  //       type: 'normal',
  //       content: 'I also reduced the defensive turrets to one and added a shield mechanic. This helps with focus and ramps up the complexity similar to the effect of Missile Command&rsquo;s forking projectiles and low-flying planes.',
  //     },
  //     {
  //       type: 'warning',
  //       content: '<strong>Note:</strong> This game requires <strong>a keyboard</strong> to play. You may also wish to <strong>adjust the volume</strong> on your headset before playing.',
  //     },
  //   ],
  //   links: [
  //     {
  //       type: 'link',
  //       label: 'Play Now',
  //       href: 'http://cjdevsite.com/games/ld34/',
  //     },
  //     {
  //       type: 'github',
  //       label: 'View Source',
  //       href: 'https://github.com/jhnsnc/ld34',
  //     },
  //   ],
  // },
  // {
  //   shortTitle: 'Monstrous Mixtures (JS48)',
  //   fullTitle: 'Monstrous Mixtures <span>(JS48)</span>',
  //   images: {
  //     thumbnail: require('../../images/screenshots/js48-1-thumb.jpg'),
  //     full: require('../../images/screenshots/js48-1-full.jpg'),
  //   },
  //   tags: [
  //   ],
  //   descriptionChunks: [
  //     {
  //       type: 'info',
  //       content: 'This game was made for a new game jam called JS48. This game jam had a 48-hour time limit, but permitted the use of outside assets. Most of the images I used were from Oryx Design Lab.',
  //     },
  //     {
  //       type: 'normal',
  //       content: 'This game jam was a great opportunity for me to both learn a new tool and experiment with different design ideas at the same time. This game was my first exposure to the JavaScript game framework Phaser and my first attempt tuning the numbers on an RPG combat system.',
  //     },
  //     {
  //       type: 'normal',
  //       content: 'This game was a departure from my normal style, and I spent the majority of my time on research and game design rather than visual assets. Overall I&rsquo;m happy with the result, but I feel that the lack of emphasis on presentation hurt the game since it was not able to clearly communicate the subtleties designed into the mechanics.',
  //     },
  //   ],
  //   links: [
  //     {
  //       type: 'link',
  //       label: 'Play Now',
  //       href: 'https://docjekyll.itch.io/monstrous-mixtures',
  //     },
  //     {
  //       type: 'github',
  //       label: 'View Source',
  //       href: 'https://github.com/jhnsnc/js48-1',
  //     },
  //   ],
  // },
  // {
  //   shortTitle: 'Audio Assault (LD32)',
  //   fullTitle: 'Audio Assault <span>(Ludum Dare 32)</span>',
  //   images: {
  //     thumbnail: require('../../images/screenshots/ld-32-thumb.jpg'),
  //     full: require('../../images/screenshots/ld-32-full.jpg'),
  //   },
  //   tags: [
  //   ],
  //   descriptionChunks: [
  //     {
  //       type: 'info',
  //       content: 'This game was made for the Ludum Dare 48-hour contest. This means that <u>all</u> design, code, art, music, etc were created by myself within 48 hours.',
  //     },
  //     {
  //       type: 'normal',
  //       content: 'For this game jam, I wanted to create an experience with music as an integral part of the design. I ended up creating a simple rhythm game and learning some valuable lessons about game feel and content.',
  //     },
  //     {
  //       type: 'normal',
  //       content: 'While many of the game elements came together well, I underestimated the amount of work and complexity involved in creating the game content. Creating the note timings took nearly 8 hours instead of the estimated 2.',
  //     },
  //     {
  //       type: 'normal',
  //       content: 'Seeing the toll this took on overall game feel has changed the way I think about pulling together different types of work. I am now much more purposeful in giving other team members enough lead time and regular updates so they can better understand how things will fit together in the final product.',
  //     },
  //     {
  //       type: 'warning',
  //       content: '<strong>Note:</strong> This game requires <strong>Flash</strong> and <strong>a keyboard</strong> to play. You may also wish to <strong>adjust the volume</strong> on your headset before playing.',
  //     },
  //   ],
  //   links: [
  //     {
  //       type: 'link',
  //       label: 'Play Now',
  //       href: 'http://cjdevsite.com/games/ld32/',
  //     },
  //     {
  //       type: 'github',
  //       label: 'View Source',
  //       href: 'https://github.com/jhnsnc/ld32',
  //     },
  //   ],
  // },
  // {
  //   shortTitle: 'Shadow of a Thought (LD30)',
  //   fullTitle: 'Shadow of a Thought <span>(Ludum Dare 30)</span>',
  //   images: {
  //     thumbnail: require('../../images/screenshots/ld-30-thumb.jpg'),
  //     full: require('../../images/screenshots/ld-30-full.jpg'),
  //   },
  //   tags: [
  //   ],
  //   descriptionChunks: [
  //     {
  //       type: 'info',
  //       content: 'This game was made for the Ludum Dare 48-hour contest. This means that <u>all</u> design, code, art, music, etc were created by myself within 48 hours.',
  //     },
  //     {
  //       type: 'normal',
  //       content: 'This was my first Ludum Dare game jam. It was a great experience that got me hooked on solo game jams, but it was also a tough lesson in scoping.',
  //     },
  //     {
  //       type: 'normal',
  //       content: 'The initial game design required many times more art and coding. Luckily I was able to scope things down and meet the deadline, but details were left unpolished as a result.',
  //     },
  //     {
  //       type: 'warning',
  //       content: '<strong>Note:</strong> This game requires <strong>Flash</strong> to play. You may also wish to <strong>adjust the volume</strong> on your headset before playing.',
  //     },
  //   ],
  //   links: [
  //     {
  //       type: 'link',
  //       label: 'Play Now',
  //       href: 'http://cjdevsite.com/games/ld30/',
  //     },
  //     {
  //       type: 'github',
  //       label: 'View Source',
  //       href: 'https://github.com/jhnsnc/ld30',
  //     },
  //   ],
  // },
  {
    shortTitle: 'Ludum Dare Games',
    fullTitle: 'Ludum Dare Game Jam Games',
    images: {
      thumbnail: require('../../images/screenshots/ld-35-thumb.png'),
      full: require('../../images/screenshots/ld-30-full.jpg'),
    },
    tags: [
    ],
    descriptionChunks: [
      {
        type: 'normal',
        content: '<a href=\"https://ldjam.com/\" target=\"_blank\">Ludum Dare</a> is one of my favorite events. It is a game jam (similar to a hackathon) where participants create a game from scratch in a short amount of time. Ludum Dare happens once every 4 months, with thousands of new entries each time.',
      },
      {
        type: 'normal',
        content: 'For Ludum Dare, participants create all assets, design, art, code, music, etc for an original game (based on a shared theme) in one weekend. Solo participants have 48 hours and must create all assets from scratch, while group participants have 72 hours and fewer asset restrictions. I usually participate in the solo competition.',
      },
      {
        type: 'normal',
        content: 'I love the Ludum Dare event because I always learn something new. The value in the practice of completing a project--no matter how small the scope--cannot be overstated. I leave each competition feeling creatively rejuvinated, ready to tackle even more ambitious creative and technical challenges.',
      },
      {
        type: 'warning',
        content: '<strong>Note:</strong> All of these games have music, so you may wish to <strong>adjust the volume</strong> on your computer before playing. You will need a <strong>keyboard</strong> in order to play most of these games. Additionally, the games from LD30 and LD32 also require <strong>Flash</strong> to play.',
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
        label: 'Play LD37 (\"Dining Zoom\")',
        href: 'http://cjdevsite.com/games/ld37/',
      },
      {
        type: 'github',
        label: 'LD35 Source',
        breakBefore: true,
        href: 'https://github.com/jhnsnc/ld35',
      },
      {
        type: 'link',
        label: 'Play LD35 (\"Impulse\")',
        href: 'http://cjdevsite.com/games/ld35/',
      },
      {
        type: 'github',
        label: 'LD34 Source',
        breakBefore: true,
        href: 'https://github.com/jhnsnc/ld34',
      },
      {
        type: 'link',
        label: 'Play LD34 (\"Laser Command\")',
        href: 'http://cjdevsite.com/games/ld34/',
      },
      {
        type: 'github',
        label: 'LD32 Source',
        breakBefore: true,
        href: 'https://github.com/jhnsnc/ld32',
      },
      {
        type: 'link',
        label: 'Play LD32 (\"Audio Assault\")',
        href: 'http://cjdevsite.com/games/ld32/',
      },
      {
        type: 'github',
        label: 'LD30 Source',
        breakBefore: true,
        href: 'https://github.com/jhnsnc/ld30',
      },
      {
        type: 'link',
        label: 'Play LD30 (\"Shadow of a Thought\")',
        href: 'http://cjdevsite.com/games/ld30/',
      },
    ],
  },
  // Experiments
  {
    shortTitle: 'Headlander Animation Copy',
    fullTitle: 'Headlander Animation Recreation',
    images: {
      thumbnail: require('../../images/screenshots/headlander-thumb.png'),
      full: require('../../images/screenshots/headlander-full.jpg'),
    },
    tags: [
    ],
    descriptionChunks: [
      {
        type: 'normal',
        content: 'I really enjoyed the bold art style of &ldquo;Headlander&rdquo; (from DoubleFine and Adult Swim Games). I often play around with recreating effects I see in the wild, and this is an example of one that I decided to carry through to a relatively complete state.',
      },
      {
        type: 'normal',
        content: 'On this animation, I wanted to focus on choreographing the overlapping effects and pushing the limits of what I can do with SVG effects.',
      },
      {
        type: 'warning',
        content: '<strong>Note:</strong> This animation was implemented for the latest version of Chrome. Some elements might not work as designed in older browsers.',
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
  // {
  //   shortTitle: 'Coverflow UI',
  //   fullTitle: 'Coverflow UI',
  //   images: {
  //     thumbnail: require('../../images/screenshots/coverflow-thumb.jpg'),
  //     full: require('../../images/screenshots/coverflow-full.jpg'),
  //   },
  //   tags: [
  //   ],
  //   descriptionChunks: [
  //     {
  //       type: 'normal',
  //       content: 'This is a demo I put together to illustrate how I sometimes like to handle state on HTML components. As long as state transitions do not require complex timing, my approach helps keep the CSS and JS clean and focused.',
  //     },
  //     {
  //       type: 'normal',
  //       content: 'With this approach, HTML maintains its own state through the use of data- attributes. Then CSS handles the visual transitions between states and JS handles the user inputs in order to trigger state changes.',
  //     },
  //   ],
  //   links: [
  //     {
  //       type: 'codepen',
  //       label: 'View on Codepen',
  //       href: 'http://codepen.io/jhnsnc/full/YyRVNG',
  //     },
  //   ],
  // },
  // {
  //   shortTitle: 'Image Letterboxing',
  //   fullTitle: 'Image Letterboxing',
  //   images: {
  //     thumbnail: require('../../images/screenshots/letterboxing-thumb.jpg'),
  //     full: require('../../images/screenshots/letterboxing-full.jpg'),
  //   },
  //   tags: [
  //   ],
  //   descriptionChunks: [
  //     {
  //       type: 'normal',
  //       content: 'This is an example of me experimenting with different ways to apply visual patterns. In this case, I noticed how many video services are starting to do letterboxing on portrait-oriented videos and I wanted to see if I could apply it cleanly/tactfully for static images.',
  //     },
  //   ],
  //   links: [
  //     {
  //       type: 'codepen',
  //       label: 'View on Codepen',
  //       href: 'http://codepen.io/jhnsnc/full/dpVkap',
  //     },
  //   ],
  // },
  // {
  //   shortTitle: 'XSS Vulnerability Demo',
  //   fullTitle: 'XSS Vulnerability Demo',
  //   images: {
  //     thumbnail: require('../../images/screenshots/xss-demo-thumb.png'),
  //     full: require('../../images/screenshots/xss-demo-full.png'),
  //   },
  //   tags: [
  //   ],
  //   descriptionChunks: [
  //     {
  //       type: 'normal',
  //       content: 'This is not a pretty demo, but it&rsquo;s an important one. I created this to help address problematic patterns I was seeing on our team that were introducing serious vulnerabilities to the app.',
  //     },
  //     {
  //       type: 'normal',
  //       content: 'Eventually I took the ideas generated from this quick demo and expanded it into a full discussion about how/when/why to use (or avoid using) jQuery in 2016.',
  //     },
  //   ],
  //   links: [
  //     {
  //       type: 'codepen',
  //       label: 'View on Codepen',
  //       href: 'http://codepen.io/jhnsnc/pen/xOOXZb?editors=1010',
  //     },
  //   ],
  // },
  {
    shortTitle: 'Shader Experiments',
    fullTitle: 'GLSL (WebGL) Shader Experiments',
    images: {
      thumbnail: require('../../images/screenshots/shaders-thumb.jpg'),
      full: require('../../images/screenshots/shaders-full.jpg'),
    },
    tags: [
    ],
    descriptionChunks: [
      {
        type: 'normal',
        content: 'WebGL is becoming increasingly attractive as a technology for engaging web users in unique ways. As I see more and more sites taking advantage of the technology, I am driven to learn and experiment with it more and more.',
      },
      {
        type: 'normal',
        content: 'Here is a collection of GLSL shader experiments I have created on CodePen in order to explore concepts/techniques like Perlin noise, raytracing, feedback loops, fractal noise, etc.',
      },
      {
        type: 'warning',
        content: '<strong>Note:</strong> These experiments will only work if your browser is enabled for WebGL. Most of them have not been optimized for older graphics cards or mobile devices, so distortion may occur especially as the shader runs over a long time.',
      },
    ],
    links: [
      {
        type: 'codepen',
        label: '\"Gloopy Spheres\"',
        href: 'https://codepen.io/jhnsnc/pen/YQpvNN',
      },
      {
        type: 'codepen',
        label: '\"Playful Pixies\"',
        href: 'https://codepen.io/jhnsnc/pen/rwOGrK',
      },
      {
        type: 'codepen',
        label: '\"Springy Dots\"',
        href: 'https://codepen.io/jhnsnc/pen/PjPGZd',
      },
      {
        type: 'codepen',
        label: '\"Pastel Rays\"',
        href: 'https://codepen.io/jhnsnc/pen/PmJggb',
      },
      {
        type: 'codepen',
        label: '\"Emerald Noise\"',
        href: 'https://codepen.io/jhnsnc/pen/pPjqbL',
      },
      {
        type: 'codepen',
        label: '\"Sphere Pulse\"',
        href: 'https://codepen.io/jhnsnc/pen/BWXpGv',
      },
      {
        type: 'codepen',
        label: '\"Rainbow Pulse\"',
        href: 'https://codepen.io/jhnsnc/pen/aJeNZX',
      },
      {
        type: 'codepen',
        label: '\"Orange Helix\"',
        href: 'https://codepen.io/jhnsnc/pen/dXbEoE',
      },
    ],
  },
  {
    shortTitle: 'SVG Text Experiments',
    fullTitle: 'SVG Text Experiments',
    images: {
      thumbnail: require('../../images/screenshots/svg-text-experiments-thumb.jpg'),
      full: require('../../images/screenshots/svg-text-experiments-full.jpg'),
    },
    tags: [
    ],
    descriptionChunks: [
      {
        type: 'normal',
        content: 'Over the last few years, I have been using SVG more and more in production at work. Learning accessibility and compatibility tricks, optimizing SVGs by hand, and replacing icon fonts with SVG sprites has made me appreciate the format more.',
      },
      {
        type: 'normal',
        content: 'I began thinking about how one might use SVG in a meaningful way on the web. Eventually I came to the conclusion that fully accessible, visually-engaging text was a potentially great application for SVG.'
      },
      {
        type: 'normal',
        content: 'Here are some of my experiments with the format. Some are more practical than others, but each aims to create a unique effect while remaining fully accessible. No JavaScript is used in these demos&mdash;SVG and CSS only.',
      },
      {
        type: 'warning',
        content: '<strong>Note:</strong> Some of these experiments use graphically-intensive effects and may render slowly or cause issues if opened at full-screen on a high-resolution display. Some demos might only work properly in Chrome.',
      },
    ],
    links: [
      {
        type: 'codepen',
        label: '\"Breathe\"',
        href: 'https://codepen.io/jhnsnc/pen/BWQOJJ',
      },
      {
        type: 'codepen',
        label: '\"Radius\"',
        href: 'https://codepen.io/jhnsnc/pen/qrazOQ',
      },
      {
        type: 'codepen',
        label: '\"Optimist\"',
        href: 'https://codepen.io/jhnsnc/pen/wJWNqB',
      },
      {
        type: 'codepen',
        label: '\"Mystique\"',
        href: 'https://codepen.io/jhnsnc/pen/Egyjbo',
      },
    ],
  },
];
