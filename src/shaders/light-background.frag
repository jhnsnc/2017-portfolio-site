#ifdef GL_ES
precision mediump float;
#endif

uniform float iGlobalTime;
uniform vec2 iResolution;

varying vec2 vUv;

highp float random(vec2 co)
{
    highp float a = 12.9898;
    highp float b = 78.233;
    highp float c = 43758.5453;
    highp float dt= dot(co.xy ,vec2(a,b));
    highp float sn= mod(dt,3.14);
    return fract(sin(sn) * c);
}
vec3 blend(vec3 base, vec3 blend) {
  return mix(1.0 - 2.0 * (1.0 - base) * (1.0 - blend), 2.0 * base * blend, step(base, vec3(0.5)));
}

void main() {
  vec2 pos = vUv - 0.5;
  pos.x *= iResolution.x/iResolution.y;

  float dist = length(pos);
  dist = smoothstep(-0.4, 0.8, 1.0-dist);

  vec3 color = mix(#4e4e7e, #f8f8ff, dist);
  color = mix(color, blend(
    color, vec3(random(vUv * 1.5), random(vUv * 2.5), random(vUv))
  ), 0.04);

  gl_FragColor = vec4(color, 1.0);
}
