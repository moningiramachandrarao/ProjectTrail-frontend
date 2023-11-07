import {  Link } from 'react-router-dom';
import "./footer.css"
function Nav(){
    return(
        
            <div class="container-fluid">
                <nav class="navbar">
                    <div class="navbar-brand"><Link to="/home" class="nav-link fs-2 p-2 m-2 yellow">eDriveSpace</Link></div>
                    <div class="nav">
                        <Link to="/home" class="nav-link m-2 yellow fs-5 p-2">Home</Link>
                        <Link to="/shop" class="nav-link m-2 yellow fs-5 p-2">Shop</Link>
                        <Link to="/services" class="nav-link m-2 yellow fs-5 p-2">Services</Link>
                        <Link to="/contactus" class="nav-link m-2 yellow fs-5 p-2">Contact Us</Link>
                        <Link to="/faq" class="nav-link m-2 yellow fs-5 p-2">FAQ</Link>

                    </div>
                </nav>
            </div>
        
    )
}
export default Nav;