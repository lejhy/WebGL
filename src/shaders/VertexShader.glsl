attribute vec4 position;
attribute vec4 color;

uniform mat4 transform;

varying vec4 f_color;

void main() {
  gl_Position = position * transform;
  f_color = color;
}