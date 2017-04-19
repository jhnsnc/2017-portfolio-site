(function showThree() {
  var lastUpdate;
  var container;
  var camera, scene, renderer;
  var uniforms;
  var shaderCode = {
    vertex: `
  void main()  {
    gl_Position = vec4( position, 1.0 );
  }`,
    fragment: `
  uniform float time;
  uniform vec2 resolution;

  #define PI 3.14159265359
  #define T (time/2.)

  vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.,2./3.,1./3.,3.);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6. - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0., 1.), c.y);
  }
  float ease_x(float n) { // normalized Hermite h10
    return n*(1.-n)*(1.-n)*27./4.;
  }
  float nd(float n) { // normal dist (σ=0.01,μ=0.0)
    return exp(-n*n/0.0002)/sqrt(PI*0.0002);
  }
  float ease_y(float n) { // easeOutExpo modified by nd
    float expo = -pow(2., -10. * n) + 1.;
    return expo - 0.04*nd(n);
  }
  void main( void ) {
    vec2 p = ( gl_FragCoord.xy / resolution.xy );
    vec2 f = vec2(fract(T), 0.5);
    float v = 1. - 2.*ease_x(fract(p.x-f.x)) - ease_y(abs(f.y-p.y));
    float flare = 1. - pow(length(p-f)*(p.x < f.x ? 15. : 30.),.5) + 0.002*nd(fract(f.x-p.x)) + 0.01*nd(abs(f.y-p.y));
    gl_FragColor = vec4( mix(hsv2rgb(vec3(p.x-.35, 1., v)),vec3(1.),max(0.,min(1.,flare))), 1.0 );
  }`,
    newVertex: `
  uniform vec2 uvScale;
  varying vec2 vUv;
  void main()
  {
    vUv = uvScale * uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }
  `,
    newFragment: `
  #extension GL_OES_standard_derivatives : enable

  uniform float time;
  uniform vec2 resolution;

  #define PI 3.14159265359
  #define T (time/5.)

  float terrain( float x, float z ) {
    return 0.4 * sin(x) * sin(2.*z+T);
  }
  bool castRay( vec3 ro, vec3 rd, out float resT ) {
    const float mint = 0.001;
    const float maxt = 20.0;
    const float dt = 0.01;
    float lh = 0.0;
    float ly = 0.0;

    for(float t = mint; t < maxt; t += dt)
    {
      vec3 p = ro + rd*t;
      float h = terrain(p.x, p.z);
      if( p.y < h )
      {
        resT = t - dt + dt*(lh-ly) / (p.y - ly - h + lh);
        return true;
      }
      lh = h;
      ly = p.y;
    }
    return false;
  }
  vec3 cosPal(float t)
  {
    return clamp(vec3(0.731,1.098,0.192) + vec3(0.358,1.090,0.657)*cos( 2.*PI*(vec3(0.786,0.263,0.239)*t+vec3(1.093,2.393,0.965)) ),0.,1.);
  }
  vec3 terrainColor(vec3 ro, vec3 rd, float t)
  {
    vec3 p = ro + rd * t;
    vec2 grid = abs(fract(p.xz - 0.5) - 0.5);
    vec2 fw = fwidth(p.xz);
    float line = min(grid.x / fw.x, grid.y / fw.y);
    float glow = pow(length(grid - fw),.5);

    return mix(
      vec3(1.),
      mix(
        vec3(0.),
        cosPal((t-3.)/20.),
        1.-0.5*min(glow, 1.)
      ),
      0.5*line
    );
  }
  vec3 skyColor(float fragY)
  {
    return vec3(0.);
    return mix(vec3(1.,.84314,.25098), vec3(0.,0.,0.), 0.5 + 0.5 * pow(fragY / resolution.y, 2.));
  }
  void main ()
  {
    float aspect = resolution.x / resolution.y;
    const float hfov = 85.0 * 0.5 * PI / 180.;
    const float tanhfov = tan(hfov);

    vec2 uv = gl_FragCoord.xy / resolution.xy * 2. - vec2(1., 1.);
    float dx = tanhfov * uv.x / aspect;
    float dy = tanhfov * uv.y - 0.45;

    vec3 rd = normalize(vec3(dx, dy, 1.));
    const vec3 ro = vec3(0., 7., 0.);
    float resT;

    if (castRay(ro, rd, resT))
    {
      gl_FragColor = vec4(terrainColor(ro,rd,resT), 1.);
    }
    else {
      gl_FragColor = vec4(skyColor(gl_FragCoord.y), 1.);
    }
  }
  `
  };

  function init() {
    console.log('Setup: INTRO');

    // basic setup
    container = document.getElementById( 'intro' );
    camera = new THREE.Camera();
    camera.position.z = 1;
    scene = new THREE.Scene();
    var geometry = new THREE.PlaneBufferGeometry( 2, 2 );

    // shader stuff
    uniforms = {
      time: { type: "f", value: 1.0 },
      resolution: { type: "v2", value: new THREE.Vector2() }
    };
    var material = new THREE.ShaderMaterial( {
      uniforms: uniforms,
      vertexShader: shaderCode.vertex,
      fragmentShader: shaderCode.newFragment
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
  render(0);
  animate();
})();
