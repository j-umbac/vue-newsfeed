import postList from "@/data/post-data"
import { ref } from "vue";

function getPostFeed(){
    const posts = ref(postList);

    return { posts };
    

    
}

export default getPostFeed;