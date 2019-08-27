<template>
  <div class="gallery">
    <h1>Gallery</h1>
    <div class="image-grid">
      <a class="image" v-for="image in images" v-bind:href="image.full" target="_blank">
        <img v-bind:src="image.thumbnail" v-bind:alt="image.name">
        <span class="caption">{{ image.name }}</span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Gallery.vue",
    data: function() {
      let images = [];
      webpack.env.GALLERY.forEach(image => {
        if(image.match(".thumb.")) {
          let name = image.match(/[^.]+/)[0];
          let extension = image.match(/\.\w+$/)[0];
          images.push({
            name: name,
            thumbnail: "/gallery/"+name+".thumb"+extension,
            full: "/gallery/"+name+extension,
          });
        }
      });
      return {
        images: images
      }
    }
  }
</script>

<style scoped>
  .image-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .image {
    text-align: center;
    color: #2c3e50;
    text-decoration: none;
    background: white;
    flex-basis: 20vmax;
    flex-grow: 1;
    padding: 0.5rem;
    margin: 0.5rem;
    border-radius: 0.2rem;
    box-shadow: #666 0 0 0.2rem;
  }

  .image:hover {
    box-shadow: #007788 0 0 0.3rem;
    transform: scale(1.02);
    transition: all 0.3s;
  }

  .image img {
    width: 100%;
  }

  .image .caption {
    display: block;
    text-shadow: #666 0 0 0.1rem;
  }
</style>