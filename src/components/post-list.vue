<template>
  <button @click="togglePost">Toggle Feed</button>

  <transition-group tag="div" name="listpost" appear>
    <div v-if="toggle" class="post-list">
      <div v-for="post in posts" :key="post.id" class="list">
        <SinglePost :post="post" />
      </div>
    </div>
  </transition-group>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue';
import SinglePost from './single-post.vue';
import IPost from '@/interface/post';

export default defineComponent({
  name: 'PostList',
  props: {
    posts: {
      type: Array as PropType<IPost[]>,
      required: true,
    },
  },
  components: { SinglePost },
  setup() {
    const toggle = ref(true);

    const togglePost = () => {
      toggle.value = !toggle.value;
    };

    return { togglePost, toggle };
  },
});
</script>

<style>
/*List Animations*/
.listpost-enter-from {
  opacity: 0;
  transform: translateY(100px);
}
.listpost-enter-active {
  transition: all 0.3s ease;
}
.listpost-leave-to {
  opacity: 0;
  transform: translateY(100px);
}
.listpost-leave-active {
  transition: all 0.3s ease;
}
.listpost-move {
  transition: all 0.3s ease;
}

/*Styles*/
.post-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-auto-rows: minmax(150px, auto);
  grid-gap: 0px;
  max-width: 50%;
  margin: 0 auto;
  justify-content: left;
  text-align: left;
}

.post-list > * {
  grid-column: 1/-1;
  background: rgb(255, 255, 255);
  padding: 30px;
  border-radius: 10px;
  margin: 10px;
  box-shadow: 3px 3px 3px rgba(199, 199, 199, 0.25);
}
</style>
