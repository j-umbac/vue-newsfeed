<template>
  <div>
    <h3>{{ post.title }}</h3>
    <br />
    <p>ID: {{ post.id }}</p>
    <br />
    <p>{{ post.content }}</p>

    <div class="buttons">
      <button>
        <router-link :to="{ name: 'PostDetails', params: { id: post.id } }">
          View
        </router-link>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["post"],
});
</script>

<style scoped></style>
