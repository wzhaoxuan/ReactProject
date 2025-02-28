import React, { useState, useEffect } from "react";
import BlogList from "./Bloglist";
import useFetch from "./useFetch";

// UseEffect: A hook runs a function every render of the components
  
const Home = () =>{
    // Grab the data but call it blogs
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    
    return(
        <div className="Home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {/* Apply javascript*/}
            {blogs && <BlogList blogs_props={blogs} title="All Blogs!"/>}
        </div>
    );
}

export default Home;