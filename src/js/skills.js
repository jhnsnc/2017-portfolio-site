(function showThree() {
  var isPaused;
  var lastUpdate;
  var container;
  var camera, scene, renderer;
  var uniforms;
  var shaderCode = {
    vertex: `
  varying vec2 vUv;
  void main()
  {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }`,
    fragment: `
  uniform float time;
  uniform vec2 resolution;

  uniform sampler2D texture;

  varying vec2 vUv;

  #define PI 3.14159265359
  #define T (time*0.5)

  // Sineless hash - Dave Hoskins ( https://www.shadertoy.com/view/4djSRW )
  // License: CC BY-SA v4.0 (this function only)
  float hash11(float p)
  {
    const float HASHSCALE1 = .1031;
    vec3 p3  = fract(vec3(p) * HASHSCALE1);
    p3 += dot(p3, p3.yzx + 19.19);
    return fract((p3.x + p3.y) * p3.z);
  }
  vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.,2./3.,1./3.,3.);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6. - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0., 1.), c.y);
  }
  vec3 cosPal(float t)
  {
    return clamp(vec3(0.731,1.098,0.192) + vec3(0.358,1.090,0.657)*cos( 2.*PI*(vec3(0.786,0.263,0.239)*t+vec3(1.093,2.393,0.965)) ),0.,1.);
  }
  void calcPattern(out float value, out vec3 color, vec2 p, float t, float overlayOffset) {
    value = 0.0;
    color = vec3(0.0);
    // repeat for each octave
    for (float o = 1.0; o <= 8.0; o += 1.) {
      float r = hash11(1.234 * o);
      float expo = pow(2.5,o);
      float phaseOffset = r * PI;
      float phaseSpeed = 0.5 + (o * 0.25) * (0.5 + r);
      float amplitude = 1.5 / expo; // sum[1,8] of 1/2.5^x ~= .66, so mult by 1.5
      float contribution = sin( phaseOffset + 0.5 * expo * ( phaseSpeed * (t + (o*0.15 + 0.4*overlayOffset)*sin(t+2.*PI*r)) + (-6.5 * p.x + 8.0 * p.y) ) );

      value += amplitude * (contribution);
    }
    value = 0.5 + 0.5 * value; // normalize sine range
    color = cosPal(value); // color = vec3(1.);
  }

  void main( void ) {
    vec2 texCoord = vec2(gl_FragCoord.x / resolution.y * 800. / 534., gl_FragCoord.y / resolution.y);
    vec4 texCol = (texCoord.x <= 1. && texCoord.y <= 1.) ? texture2D(texture, texCoord) : vec4(0.);

    // vec3 gradColor = cosPal((vUv.x * 0.4) + (vUv.y * 1.2));

    float value;
    vec3 gradColor;
    calcPattern(value, gradColor, vUv, T, texCol.a);

    float circFade = length(vUv - vec2(0.35, 0.5)) * 1.75;
    circFade = max(0.0, 1.0 - (circFade * circFade));

    gl_FragColor = vec4(
      mix( (0.5 * value - 0.1) * gradColor * circFade, (1.5 * value + 0.5) * gradColor * texCol.rgb, texCol.a)
    , 1.);

    // if (vUv.x < 0.5) {
    //   gl_FragColor = vec4( vec3( 0.25 * getPattern(vec2(vUv.x*2.,vUv.y), T) + 0.5 ), 1. );
    // } else {
    //   float y = getPattern( vec2(vUv.x*2. - 1., 0.5), T);
    //   float sy = (0.25 * y + 3.) / 6.0;
    //   float d = 1.0 - pow(1.0 - distance(vUv.y, sy), 500.);
    //   gl_FragColor = vec4(vec3(d), 1.);
    // }
  }`
  };

  function init() {
    console.log('Setup: SKILLS');

    isPaused = true; // PAUSE

    // basic setup
    container = document.getElementById( 'skills' );
    camera = new THREE.Camera();
    camera.position.z = 1;
    scene = new THREE.Scene();
    var geometry = new THREE.PlaneBufferGeometry( 2, 2 );

    // image
    var textureLoader = new THREE.TextureLoader();
    var texture = textureLoader.load('/images/scratch2.png');
    texture.magFilter = THREE.NearestFilter;

    // shader stuff
    uniforms = {
      time: { type: "f", value: 1.0 },
      resolution: { type: "v2", value: new THREE.Vector2() },
      texture: { type: 't', value: texture }
    };
    var material = new THREE.ShaderMaterial( {
      uniforms: uniforms,
      vertexShader: shaderCode.vertex,
      fragmentShader: shaderCode.fragment,
      transparent: true
    } );
    lastUpdate = new Date().getTime();

    // put it together for rendering
    var mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.domElement.classList.add('webgl-render-canvas');
    container.appendChild( renderer.domElement );

    // event listeners
    onResize();
    window.addEventListener( 'resize', onResize, false);
    container.addEventListener('click', togglePause); // PAUSE
  }

  // events
  function onResize(evt) {
    renderer.setSize( container.getBoundingClientRect().width, container.getBoundingClientRect().height );
    uniforms.resolution.value.x = renderer.domElement.width;
    uniforms.resolution.value.y = renderer.domElement.height;
  }
  function animate() {
    var currentTime = new Date().getTime()
    var timeSinceLastUpdate = currentTime - lastUpdate;
    lastUpdate = currentTime;

    if (!isPaused) { // PAUSE
      requestAnimationFrame( animate );
    }
    render(timeSinceLastUpdate);
  }
  function render(timeDelta) {
    uniforms.time.value += (timeDelta ? timeDelta / 1000 : 0.05);
    renderer.render( scene, camera );
  }
  function togglePause() { // PAUSE
    if (isPaused) {
      isPaused = false;
      lastUpdate = new Date().getTime();
      animate();
    } else {
      isPaused = true;
    }
  }

  // boot
  init();
  animate();
})();
