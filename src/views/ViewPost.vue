<template>
  <div class="post-list">
    <div>
        <h3>{{post.title}}</h3>
        <br>
        <p>{{post.content}}</p>
    <div class="buttons">
        <div><button @click="goBack" class="btn">Back</button></div>
        <div>
    <button @click="goToEdit" class="btn">Edit</button>
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
    const { posts, toEditView  } = getPostFeed();

    let post: IPost = {
      title: '',
      content: '',
      id: 0,
    };

    for (let i = 0; i < posts.value.length; i++) {
      if (posts.value[i].id ==  key.value) {
        post.title = posts.value[i].title;
        post.content = posts.value[i].content;
        post.id = posts.value[i].id;
      } 
    }
    
    function goToEdit() {
      toEditView(post.id);
    }
    function goBack(){
      router.go(-1);
    }

    return { post, goToEdit, goBack };
  },
});
</script>

<style scoped>
h3 {
    text-decoration: none;
}
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