import React, { useState } from "react";
const Home = () =>{
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'alkvwerjfo', author:'mario', id: 1}, // Properties: title, body, author, id 
        {title: 'My new website', body: 'alkvwerjfo', author:'mario', id: 2},
        {title: 'My new website', body: 'alkvwerjfo', author:'mario', id: 3}
    ]);

    return(
        <div classblogs="Home">
            {/* Use map() to loop through the property of the object */}
           {blogs.map((blog)=>(
            // Key is used to keep tracking of each item in the dom as it outputs in React
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written By {blog.author}</p>
            </div>
           ))}
        </div>
    );
}

export default Home;