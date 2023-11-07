import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Axios from "axios";

function ItemDetails() {
  const [arr, setArr] = useState({
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    img5: "",
    img6: "",
    carName: "",
    model: "",
    price: "",
    year: "",
  });
  const { id } = useParams();

  useEffect(() => {
    Axios.get(`http://localhost:4000/useRoute/${id}`)
      .then((res) => {
        if (res.status === 200) {
          const { img1, img2, img3, img4, img5, img6, carName, model, price, year } = res.data;
          setArr({ img1, img2, img3, img4, img5, img6, carName, model, price, year });
        } else {
          throw new Error("Failed to fetch data");
        }
      })
      .catch((err) => alert(err));
  }, [id]);

  return (
    <div className="container">
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type of="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="5"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={arr.img1} alt="car1" className="me-2 d-block w-100" style={{ maxHeight: "90vh" }} />
          </div>
          <div className="carousel-item">
            <img src={arr.img2} alt="car2" className="me-2 d-block w-100" style={{ maxHeight: "90vh" }} />
          </div>
          <div className="carousel-item">
            <img src={arr.img3} alt="car3" className="me-2 d-block w-100" style={{ maxHeight: "90vh" }} />
          </div>
          <div className="carousel-item">
            <img src={arr.img4} alt="car4" className="me-2 d-block w-100" style={{ maxHeight: "90vh" }} />
          </div>
          <div className="carousel-item">
            <img src={arr.img5} alt="car5" className="me-2 d-block w-100" style={{ maxHeight: "90vh" }} />
          </div>
          <div className="carousel-item">
            <img src={arr.img6} alt="car6" className="me-2 d-block w-100" style={{ maxHeight: "90vh" }} />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
      <div className="bg-light text-center my-3">
        <h2>{arr.carName}</h2>
        <p>Model: {arr.model}</p>
        <p>Year: {arr.year}</p>
        <p>Price: {arr.price}</p>
        <div>
          <Link to="/shop" className="btn btn-outline-primary m-2">
            Go Back
          </Link>
          <Link to={`/pay/${id}`} className="btn btn-outline-primary m-2">
            Pay
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
