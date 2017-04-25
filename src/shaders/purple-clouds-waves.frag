uniform float iGlobalTime;
uniform vec2 iResolution;

#define PI 3.14159265359
#define T (iGlobalTime/2.0)

#pragma glslify: noise = require("glsl-noise/simplex/3d")

// Sineless hash - Dave Hoskins ( https://www.shadertoy.com/view/4djSRW )
// License: CC BY-SA v4.0 (this function only)
float hash11(float p)
{
  const float HASHSCALE1 = .1031;
  vec3 p3  = fract(vec3(p) * HASHSCALE1);
  p3 += dot(p3, p3.yzx + 19.19);
  return fract((p3.x + p3.y) * p3.z);
}

// fractal clouds
const int octaves = 8;
float fractalNoise(in vec2 coord, in float persistence, in float lacunarity)
{
  float n = 0.0;
  float frequency = 1.0;
  float amplitude = 1.0;
  for (int o = 0; o < octaves; ++o)
  {
    n += amplitude * noise(vec3(coord * frequency, T/3.));
    amplitude *= persistence;
    frequency *= lacunarity;
  }
  return n;
}
vec3 getFractalClouds(in vec2 coord, vec3 color)
{
  float n = fractalNoise(coord * 2., .5, 2.);
  return n * color;
}

// waves
vec3 getWaves(vec2 uv, vec2 offset, vec3 color, float frequency, float amplitude, float thickness, bool up)
{
  float theta = 2.0 * (offset.x + uv.x) - T * frequency;

  float y = sin(theta) * amplitude + offset.y;
  float dy = y - uv.y;

  float n;
  if (up && dy > 0.0 || !up && dy < 0.0) {
    // back side fades out simply, quickly
    n = max(0.0, 1.0 - 15.0 * abs(dy) / thickness); // [0,1]
    n = pow(n, 3.0);
  } else {
    // intended side gets special banding effect
    n = max(0.0, 1.0 - abs(dy) / thickness);
    n = pow(n, 2.5);
    // n = min(1.0, abs(dy) / thickness);
    // n = clamp(3.0 * (cos(4.0 * PI * 1.2 * pow(n,2.5)) + 0.5), 0.0, 1.0);
    // n = n * clamp(3.0 * (cos((1.0-n) * 4.0 * PI) - 0.4), 0.0, 1.0);
  }

  return color * n;
}

void main ()
{
  // TODO: optimize
  // ideas for optimization
  //   - pre-render fractal clouds and blend them
  //   - change scale on waves (make full height) and change height of canvas
  //   - dynamically detect the optimal pixel density
  vec2 uv = gl_FragCoord.xy / iResolution.xy;

  float r1 = hash11(1.234);
  float r2 = hash11(1.337);
  float r3 = hash11(9.001);
  float r4 = hash11(4.321);
  float d = length(uv-vec2(0.5, 0.3) / 0.8602);

  // base gradient
  vec3 color = mix(#550066, #000033, d);

  // fractal clouds
  color += ((1.0-d) * 0.15 + 0.03 + 0.03 * sin(T)) * getFractalClouds(uv + vec2(r1,r2), #8888ff);

  // sine waves
  // top
  color += getWaves(uv, vec2(0.0,0.25), #6c6c6c, 0.14, 0.20, 0.150, false);
  // color += getWaves(uv, vec2(1.0,0.25), #8c6c4c, 0.48, 0.14, 0.150, false);
  color += getWaves(uv, vec2(1.4,0.28), #8c8c4c, 0.54, 0.16, 0.075, false);
  // bot
  color += getWaves(uv, vec2(0.0, 0.08), #4c4cde, 0.17, 0.09, 0.150, true);
  color += getWaves(uv, vec2(0.5, 0.10), #8c6c4c, 0.32, 0.07, 0.150, true);
  // color += getWaves(uv, vec2(0.0, 0.15), #9999aa, 0.69, 0.08, 0.075, true);
  color += getWaves(uv, vec2(0.0, 0.17), #ac8c4c, 0.67, 0.04, 0.300, true);

  gl_FragColor = vec4(color, 1.0);
}
