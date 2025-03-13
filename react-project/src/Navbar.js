import { Link } from 'react-router-dom';

// Arrow function
const Navbar = () =>{
    /*
        To allow the react intercept request to the server, we need to use the Link component instead of a tags.
        The 'href' attribute should be replaced with the 'to' attribute.
    */
    return(
        <nav className="navbar">
            <h1>Portfolio.</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/aboutme">About Me</Link> 
                <Link to="/projects">Projects</Link>
                <Link to="/create">Skills</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;