<template>
  <div>
    <AppHeader />
  </div>
  <div class="route"><router-view /></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "./components/app-header.vue";

export default defineComponent({
  name: "App",
  components: {
    AppHeader,
  },
});
</script>
<style>
* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
