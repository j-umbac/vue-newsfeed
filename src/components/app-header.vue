<template>
  <header class="main">
    <div class="navigation">
      <router-link id="home" to="/home">Home</router-link>
      <router-link id="feed" to="/">Feed</router-link>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppHeader",
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main h1 {
  color: rgb(226, 226, 226);
}

.navigation {
  display: flex;
  justify-content: flex-start;
  flex-flow: row wrap;
  list-style: none;
  margin-bottom: 25px;
  background: rgb(110, 172, 243);
  box-shadow: 0px 3px 5px rgb(199, 199, 199);
  padding-left: 15%;
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
