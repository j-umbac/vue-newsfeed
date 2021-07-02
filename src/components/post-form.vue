<template>
  <div>
    <form>
      <input id="postTitle" placeholder="Title" v-model="title"/>
      <textarea id="tArea" placeholder="What's on your mind?" v-model="content"></textarea>
      <div class="buttons">
        <button @click.prevent="publishPost">Post</button>
        <button @click.prevent="clearForm">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import getPostFeed from '@/composables/use-Posts';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PostForm',
  setup() {
    let { addPost } = getPostFeed();

    const title = ref('');
    const content = ref('');

    function publishPost() {
      if (title.value.trim() !== '' && content.value.trim() !== '') {
        addPost(title.value, content.value);
        title.value = '';
        content.value = '';
      } else {
        alert('Please complete the form');
        if (title.value.trim() === '' && content.value.trim() === '') {
          title.value = '';
          content.value = '';
        }
      }
    }

    function clearForm() {
      title.value = '';
      content.value = '';
    }

    getPostFeed();

    return { content, title, publishPost, clearForm };
  },
});
</script>

<style></style>
