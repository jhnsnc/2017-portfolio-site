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
