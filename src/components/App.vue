<template>
  <div class="app">
    <NavBar v-bind="navBarData" v-on:link="route($event)"/>
    <div class="content" v-html="content" />
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";

export default {
  name: 'App',
  data() {
    return {
      location: "home",
      navBarData: {
        title: "Magic",
        links: [
          {id: 1, event: "home", name: "Home"},
          {id: 2, event: "portfolio", name: "Portfolio"}
        ],
      },
      content: `
        <h1>Article</h1>
        <p>Blah, blah, blah,...</p>
      `
    }
  },
  head: {
    title: {
      inner: "AAA"
    }
  },
  methods: {
    route: function(event) {
      window.alert(event);
    }
  },
  components: {
    'NavBar': NavBar
  }
}
</script>
