<template>
  <div class="links">
    <h1>Useful Links</h1>
    <ul>
      <li v-for="link in links">
        <a v-bind:href="link.url" target="_blank">{{link.text}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'links',
    data: function() {
      return {
        links: [
          {
            url: "https://github.com/lejhy",
            text: "GitHub"
          },
          {
            url: "https://www.linkedin.com/in/filip-lejhanec-416a59139",
            text: "LinkedIn"
          }
        ]
      }
    }
  }
</script>

<style>
  ul {
    list-style-type: none;
    text-align: center;
    padding: 0;
  }
  li {
    display: block;
    margin: 1rem;
  }
</style>