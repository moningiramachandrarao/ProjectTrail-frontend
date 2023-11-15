// Login.jsx

import React, { useState } from 'react';
import Axios from 'axios';
import Hasher from './hasher';
import { Link } from 'react-router-dom';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const redirectToHome = () => {
    window.location.href = '/home';
  };
  const submit = (email, password) => {
    Axios.get('http://localhost:4000/loginRoute/get-password/' + email)
      .then((res) => {
        if (res.status === 200) {
          const data = res.data;
          if (!data) {
            alert('Email is not registered');
            return;
          }

          Hasher(password)
            .then((hashedPassword) => {
              if (hashedPassword === data.password) {
                localStorage.setItem('username', data.name);
                localStorage.setItem('id', data._id);
                localStorage.setItem('islogged', true);

                onLogin();
                redirectToHome();
              } else {
                alert('Login Failed (incorrect password or email)');
              }
            })
            .catch((error) => {
              console.error('Error hashing password:', error);
            });
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submit(email, pass);
  };

  return (
    <div>
      <form>
        <center className='row'>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              id='email'
              onChange={(event) => setEmail(event.target.value)}
              className='form-control mb-3 col-8'
              placeholder='Enter your email'
            />
            <input
              type='password'
              id='password'
              onChange={(event) => setPass(event.target.value)}
              className='form-control mb-3 col-8'
              placeholder='Enter your password'
            />
            <button
              type='submit'
              className='btn btn-success d-flex justify-content-center'
              style={{ margin: '0px auto' }}
            >
              Login
            </button>
          </form>
          <p>
            Don't have an account?{' '}
            <Link to='/signin'>Sign up here</Link>
          </p>
        </center>
      </form>
    </div>
  );
}

export default Login;
