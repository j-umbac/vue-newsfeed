<template>
  <div>
    <form>
      <input id="postTitle" placeholder="Title" v-model="title" required />
      <textarea
        rows="3"
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
    const { posts, totalProps } = getPostFeed();

    const title = ref("");
    const content = ref("");
    const post = {
      title: title.value,
      content: content.value,
      id: totalProps + 1,
    };

    function publishPost() {
      if (title.value !== "" && content.value !== "") {
        console.log("Post Added");
        console.log(totalProps);

        posts.value.unshift(post);
      } else {
        alert("Please complete the form");
      }
    }

    function clearForm() {
      title.value = "";
      content.value = "";
    }

    return { posts, content, title, publishPost, clearForm };
  },
});
</script>

<style></style>
