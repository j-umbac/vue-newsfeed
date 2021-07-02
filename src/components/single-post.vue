<template>
    <h3 @click="goToDetails" id="detailsTitle">{{ post.title }}</h3>

  <br />
  <p>{{ post.content }}</p>

  <div class="buttons">
    <button @click="goToEdit">Edit</button>
  </div>
</template>

<script lang="ts">
import getPostFeed from '@/composables/use-Posts';
import IPost from '@/interface/post';
import { defineComponent, PropType } from 'vue';
import router from '@/router'
import { RouteName } from '@/constants/route-names';

export default defineComponent({
  props: {
    post: {
      type: Object as PropType<IPost>,
      required: true,
    },
  },
  setup(props) {
    const { toEditView } = getPostFeed();

    function goToEdit() {
      toEditView(props.post.id);
    }

    function goToDetails() {
      router.push({ name: RouteName.PostDetails , params: { id: props.post.id } })
    }

    return { goToEdit, goToDetails};
  },
});

</script>

<style>
p {
  padding-bottom: 15px;
  border-bottom: 2px solid rgb(240, 240, 240);
  white-space: pre-wrap;
}

#detailsTitle:hover {
  cursor: pointer;
  color:rgb(156, 156, 156);
}
</style>
