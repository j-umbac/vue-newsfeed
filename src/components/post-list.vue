<template>
  <button @click="togglePost">Toggle Feed</button>

  <div class="post-list" v-show="toggle">
    <div v-for="post in posts" :key="post.id" class="list">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onUpdated, onMounted, ref } from "vue";
import SinglePost from "./single-post.vue";

export default defineComponent({
  name: "PostList",
  props: ["posts"],
  components: { SinglePost },
  setup() {
    const toggle = ref(true);

    function togglePost() {
      toggle.value = !toggle.value;
    }

    return { togglePost, toggle };
  },
});
</script>

<style>
.post-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-auto-rows: minmax(150px, auto);
  grid-gap: 0px;
  max-width: 50%;
  margin: 0 auto;
  justify-content: left;
  text-align: left;
}

.post-list > * {
  grid-column: 1/-1;
  background: rgb(255, 255, 255);

  padding: 30px;
  border-radius: 10px;
  margin: 10px;
  box-shadow: 3px 3px 3px rgba(199, 199, 199, 0.25);
}
</style>
