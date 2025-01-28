import React, { useState, useEffect } from "react";
import BlogList from "./Bloglist";

// UseEffect: A hook runs a function every render of the components
  
const Home = () =>{
    const [blogs, setBlogs] = useState(null);

    const [name, setName] = useState('mario');

    
    // This will run the function every render of the component
    useEffect(() => {
        // Fetch the data from the url to the server
        fetch('http://localhost:8000/blogs')
        // This is a promise, so we need to convert it to json with response object
        .then(res => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            setBlogs(data);
        })
    }, []); // Dependency array: only run the function when the name changes

    return(
        <div className="Home">
            {/* Apply javascript*/}
           {blogs && <BlogList blogs_props={blogs} title="All Blogs!"/>}
           <button onClick={() => setName('luigi')}>Change Name</button>
           <p>{name}</p>
        </div>
    );
}

export default Home;