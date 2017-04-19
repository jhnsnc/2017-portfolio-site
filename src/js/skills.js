(function showThree() {
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
  #define T (time*7.)

  vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.,2./3.,1./3.,3.);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6. - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0., 1.), c.y);
  }
  vec3 cosPal(float t)
  {
    return clamp(vec3(0.731,1.098,0.192) + vec3(0.358,1.090,0.657)*cos( 2.*PI*(vec3(0.786,0.263,0.239)*t+vec3(1.093,2.393,0.965)) ),0.,1.);
  }
  void main( void ) {
    vec4 texCol = texture2D(texture, vUv);
    vec3 gradColor = cosPal((vUv.x * 0.4) + (vUv.y * 1.2));
    float stripe = pow(sin(vUv.y * 220. - vUv.x * 70.)+0.5*sin(T), 0.2);
    gl_FragColor = mix(
      stripe > 0. ? vec4(gradColor,0.) : vec4(0.07059,0.07451,0.09412,0.0),
      vec4(gradColor * texCol.rgb, texCol.a),
      max(stripe, 0.)
    );
  }`
  };

  function init() {
    console.log('Setup: SKILLS');

    // basic setup
    container = document.getElementById( 'skills' );
    camera = new THREE.Camera();
    camera.position.z = 1;
    scene = new THREE.Scene();
    var geometry = new THREE.PlaneBufferGeometry( 2, 2 );

    // image
    var textureLoader = new THREE.TextureLoader();
    var texture = textureLoader.load('/images/scratch.png');
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

    requestAnimationFrame( animate );
    render(timeSinceLastUpdate);
  }
  function render(timeDelta) {
    uniforms.time.value += (timeDelta ? timeDelta / 1000 : 0.05);
    renderer.render( scene, camera );
  }

  // boot
  init();
  // render(0);
  animate();
})();
