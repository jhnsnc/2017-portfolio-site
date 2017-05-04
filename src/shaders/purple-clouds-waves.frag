precision mediump float;

uniform highp float iCycleTime;
uniform vec2 iResolution;

#define PI 3.14159265359

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
/*const int octaves = 8;
float fractalNoise(in vec2 coord, in float persistence, in float lacunarity)
{
  float n = 0.0;
  float frequency = 1.0;
  float amplitude = 1.0;
  for (int o = 0; o < octaves; ++o)
  {
    n += amplitude * noise(vec3(coord * frequency, iGlobalTime/6.));
    amplitude *= persistence;
    frequency *= lacunarity;
  }
  return n;
}
vec3 getFractalClouds(in vec2 coord, vec3 color)
{
  float n = fractalNoise(coord * 2., .5, 2.);
  return n * color;
}*/

// waves
vec3 getWaves(vec2 uv, vec2 offset, vec3 color, float frequency, float amplitude, float thickness, bool up)
{
  float theta = 2.0 * (offset.x + uv.x - PI * iCycleTime * frequency);

  float y = sin(theta) * amplitude + offset.y;
  float dy = y - uv.y;
  // dy = abs(dy);

  float n;
  if (up && dy > 0.0 || !up && dy < 0.0) {
    // back side fades out quickly
    dy *= 15.0;
  }
  n = max(0.0, 1.0 - abs(dy) / thickness); // based on distance from sine point and thickness
  n = pow(n, 2.5);

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
  // color += ((1.0-d) * 0.15 + 0.03 + 0.03 * sin(T)) * getFractalClouds(uv + vec2(r1,r2), #8888ff);

  // sine waves
  // blue (top)
  color += getWaves(uv, vec2(0.0,0.27), #6c6c6c, 12.0, 0.18, 0.150, false);
  // blue (bot)
  color += getWaves(uv, vec2(0.0, 0.09), #4c4cde, 12.0, 0.08, 0.150, true);
  // yellow (top)
  color += getWaves(uv, vec2(1.4,0.29), #8c8c4c, 2.0, 0.15, 0.075, false);
  // yellow (bot)
  color += getWaves(uv, vec2(0.0, 0.18), #ac8c4c, 3.0, 0.05, 0.300, true);
  // orange (bot)
  color += getWaves(uv, vec2(0.5, 0.10), #8c6c4c, 6.0, 0.07, 0.150, true);

  gl_FragColor = vec4(color, 1.0);
}
