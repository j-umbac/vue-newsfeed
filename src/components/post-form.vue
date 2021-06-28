<template>
  <div>
    <form>
      <input id="postTitle" placeholder="Title" v-model="title" required />
      <textarea
        rows="4"
        placeholder="What's on your mind?"
        v-model="content"
        required
      ></textarea>
      <div class="buttons">
        <button @click.prevent="publishPost">Post</button>
        <button @click.prevent="clearForm">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import getPostFeed from "@/composables/getPostFeed";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "PostForm",
  setup() {
    let { posts } = getPostFeed();

    const title = ref("");
    const content = ref("");

    function publishPost() {
      if (title.value !== "" && content.value !== "") {
        console.log("Post Added");

        posts.value.unshift({
          title: title.value,
          content: content.value,
          id: title.value + String(Math.round(Math.random() * 100)),
        });
      } else {
        alert("Please complete the form");
      }

      title.value = "";
      content.value = "";
    }

    function clearForm() {
      title.value = "";
      content.value = "";
    }

    getPostFeed();

    return { content, title, publishPost, clearForm };
  },
});
</script>

<style></style>
