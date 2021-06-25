<template>
  <div id="postform">
      <div>
        <textarea
          v-model="text"
          rows="3"
          placeholder="What's on your mind?"
        ></textarea>
        <input id="postTitle" type="text" placeholder="Title" >
      </div>
      
      <div class="buttons">
        <button type="button" id="post" @click="newPost">Post</button>
        <button type="button" id="canc" @click="clearForm">Cancel</button>
      </div>
    </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
    name: "PostForm",
    props: {},
});
</script>

<style scoped>

</style>>