<template>
  <transition name="fade">
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
  </transition>
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

<style scoped>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active {
  transition: all 1s ease;
}

.fade-leave-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  transition: all 1s ease;
}
</style>
