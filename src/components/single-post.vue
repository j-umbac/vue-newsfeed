<template>
  <h3>{{ post.title }}</h3>
  <br />
  <p>{{ post.content }}</p>

  <div class="buttons">
    <button>
      <router-link :to="{ name: 'PostDetails', params: { id: post.id } }">
        Edit
      </router-link>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["post"],
  setup(props) {
    console.log(props.post.id);
  },
});
</script>

<style>
p {
  padding-bottom: 15px;
  border-bottom: 2px solid rgb(240, 240, 240);
}
</style>
