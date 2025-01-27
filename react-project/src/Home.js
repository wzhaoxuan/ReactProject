const Home = () =>{
    const handleClick = (name) => {
        console.log("Hello" + name);
    }
    return(
        <div className="Home">
            <h1>Welcome to My Portfolio</h1>
            {/* Set a reference 'handleClick' instead of invoke the function 'handleClick()' directly 
                To pass parameter to the function, we need to wrap the function into anonymous function*/}
            <button onClick={() => {handleClick('wzhaoxuan')}}>Click me</button>
        </div>
    );
}

export default Home;