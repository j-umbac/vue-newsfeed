<template>
  <div v-if="show">
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
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  props: ["post"],

  setup() {
    const show = ref(false);
    onMounted(() => (show.value = !show.value));

    return { show };
  },
});
</script>

<style>
p {
  padding-bottom: 15px;
  border-bottom: 2px solid rgb(240, 240, 240);
}
</style>
