<template>
  <div class="post-list">
    <div>
      <form>
        <input
          id="postTitle"
          placeholder="Title"
          v-model="post.title"
          required
        />
        <p>ID: {{ post.id }}, Array index: {{ index }}</p>
        <textarea
          rows="10"
          placeholder="What's on your mind?"
          v-model="post.content"
          required
        ></textarea>
      </form>
      <div class="buttons">
        <button><router-link id="feed" to="/feed">Back</router-link></button>
        <div>
          <button @click.prevent="saveEdit">Save Edit</button>
          <button @click.prevent="deletePost" id="deletBtn">
            <router-link id="feed" to="/feed">Delete</router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import postList from "@/data/postData";
import PostInterface from "@/interface/postInterface";
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: ["id"],
  setup(props) {
    const key = ref(props.id);
    const posts = ref(postList);
    let index = 0;

    let post: PostInterface = {
      title: "",
      content: "",
      id: "",
    };

    console.log("Mounted");
    for (let i = 0; i < posts.value.length; i++) {
      if (posts.value[i].id === props.id) {
        console.log(posts.value[i].title);
        console.log(posts.value[i].id);
        post.title = posts.value[i].title;
        post.content = posts.value[i].content;
        post.id = posts.value[i].id;
        index = i;
        console.log(post);
      }
    }

    function saveEdit() {
      if (confirm("Confirm post edits")) {
        alert("Edits Saved");
        posts.value.splice(index, 1, post);
        console.log(posts);
      }
    }

    function deletePost() {
      if (confirm("Confirm post delete")) {
        console.log("Post deleted");
        posts.value.splice(index, 1);
        console.log(posts);
      }
    }

    return { key, posts, post, saveEdit, index, deletePost };
  },
});
</script>

<style scoped>
.buttons {
  display: flex;
  justify-content: space-between;
}
#deletBtn {
  background: crimson;
}
</style>
