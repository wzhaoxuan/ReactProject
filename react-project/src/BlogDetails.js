import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);
    
    return (
        <div>
        <h2>Blog Details {id}</h2>
        </div>
    );
};

export default BlogDetails;