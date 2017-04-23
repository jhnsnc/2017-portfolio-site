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
vec3 getFractalClouds(in vec2 coord, vec3 color, float transparency)
{
  float n = fractalNoise(coord * 2., .5, 2.);
  return n * transparency * color;
}

// waves
vec3 getWaves(vec2 uv, vec2 offset, vec3 color, float frequency, float amplitude, float width, float exponent, bool up)
{
  float theta = 2.0 * (offset.x + uv.x) - T * frequency;

  float y = sin(theta) * amplitude + offset.y;
  float clampY = clamp(0.0, y, y);
  float diffY = y - uv.y;

  float dsqr = distance(y, uv.y);
  dsqr *= (up && diffY > 0.0 || !up && diffY < 0.0) ? 4.0 : 1.0;

  float intensity = pow(smoothstep(width, 0.0, dsqr), exponent);

  return color * min(intensity, 1.0);
}

void main ()
{
  vec2 uv = gl_FragCoord.xy / iResolution.xy;

  float r1 = hash11(1.234);
  float r2 = hash11(1.337);
  float r3 = hash11(9.001);
  float r4 = hash11(4.321);
  float d = length(uv-vec2(0.5, 0.3) / 0.8602);

  // base gradient
  vec3 color = mix(#550066, #000033, d);

  // fractal clouds
  color += getFractalClouds(uv + vec2(r1,r2), #8888ff, (1.-d) * 0.15 + 0.06 * (0.5 + 0.5 * sin(1.2 * T)) );
  color += getFractalClouds(uv + vec2(r3,r4), #f0f0f0, (1.-d) * 0.04 + 0.02 * (0.5 + 0.5 * sin(T + 2.0)) );

  // sine waves
  // top
  color += getWaves(uv, vec2(0.0,0.25), #6c6c6c, 0.12, 0.20, 0.150, 15.0, false);
  color += getWaves(uv, vec2(0.0,0.25), #8c6c4c, 0.48, 0.15, 0.150, 17.0, false);
  color += getWaves(uv, vec2(0.0,0.25), #8c8c4c, 0.54, 0.15, 0.075, 23.0, false);
  // bot
  color += getWaves(uv, vec2(0.0, 0.08), #4c4c9c, 0.078, 0.07, 0.150, 17.0, true);
  color += getWaves(uv, vec2(0.0, 0.08), #8c6c4c, 0.324, 0.07, 0.150, 17.0, true);
  color += getWaves(uv, vec2(0.0, 0.08), #5c5cac, 0.690, 0.07, 0.075, 23.0, true);
  color += getWaves(uv, vec2(0.0, 0.08), #8c8c4c, 0.348, 0.05, 0.300, 15.0, true);

  gl_FragColor = vec4(color, 1.0);
}
