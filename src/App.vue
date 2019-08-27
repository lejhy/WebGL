<template>
  <div id="app">
    <div id="nav">
      <template v-for="link in links"><router-link v-bind:to="link.url">{{link.name}}</router-link><span class="separator">|</span></template>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data: function() {
      return {
        links: [
          {
            url: "/",
            name: "Home"
          },
          {
            url: "/links",
            name: "Links"
          },
          {
            url: "/gallery",
            name: "Gallery"
          }
        ]
      };
    }
  }
</script>

<style>
  body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    color: #2c3e50;
    background-color: #eef2f2;
  }

  a {
    color: #007788;
  }

  #nav {
    text-align: center;
    background: white;
    border-bottom: solid 1px #aaa;
    padding: 1rem;
  }

  #nav a {
    font-weight: bold;
    text-decoration: none;
    color: #2c3e50;
  }

  .separator {
    padding: 0 1rem;
    cursor: default;
  }

  #nav .separator:last-of-type {
    display: none;
  }

  #nav a.router-link-exact-active, #nav a:hover {
    color: #007788;
  }

  .padded {
    padding: 1.5rem;
  }

  label {
    margin-right: 1rem;
    display: inline-block;
    width: 50%;
    padding: 0.5rem 0;
  }
  .form-entry:not(:last-of-type) {
    border-bottom: dashed 1px #666;
  }

  h1, h2, h3 {
    border-bottom: dashed 1px #666;
  }

  h1, h2 {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    font-weight: 300;
  }

  h1 {
    width: 90%;
  }

  h2 {
    width: 75%;
  }

  h3 {
    text-align: left;
    width: 75%;
  }
</style>
