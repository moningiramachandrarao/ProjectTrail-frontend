
import {Link} from "react-router-dom";
import React, { useState } from 'react';
import Axios from 'axios';
import Hasher from './hasher';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState('');
  const [registrationError, setRegistrationError] = useState('');



  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setPasswordMatchError('Passwords do not match');
      return;
    }

    setPasswordMatchError('');

    try {
      const hashedPassword = await Hasher(password);

      const data = {
        email: email,
        password: hashedPassword
      };

      await Axios.post('http://localhost:4000/loginRoute/register/', data).then((res)=>{
        if(res.status===200){
          alert("Registration Successful");
          setTimeout(() => {
            window.location.href="/#/home";
          }, 2000);
        }
        else{
          console.error('Unexpected status code:', res.status);
        }
      });

      
    } 
    catch (error) {
      setRegistrationError('Error during registration. Please try again.');
    } 
    finally {
      event.target.reset();
    }
  };

  return (
    <div className="container">
      <div style={{ textAlign: 'center' }}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            onChange={(event) => setEmail(event.target.value)}
            className="form-control mb-3 col-8"
            placeholder="Enter your email"
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={(event)=>{setPassword(event.target.value)}}
            className="form-control mb-3 col-8"
            placeholder="Enter your password"
          />

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            onChange={(event)=>{setConfirmPassword(event.target.value)}}
            className="form-control mb-3 col-8"
            placeholder="Confirm your password"
          />

          <button type="submit" className="btn btn-success" style={{ margin: '0px auto' }}>
            Register
          </button>
        </form>

        <div style={{ marginTop: '10px' }}>
          <Link to="/">Login</Link>
        </div>

        {passwordMatchError && <div style={{ color: 'red' }}>{passwordMatchError}</div>}
        {registrationError && <div style={{ color: 'red' }}>{registrationError}</div>}
      </div>
    </div>
  );
}

export default SignIn;
