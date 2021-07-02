<template>
  <div class="post-list">
    <div>
      <form>
        <input id="postTitle" placeholder="Title" v-model="post.title" required />
        <textarea rows="10" placeholder="What's on your mind?" v-model="post.content" required></textarea>
      </form>
      <div class="buttons">
        <div><button @click="goBack" class="btn">Back</button></div>
        <div>
          <button @click="editSave" class="btn">Save Edit</button>
          <button @click="delPost" class="btn" id="deleteBtn">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import IPost from '@/interface/post';
import getPostFeed from '../composables/use-Posts';
import { defineComponent, onMounted, ref } from 'vue';
import router from '@/router';

export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true,
    },
  },

  setup(props) {
    const key = ref(props.id);
    const { posts, saveEdit, deletePost } = getPostFeed();
    let index = 0;

    let post: IPost = {
      title: '',
      content: '',
      id: 0,
    };
    onMounted(() => {
      console.log('Post Mounted');
    });

    for (let i = 0; i < posts.value.length; i++) {
      if (posts.value[i].id == key.value) {
        index = i;
        post.title = posts.value[i].title;
        post.content = posts.value[i].content;
        post.id = posts.value[i].id;
      }
    }

    function delPost() {
      if (deletePost(index)) {
        router.replace('/feed');
      }
    }

    function editSave() {
      if (post.title.trim() !== '' && post.content.trim() !== ''){
        if (saveEdit(post, index)) {
          router.go(-1);
        }
      } else {
        alert('Please dont leave title and content blank');
      }
      
    }
    function goBack(){
      router.go(-1);
    }

    return { post, editSave, delPost, goBack };
  },
});
</script>

<style scoped>
.buttons {
  display: flex;
  justify-content: space-between;
}
#deleteBtn {
  background: crimson;
}
#deleteBtn:hover {
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
