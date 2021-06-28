import postList from "@/data/postData"
import { ref } from "vue";

function getPostFeed(){
    const posts = ref(postList);

    const totalProps: number = posts.value.length;

    return { posts, totalProps };
    

    
}

export default getPostFeed;