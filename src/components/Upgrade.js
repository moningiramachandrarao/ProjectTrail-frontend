import React, { useState} from "react";
import Axios from "axios";
import {Link} from "react-router-dom";
function Upgrade(){
    const [name,setName]=useState('');
    const email="";
    const [mobile,setMobile]=useState('');
    const[carName,setcarName]=useState('');
    const[model,setModel]=useState('');
    const[type,setType]=useState('');
    const redirect=()=>{
      if(localStorage.getItem('islogged')==='true'){
      handleSubmit();
      } 
      else{
        window.location.href='/#/login';
      }
    }
    const handleSubmit = () => {
        const data = {
          name:name,
          email:email,
          mobile:mobile,
          carName: carName,
          model:model,
          type:type

        };
       
      
        Axios.post("http://localhost:4000/upgradeRoute/add-upgrade/", data)
          .then((res) => {
            if (res.status === 200) {
              alert("Successfully Registered");
            } else {
              alert("Failed to add record");
            }
          })
          .catch((err) => alert("Error: " + err));
      
      };
    return(<div class="container"> 
        <div class="mb-3">
            <label for="name" class="form-label"> Name:</label>
            <input type="text" class="form-control"onChange={(event)=>setName(event.target.value)}placeholder="Enter Your Name" id="name"/>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label"> Email:</label>
            <input type="email" class="form-control"defaultValue={localStorage.getItem("email")}placeholder="Enter Your E-mail" id="email"/>
        </div>
        <div class="mb-3">
            <label for="phno" class="form-label"> Mobile:</label>
            <input type="text" class="form-control" onChange={(event)=>setMobile(event.target.value)}placeholder="Enter Your Mobile Number" id="phno"/>
        </div>
        
        <div class="mb-3">
            <label for="car" class="form-label"> Brand:</label>
            <input type="text" class="form-control" onChange={(event)=>setcarName(event.target.value)}id="car" placeholder="Enter Brand"/>
        </div>
        <div class="mb-3">
            <label for="model" class="form-label"> Carname:</label>
            <input type="text" class="form-control" id="model" onChange={(event)=>setModel(event.target.value)}placeholder="Enter carname"/>
        </div>
        <div class="mb-3">
            <label for="type" class="form-label"> Type:</label>
            <input type="text" class="form-control"onChange={(event)=>setType(event.target.value)} placeholder="Enter Type" id="type"/>
        </div>
        <button onClick={redirect} style={{ backgroundColor: "#ffac3c", color: "#282c4c" }} class="btn btn-mute" type="submit">Submit</button>
        <Link to="/services"><button style={{ backgroundColor: "#ffac3c", color: "#282c4c" }} class="btn btn-mute mx-2" >Go back</button></Link>

    </div>
    )
}
export default Upgrade;