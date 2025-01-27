import React, { useState } from "react";
import BlogList from "./blogList";
  
const Home = () =>{
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'alkvwerjfo', author:'mario', id: 1}, // Properties: title, body, author, id 
        {title: 'My new website', body: 'alkvwerjfo', author:'mario', id: 2},
        {title: 'My new website', body: 'alkvwerjfo', author:'mario', id: 3}
    ]);

    return(
        <div className="Home">
            {/* Use props to pass the blogs data to the child component */}
           <BlogList blogs_props={blogs} title="All Blogs!"/>
        </div>
    );
}

export default Home;