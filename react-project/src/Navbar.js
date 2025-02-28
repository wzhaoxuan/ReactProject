import { Link } from 'react-router-dom';

// Arrow function
const Navbar = () =>{
    /*
        To allow the react intercept request to the server, we need to use the Link component instead of a tags.
        The 'href' attribute should be replaced with the 'to' attribute.
    */
    return(
        <nav className="navbar">
            <h1>ZX Portfolio</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/aboutme" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>About Me</Link> 
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;