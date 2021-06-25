<template>
  <!-- New Post Form Section || Gama form component -->
  <!-- <PostForm /> -->
  <div id="postform">
    <div>
      <form>
        <textarea
          rows="3"
          placeholder="What's on your mind?"
          v-model="text"
          required
        ></textarea>
        <input id="postTitle" placeholder="Title" v-model="title" required />
        <div class="buttons">
          <button @click="publishPost">Post</button>
          <button @click="clearForm">Cancel</button>
        </div>
      </form>
    </div>
  </div>

  <button @click="toggleList">Toggle Feed</button>

  <!-- <h4>Sort by Title</h4> -->

  <div class="postfeed" v-show="toggle">
    <!-- Post List Section || Gama list component-->
    <!-- <PostList /> -->

    <ul id="list">
      <li v-for="post in posts" :key="post">
        <PostList :postTitle="post.title" :postDesc="post.text" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
//import  PostForm  from "./post-form.vue"
import PostList from "./post-list.vue";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mollis aliquam ut porttitor leo a diam. Commodo ullamcorper a lacus vestibulum sed. Etiam non quam lacus suspendisse. Proin fermentum leo vel orci porta non pulvinar neque. Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Sed id semper risus in hendrerit gravida rutrum quisque. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. In iaculis nunc sed augue. Integer eget aliquet nibh praesent tristique. Aenean sed adipiscing diam donec adipiscing. Neque ornare aenean euismod elementum nisi quis eleifend. Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Lacinia at quis risus sed vulputate odio ut. Pellentesque habitant morbi tristique senectus et netus et malesuada. Velit sed ullamcorper morbi tincidunt ornare massa eget.";

export default defineComponent({
  name: "NewsFeed",
  components: {
    //PostForm,
    PostList,
  },
  props: [
    //dapat ipass nato dri kay individual variables then sa
    //child component na ibutang ang post object para idto na e
    //build ang feed
    // Check: Vue JS 3 Tutorial for Beginners #5 - The Vue CLI & Bigger Projects (part 2)
    // Props Section ~10 minute mark
  ],
  data() {
    return {
      toggle: true,
      title: "",
      text: "",
      key: "",
      posts: [
        { title: "Title 01", text: lorem, key: "Title 01" },
        { title: "Title 02", text: lorem, key: "Title 02" },
        { title: "Title 03", text: lorem, key: "Title 03" },
      ],
    };
  },
  methods: {
    publishPost() {
      if (this.title !== "" && this.text !== "") {
        const Title = this.title;
        const Text = this.text;
        const Key = this.key;

        this.posts.unshift({ title: Title, text: Text, key: Key });

        this.title = "";
        this.text = "";
      }
    },
    toggleList() {
      this.toggle = !this.toggle;
    },
    deletePost(key: string) {
      this.posts = this.posts.filter((obj) => {
        return obj.key !== key;
      });
    },
    clearForm() {
      this.title = "";
      this.text = "";
    },
  },
});
</script>

<style>
li {
  list-style-type: none;
}
div #postform {
  display: grid;
  /* grid-template-columns: repeat(4, 1fr); */
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-auto-rows: minmax(200px, auto);
  grid-gap: 0px;
  max-width: 50%;
  margin: 0 auto;
  justify-content: left;
  text-align: left;
}

#list {
  display: grid;
  /* grid-template-columns: repeat(4, 1fr); */
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-auto-rows: minmax(150px, auto);
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

  #list {
    max-width: 90%;
  }
}

textarea {
  font-family: Arial, Helvetica, sans-serif;
  resize: vertical;
  padding: 20px;
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
  padding: 10px;
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
  background: rgb(241, 241, 241);
  padding: 30px 30px 10px 30px;
  border-radius: 10px;
  margin: 10px;
  box-shadow: 3px 3px 3px rgb(199, 199, 199);
}

#list > * {
  grid-column: 1/-1;
  background: rgb(241, 241, 241);

  padding: 30px;
  border-radius: 10px;
  margin: 10px;
  box-shadow: 3px 3px 3px rgb(199, 199, 199);
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

button:hover {
  background-color: rgb(83, 140, 204);
}

button:active {
  transform: scale(0.95);
}
</style>
