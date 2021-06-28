import postList from "@/data/postData"
import { ref } from "vue";

function getPostFeed(){
    const posts = ref(postList);

    return { posts };
    

    
}

export default getPostFeed;