import React, { useState, useEffect } from "react";
import { Link,useParams } from "react-router-dom";
import Axios from "axios";
function Pay(props) {
    const [arr, setArr] = useState({
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
              const {  carName, model, price, year } = res.data;
              setArr({  carName, model, price, year });
            } else {
              throw new Error("Failed to fetch data");
            }
          })
          .catch((err) => alert(err));
      }, [id]);
      const [name,setName]=useState('');
      const [email,setemail]=useState('');
      const [mobile,setMobile]=useState('');
      const handleSubmit = () => {
        const data = {
          name:name,
          email:email,
          mobile:mobile,
          carName: arr.carName,
          model: arr.model,
          price: arr.price,
        };
      
        Axios.post("http://localhost:4000/userRoute/register", data)
          .then((res) => {
            if (res.status === 200) {
              alert("Record added");
            } else {
              alert("Failed to add record");
            }
          })
          .catch((err) => alert("Error: " + err));
      
      };
      
    return (
      <div class="container justify-content-center">
       <form>
      

        <div class="mb-3">
            <label for="name" class="form-label"> Name:</label>
            <input type="text" class="form-control"onChange={(event)=>setName(event.target.value)}placeholder="Enter Your Name" id="name"/>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label"> Email:</label>
            <input type="email" class="form-control"onChange={(event)=>setemail(event.target.value)}placeholder="Enter Your E-mail" id="email"/>
        </div>
        <div class="mb-3">
            <label for="phno" class="form-label"> Mobile:</label>
            <input type="text" class="form-control" onChange={(event)=>setMobile(event.target.value)}placeholder="Enter Your Mobile Number" id="phno"/>
        </div>
        
        <div class="mb-3">
            <label for="car" class="form-label"> Brand:</label>
            <input type="text" class="form-control"defaultValue={arr.carName} id="car"/>
        </div>
        <div class="mb-3">
            <label for="model" class="form-label"> Carname:</label>
            <input type="text" class="form-control"defaultValue={arr.model} id="model"/>
        </div>
        <div class="mb-3">
            <label for="price" class="form-label"> Price:</label>
            <input type="text" class="form-control"defaultValue={arr.price} id="price"/>
        </div>
 <button onClick={handleSubmit} class="btn btn-success " type="submit"><Link to={`/registered/${id}`} class="text-decoration-none text-light">Submit</Link></button>
    
       </form>
      </div>
    );
  }
  
  export default Pay;
  