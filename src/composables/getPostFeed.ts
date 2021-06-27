import postList from "@/data/postData"
import { ref } from "vue";

const getPostFeed = () => {
    const posts = ref(postList);

    //const totalProps: number = posts.value.reduce((a, obj) => a + Object.keys(obj).length, 0);
    const totalProps: number = posts.value.length;

    return { posts, totalProps };

    
}

export default getPostFeed;