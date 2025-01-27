// Arrow function
const Navbar = () =>{
    return(
        <nav className="navbar">
            <h1>ZX Portfolio</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/aboutme" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>About Me</a> 
            </div>
        </nav>
    );
}

export default Navbar;