<template>
  <div class="nav-bar">
    <ul>
      <li class="title">{{ title }}</li>
      <li class="link" 
        v-for="link in links" 
        v-bind:key="link.id"
        v-on:click="$emit('link', link.event)">
          {{ link.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: [
    'title',
    'links'
  ]
}
</script>

