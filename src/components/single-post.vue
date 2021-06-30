<template>
  <h3>{{ post.title }}</h3>
  <br />
  <p>{{ post.content }}</p>

  <div class="buttons">
    <button @click="goToDetails">
      <router-link :to="{ name: 'PostDetails', params: { id: post.id } }"> // use router.push instead
        Edit
      </router-link>
    </button>
  </div>
</template>

<script lang="ts">
import IPost from '@/interface/post';
import router from '@/router';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    post:{
      type: Object as PropType<IPost>,
      required: true,
    }
  },

  setup(props) {
    console.log(props.post.id);
    function goToDetails(){
      router.push({ name: 'PostDetails', params: { id: props.post.id } })
    }

    return { goToDetails }
  },
});
</script>

<style>
p {
  padding-bottom: 15px;
  border-bottom: 2px solid rgb(240, 240, 240);
}
</style>
