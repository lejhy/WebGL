<template>
  <canvas ref="WebGLContainer">
    Oh my god! Your browser is ancient...
  </canvas>
</template>

<script>
import vertShader from '@/shaders/VertexShader.glsl';
import fragShader from '@/shaders/FragmentShader.glsl';

export default {
  data() {
    return {
      vertShader: vertShader,
      fragShader: fragShader
    }
  },
  mounted: function() {
    var gl = this.$refs.WebGLContainer.getContext('webgl2');
    var data = new Float32Array([
      0.0, 0.5, 1.0, 0.0, 0.0, 1.0,
      -0.5, -0.5, 0.0, 1.0, 0.0, 1.0,
      0.5, -0.5, 0.0, 0.0, 1.0, 1.0
    ]);

    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    var vertShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertShader, this.vertShader);
    gl.compileShader(vertShader);
    console.log(gl.getShaderParameter(vertShader, gl.COMPILE_STATUS));
    console.log(gl.getShaderInfoLog(vertShader));

    var fragShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragShader, this.fragShader);
    gl.compileShader(fragShader);
    console.log(gl.getShaderParameter(fragShader, gl.COMPILE_STATUS));
    console.log(gl.getShaderInfoLog(fragShader));

    var program = gl.createProgram();
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);
    console.log(gl.getProgramParameter(program, gl.LINK_STATUS));

    var posAttribLocation = gl.getAttribLocation(program, "position");
    var colAttribLocation = gl.getAttribLocation(program, "color");
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);

    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(program);
    gl.enableVertexAttribArray(posAttribLocation);
    gl.vertexAttribPointer(
      posAttribLocation,
      2,
      gl.FLOAT,
      false,
      6 * Float32Array.BYTES_PER_ELEMENT,
      0 * Float32Array.BYTES_PER_ELEMENT
    );
    gl.enableVertexAttribArray(colAttribLocation);
    gl.vertexAttribPointer(
      colAttribLocation,
      4,
      gl.FLOAT,
      false,
      6 * Float32Array.BYTES_PER_ELEMENT,
      2 * Float32Array.BYTES_PER_ELEMENT
    );
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  },
}
</script>

