import img1 from "./images/p1.avif";
import img2 from "./images/p2.avif";
import img3 from "./images/p3.avif";
import img4 from "./images/p4.avif";
import img5 from "./images/p5.avif";


function Details1(){

    return (
        <div>
          <div class="my-1 text-center "><h2>Mercedes Maybach S-Class</h2></div>
          <div className="container-fluid mb-3">
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
  </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} alt="img1" className="me-2 d-block w-100" style={{maxHeight:"80vh"}} />
          </div>
          <div className="carousel-item">
            <img src={img2} alt="img2" className="me-2 d-block w-100" style={{maxHeight:"80vh"}} />
          </div>
          <div className="carousel-item">
            <img src={img3} alt="img3" className="me-2 d-block w-100"style={{maxHeight:"80vh"}} />
          </div>
          <div className="carousel-item">
            <img src={img4} alt="img4" className="me-2 d-block w-100"style={{maxHeight:"80vh"}} />
          </div>
          <div className="carousel-item">
            <img src={img5} alt="img5" className="me-2 d-block w-100"style={{maxHeight:"80vh"}} />
          </div>
        </div>
        <button class="carousel-control-prev"  type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button"   data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
      </div>
    </div>
        </div>
    )
}
export default Details1;