import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create= () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory(); // This is a hook that allows us to redirect the user to a different page

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the page from refreshing
        const blog = { title, body, author };

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" }, // Tells the server that we are sending json data
            body: JSON.stringify(blog) // Converts the object to a string
        }).then(() => {
            console.log("New blog added!");
            setIsPending(false);
            history.push('/'); // Redirects the user to the home page
        })
    }

    return (
        <div className="create">
            <h1>Add a new blogs</h1>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
                
            </form>
        </div>
    )
}

export default Create;