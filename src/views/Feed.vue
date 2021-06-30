<template>
  <div class="mainsec">
    <NewsFeed />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NewsFeed from '@/components/news-feed.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Main',
  components: {
    NewsFeed,
  },
});
</script>
