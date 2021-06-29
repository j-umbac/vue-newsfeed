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
        <textarea
          rows="10"
          placeholder="What's on your mind?"
          v-model="post.content"
          required
        ></textarea>
      </form>
      <div class="buttons">
        <div><router-link to="/feed" class="btn">Back</router-link></div>
        <div>
          <router-link to="/feed" @click="saveEdit" class="btn"
            >Save Edit</router-link
          >

          <router-link
            to="/feed"
            @click.prevent="deletePost"
            id="deletBtn"
            class="btn"
            >Delete</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import postList from "@/data/post-data";
import PostInterface from "@/interface/post-interface";
import { defineComponent, onMounted, ref } from "vue";

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
    onMounted(() => {
      console.log("Post Mounted");
    });

    for (let i = 0; i < posts.value.length; i++) {
      if (posts.value[i].id === key.value) {
        console.log(posts.value[i].title);
        console.log(posts.value[i].id);
        post.title = posts.value[i].title;
        post.content = posts.value[i].content;
        post.id = posts.value[i].id;
        index = i;
        console.log(post);
      }
    }

    const saveEdit = () => {
      if (confirm("Confirm post edits")) {
        alert("Edits Saved");
        posts.value.splice(index, 1, post);
        console.log(posts);
      }
    };

    const deletePost = () => {
      if (confirm("Confirm post delete")) {
        console.log("Post deleted");
        posts.value.splice(index, 1);
        console.log(posts);
      }
    };

    return { post, saveEdit, deletePost };
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
#deletBtn:hover {
  background: rgb(202, 11, 49);
}

.buttons > * {
  margin: 5px;
  font-size: 0.9em;
}

.btn {
  padding: 10px;
  margin: auto 5px;
  background: rgb(110, 172, 243);
  border-radius: 5px;
  color: white;
  text-decoration: none;
}

.btn > * {
  color: white;
}

.btn:hover {
  background-color: rgb(83, 140, 204);
}
</style>
