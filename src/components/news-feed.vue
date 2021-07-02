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
import { defineComponent } from 'vue';
import PostList from './post-list.vue';
import getPostFeed from '../composables/use-Posts';
import PostForm from './post-form.vue';

export default defineComponent({
  name: 'NewsFeed',
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
  padding: 5px;
  text-align: left;
  border-bottom: 2px solid rgb(240, 240, 240);
  color: rgb(100, 100, 100);
  width: 100%;
  min-height: 40px;
  box-sizing: border-box;
  font-size: 1.2em;
  resize: vertical;
}
#tArea {
  height: 40px;
  transition: height 0.2s ease-in;
}

#tArea:focus {
  height: 200px;
}

#postTitle {
  font-family: Arial, Helvetica, sans-serif;
  resize: vertical;
  padding: 5px;
  padding-bottom: 20px;
  text-align: left;
  color: rgb(100, 100, 100);
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  font-size: 1.2em;
}

::placeholder {
  color: rgb(175, 175, 175);
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
  user-select: none;
}

button {
  padding: 10px;
  margin: 5px;
  background: rgb(110, 172, 243);
  border-radius: 5px;
  color: white;
  cursor: pointer;
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
