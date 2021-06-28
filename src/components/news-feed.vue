<template>
  <div class="body">
    <div id="postform">
      <PostForm />
    </div>
    <div class="postfeed">
      <PostList :posts="posts" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import PostList from "./post-list.vue";
import getPostFeed from "../composables/getPostFeed";
import PostForm from "./post-form.vue";

export default defineComponent({
  name: "NewsFeed",
  components: {
    PostList,
    PostForm,
  },
  setup() {
    const { posts } = getPostFeed();

    return { posts };
  },
});
</script>

<style>
.body {
  padding-top: 20px;
  padding-bottom: 20px;
  background: rgb(245, 245, 245);
}
div #postform {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-auto-rows: minmax(200px, auto);
  grid-gap: 0px;
  max-width: 50%;
  margin: 0 auto;
  justify-content: left;
  text-align: left;
}

@media only screen and (max-width: 960px) {
  div #postform {
    max-width: 90%;
  }

  .post-list {
    max-width: 90%;
  }
}

textarea {
  font-family: Arial, Helvetica, sans-serif;
  resize: vertical;
  padding: 15px;
  text-align: left;
  border-radius: 10px;
  color: gray;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 2px solid rgb(219, 219, 219);
  font-size: 1.2em;
}

#postTitle {
  font-family: Arial, Helvetica, sans-serif;
  resize: vertical;
  padding: 15px;
  text-align: left;
  border-radius: 10px;
  color: gray;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 2px solid rgb(219, 219, 219);
  font-size: 1.2em;
}

div #postform > * {
  grid-column: 1/-1;
  background: white;
  padding: 30px 30px 10px 30px;
  border-radius: 10px;
  margin: 10px;
  box-shadow: 3px 3px 3px rgba(199, 199, 199, 0.25);
}

.buttons {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}

button {
  padding: 10px;
  margin: 5px;
  background: rgb(110, 172, 243);
  border-radius: 5px;
  color: white;
}

button > * {
  text-decoration: none;
  color: white;
}

button:hover {
  background-color: rgb(83, 140, 204);
}

button:active {
  transform: scale(0.95);
}
</style>
