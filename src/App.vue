<template>
  <div>
    <AppHeader />
  </div>
  <div class="route">
    <router-view v-slot="{ Component }">
      <transition name="routes" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
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
/* Route Transitions */
.routes-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.routes-enter-active {
  transition: all 0.1s ease-out;
}

.routes-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.routes-leave-active {
  transition: all 0.1s ease-in;
}

/* Styles */
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
.route {
  background: rgb(245, 245, 245);
  height: 94.5vh;
}
</style>
