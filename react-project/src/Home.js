import React, { useState } from "react";
import BlogList from "./Bloglist";
  
const Home = () =>{
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'alkvwerjfo', author:'mario', id: 1}, // Properties: title, body, author, id 
        {title: 'My new website', body: 'alkvwerjfo', author:'mario', id: 2},
        {title: 'My new website', body: 'alkvwerjfo', author:'mario', id: 3}
    ]);

    const handleDelete = (id) =>{
        // Filter out the blog with non-indentical id and store into a new array
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs); 
    }

    return(
        <div className="Home">
            {/* Use props to pass the blogs data as well as the function to the child component*/}
           <BlogList blogs_props={blogs} title="All Blogs!" handleDelete={handleDelete}/>
        </div>
    );
}

export default Home;