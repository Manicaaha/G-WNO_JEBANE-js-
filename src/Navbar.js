import { Link } from "react-router-dom"

function Navbar(){
return(
    <nav>
        <Link to='/'><li>Home</li></Link>
        <Link to='/students'><li>Students</li></Link>
    </nav>
)
}

export default Navbar