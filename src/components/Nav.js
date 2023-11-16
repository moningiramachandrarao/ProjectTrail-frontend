import {  Link } from 'react-router-dom';
import "./footer.css"
function Nav(){
    const handlelogout=()=>{
        localStorage.setItem("islogged",'false');
        window.location.reload();
    }
    return(
        
            <div class="container-fluid">
                <nav class="navbar">
                    <div class="navbar-brand"><Link to="/home" class="nav-link fs-2  m-2 yellow">eDriveSpace</Link></div>
                    <div class="nav">
                        <Link to="/home" class="nav-link m-2 yellow fs-5 ">Home</Link>
                        <Link to="/shop" class="nav-link m-2 yellow fs-5 ">Shop</Link>
                        <Link to="/services" class="nav-link m-2 yellow fs-5">Services</Link>
                        <Link to="/contactus" class="nav-link m-2 yellow fs-5 ">Contact Us</Link>
                        <Link to="/faq" class="nav-link m-2 yellow fs-5 ">FAQ</Link>
                        {(localStorage.getItem('islogged')==='true') ? <button class="btn btn-warning" onClick={handlelogout} >Logout</button> : <Link to="/login" class="nav-link m-2 yellow fs-5 ">login</Link>}
                    </div>
                </nav>
            </div>
        
    )
}
export default Nav