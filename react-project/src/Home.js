const Home = () =>{
    const handleClick = () => {
        console.log("Hello");
    }
    return(
        <div className="Home">
            <h1>Welcome to My Portfolio</h1>
            {/* Set a reference 'handleClick' instead of invoke the function 'handleClick()' directly */}
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default Home;