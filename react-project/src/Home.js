import { useState } from "react";
const Home = () =>{
    // useState() is a react hook to allow storing and updating values in components
    const [name, setName] = useState('zhaoxuan');
    const handleClick = (name) => {
        setName('wongzhaoxuan')
        console.log("Hello" + name);
    }
    return(
        <div className="Home">
            <h1>Welcome to My Portfolio</h1>
            <p>{name}</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default Home;