const Home = () =>{
    const handleClick = (name, e) => {
        console.log("Hello" + name, e.target);
    }
    return(
        <div className="Home">
            <h1>Welcome to My Portfolio</h1>
            {/* Set a reference 'handleClick' instead of invoke the function 'handleClick()' directly 
                To pass parameter to the function, we need to wrap the function into anonymous function
                Allow an event occur when user click on the button*/}
            <button onClick={(e) => {handleClick('wzhaoxuan', e)}}>Click me</button>
        </div>
    );
}

export default Home;