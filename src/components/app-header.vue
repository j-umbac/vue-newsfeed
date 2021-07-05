<template>
  <header class="main">
    <div class="navigation">
      <router-link :to="'/' + RouteName.Home">Home</router-link
      ><router-link :to="'/' + RouteName.Feed">Feed</router-link>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouteName } from '@/constants/route-names';

export default defineComponent({
  name: 'AppHeader',
  setup() {
    return { RouteName };
  },
});
</script>

<style scoped>
.main h1 {
  color: rgb(226, 226, 226);
}

.navigation {
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  list-style: none;
  background: rgb(110, 172, 243);
  box-shadow: 0px 3px 5px rgba(199, 199, 199, 0.5);
}

.navigation > * {
  text-decoration: none;
  display: block;
  padding: 1em;
  color: white;
  font-weight: bold;
  padding: auto;
}

.navigation > *:hover {
  background: rgb(83, 140, 204);
}

.router-link-active {
  background: rgb(83, 140, 204);
}
</style>
