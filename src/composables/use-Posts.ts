import postList from '@/data/post-data';
import IPost from '@/interface/post';
import { ref } from 'vue';
import router from '@/router';
import { RouteName } from '@/constants/route-names';

function getPostFeed() {
  const posts = ref(postList);

  function addPost(title: string, content: string) {
    console.log("Post Added");

    posts.value.unshift({
      title: title,
      content: content,
      id: Math.round(Math.random() * 1000000),
    });
  }

  function saveEdit(post: IPost, index: number): boolean {
    if (confirm('Confirm post edits')) {
      alert('Edits Saved');
      posts.value.splice(index, 1, post);
      return true;
    } else {
      return false;
    }
  }

  function deletePost(index: number): boolean {
    if (confirm('Confirm post delete')) {
      console.log('Post deleted');
      posts.value.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  function toEditView(key: number) {
    router.push({ name: RouteName.EditPost, params: { id: key } });
  }


  return { posts, addPost, saveEdit, deletePost, toEditView };



}

export default getPostFeed;