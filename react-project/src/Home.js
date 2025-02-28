import React, { useState, useEffect } from "react";
import BlogList from "./Bloglist";

// UseEffect: A hook runs a function every render of the components
  
const Home = () =>{
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // This will run the function every render of the component
    useEffect(() => {
            setTimeout(() => {
            // Fetch the data from the url to the server
            fetch('http://localhost:8000/blogs')
            // This is a promise, so we need to convert it to json with response object
            .then(res => {
                if(res.ok){
                    console.log("Data fetched successfully!");
                } else {
                    throw Error("Data not fetched successfully!");
                }

                return res.json();
            })
            .then((data) => {
                console.log(data);
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
                setIsPending(false);
            })
        }, 1000);
    }, []); // Dependency array: only run the function when the name changes

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