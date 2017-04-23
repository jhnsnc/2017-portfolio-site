uniform float iGlobalTime;
uniform vec2 iResolution;

uniform sampler2D iChannel0;

varying vec2 vUv;

#define PI 3.14159265359
#define T (iGlobalTime*0.5)

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
  vec2 texCoord = vec2(gl_FragCoord.x / iResolution.y * 800. / 534., gl_FragCoord.y / iResolution.y);
  vec4 texCol = (texCoord.x <= 1. && texCoord.y <= 1.) ? texture2D(iChannel0, texCoord) : vec4(0.);

  // vec3 gradColor = cosPal((vUv.x * 0.4) + (vUv.y * 1.2));

  float value;
  vec3 gradColor;
  calcPattern(value, gradColor, vUv, T, texCol.a);

  float circFade = length(vUv - vec2(0.35, 0.5)) * 1.75;
  circFade = max(0.0, 1.0 - (circFade * circFade));

  gl_FragColor = vec4(
    mix( (0.5 * value - 0.1) * gradColor * circFade, (1.5 * value + 0.5) * gradColor * texCol.rgb, texCol.a)
  , 1.);
}
