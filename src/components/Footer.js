import "./footer.css"
import 'font-awesome/css/font-awesome.min.css';
function Footer(){
    return(
        <div>
            <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
    <div class="col mb-3">
      <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
      </a>
      <p class="nav-link navbar-brand fs-2 p-2 m-2 yellow" style={{fontfamily: 'Racing Sans One'}}>eDriveSpace</p>
    </div>

    <div class="col mb-3">

    </div>

    <div class="col mb-3">
      <h5>Links</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#/home" class="nav-link p-0 yellow">Home</a></li>
        <li class="nav-item mb-2"><a href="#/shop" class="nav-link p-0 yellow">Shop</a></li>
        <li class="nav-item mb-2"><a href="#/services" class="nav-link p-0 yellow">Services</a></li>
        <li class="nav-item mb-2"><a href="#/contactus" class="nav-link p-0 yellow">Contact Us</a></li>
        <li class="nav-item mb-2"><a href="#/faq" class="nav-link p-0 yellow">FAQ's</a></li>
      </ul>
    </div>

    <div class="col mb-3">
          <h5>Connect Us</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="https://m.facebook.com/" class="nav-link p-0 yellow" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-facebook p-2"></i>Facebook
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="https://www.instagram.com/edrivespacecars/" class="nav-link p-0 yellow" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-instagram p-2"></i>Instagram
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="https://x.com/eDriveSpace?t=yBBoF69OnFSjCUp8RdsSdA&s=09" class="nav-link p-0 yellow" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-twitter p-2"></i>Twitter
              </a>
            </li>
          </ul>
        </div>

    <div class="col mb-3">
      <h5>MailUs</h5>
      <p className="yellow">
        eDriveSpace,<br/>
        Near Main Road,<br />
        Opp. SBI Bank,<br />
        Amaravathi, 533236, <br />
        Andhra Pradesh, India
      </p>
    </div>
    <div className="col mb-2"></div>
    <div className="col mb-2"></div>
    <p class="text-center yellow para">© 2023 eDriveSpace, India</p>
  </footer>
        </div>
    )
}
export default Footer;