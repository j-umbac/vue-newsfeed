import postList from "@/data/postData";
import { ref } from "vue";

const getPost = (id: any) => {
    const posts = ref(postList)
    const post = posts.value[id];


    return { post };
}

export default getPost