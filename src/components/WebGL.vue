<template>
  <div class="webgl">
    <canvas ref="WebGLContainer">Oh my god! Your browser is ancient...</canvas>
    <div class="padded">
      <h3>Options</h3>
      <div class="form-entry">
        <label>Mesh</label>
        <select v-model="selected" v-on:change="meshSelected">
          <option v-for="mesh in options" v-bind:value="mesh.url">
            {{ mesh.name }}
          </option>
        </select>
      </div>
      <div class="form-entry">
        <label>Label1</label>
        <input/>
      </div>
      <div class="form-entry">
        <label>Label3</label>
        <input/>
      </div>
      <div class="form-entry">
        <label>Label2</label>
        <input/>
      </div>
    </div>
  </div>
</template>

<script>

  import {WebGLDemo} from '@/modules/WebGLDemo.js';

  export default {
    mounted: function() {
      let canvas = this.$refs.WebGLContainer;
      let demo = new WebGLDemo(canvas);
      demo.loadMesh(this.selected);
      this.demo = demo;
    },
    data: function () {

      let models = [];
      webpack.env.MODELS.forEach(model => {
        models.push({
          name: model.match(/\w+/)[0],
          url: "./models/"+model
        })
      });

      return {
        selected: models[0].url,
        options: models
      }
    },
    methods: {
      meshSelected: function() {
        this.demo.clearMesh();
        this.demo.loadMesh(this.selected);
      }
    }
  };

</script>

<style scoped>
  canvas {
    width: 100%;
  }
</style>