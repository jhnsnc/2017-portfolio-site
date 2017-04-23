precision mediump float;

uniform float time;
uniform vec2 resolution;

#pragma glslify: noise = require("glsl-noise/simplex/3d")

void main() {
  float n = noise(vec3(gl_FragCoord.xy * 0.005, time));
  gl_FragColor = vec4(mix(#ffcc00, #00ff00, n), 1.0);
}
