import React, { useState, useEffect } from "react";
import BlogList from "./Bloglist";

// UseEffect: A hook runs a function every render of the components
  
const Home = () =>{
    const [blogs, setBlogs] = useState([
        {title: 'My Portfolio', body: 'alkvwerjfo', author:'mario', id: 1}, // Properties: title, body, author, id 
        {title: 'My new website', body: 'alkvwerjfo', author:'mario', id: 2},
        {title: 'About me', body: 'alkvwerjfo', author:'mario', id: 3}
    ]);

    const handleDelete = (id) =>{
        // Filter out the blog with non-indentical id and store into a new array
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs); 
    }

    // This will run the function every render of the component
    useEffect(() => {
        console.log("Use Effect ran");
        console.log(blogs);
    });

    return(
        <div className="Home">
            {/* Use props to pass the blogs data as well as the function to the child component*/}
           <BlogList blogs_props={blogs} title="All Blogs!" handleDelete={handleDelete}/>
        </div>
    );
}

export default Home;