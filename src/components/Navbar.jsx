import { Link } from "react-router-dom";

function Navbar() {
    return(
        <header>
          <div className="container">
            <Link to="/">
                <h1> Workout Hub </h1>
            </Link>
          </div>
        </header>
    );
    
}


export default Navbar;