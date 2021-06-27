<template>
  <div class="post-list">
    <div>
      <h3>{{ post.title }}</h3>
      <br />
      <h4>{{ post.id }}</h4>
      <br />
      <p>{{ post.content }}</p>
      <div class="buttons">
        <button @click="$router.go(-1)">Back</button>
        <button>Delete</button>
        <button>Save Edit</button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import getPost from "../composables/getPost";

export default defineComponent({
  props: ["id"],
  setup(props) {
    const { post } = getPost(props.id);

    onMounted(() => {
      console.log(post.title);
    });

    return { post };
  },
});
</script>

<style></style>
