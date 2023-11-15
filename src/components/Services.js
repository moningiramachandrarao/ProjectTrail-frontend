
import React from 'react';
import {Link} from "react-router-dom";
function Services() {
  return (
    <div className="container mt-4">
      <h1 className="text-center yellow">Our Services</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4 "style={{backgroundColor:"#ffac3c"}}>
        <div className="card-body" >
              <h5 className="card-title" style={{color:"#282c4c"}}>Car Maintenance</h5>
              <p className="card-text" style={{color:"#282c4c"}}>
                We offer comprehensive car maintenance services such that your
                vehicle in top condition.
              </p>
              <Link to="/maintain"> <button class="btn btn-primary"> Maintainence</button></Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4" style={{backgroundColor:"#ffac3c"}}>
            <div className="card-body">
              <h5 className="card-title" style={{color:"#282c4c"}}>Car Repairs</h5>
              <p className="card-text" style={{color:"#282c4c"}}>
                Our skilled technicians provide high-quality car repair
                services to get you back on the road.
              </p>
             <Link to="/repair"> <button className="btn btn-primary" >Repair</button></Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4" style={{backgroundColor:"#ffac3c"}}>
            <div className="card-body">
              <h5 className="card-title" style={{color:"#282c4c"}}>Car Upgrades</h5>
              <p className="card-text" style={{color:"#282c4c"}}>
                Enhance your car's performance and appearance with our premium
                upgrade services.
              </p>
           <Link to="/upgrade"> <button class="btn btn-primary" >Upgrades</button></Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
