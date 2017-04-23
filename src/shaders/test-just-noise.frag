precision mediump float;

uniform float iGlobalTime;
uniform vec2 iResolution;

#pragma glslify: noise = require("glsl-noise/simplex/3d")

void main() {
  float n = noise(vec3(gl_FragCoord.xy * 0.005, iGlobalTime));
  gl_FragColor = vec4(mix(#ffcc00, #0000ff, n), 1.0);
}
