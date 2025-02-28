import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // This will run the function every render of the component
    useEffect(() => {
        setTimeout(() => {
        // Fetch the data from the url to the server
        fetch(url)
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
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            setError(err.message);
            setIsPending(false);
        })
    }, 1000);
}, [url]); // Dependency array: only run the function when the name changes. Whatever changes in the array, the function will run again.

    return{ data, isPending, error };
} 

    

export default useFetch;