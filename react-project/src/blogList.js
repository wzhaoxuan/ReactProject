import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({blogs_props, title}) => {
    // const blogs = props.blogs_props;
    // const title = props.title;
    return(
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs_props.map((blog) => (
            // Key is used to keep tracking of each item in the dom as it outputs in React
            <div className="blog-preview" key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>Written By {blog.author}</p>
                </Link>
            </div>
           ))}
        </div>
    );
}
  
export default BlogList;