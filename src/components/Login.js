import React, { useState } from 'react';
import Axios from 'axios';
import Hasher from './hasher';
import { Link } from 'react-router-dom';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const redirectToHome = () => {
    window.location.href = '/';
  };
  const submit = (event) => {
    event.preventDefault();
    console.log('http://localhost:4000/loginRoute/get-password/' + email);
    Axios.get('http://localhost:4000/loginRoute/get-password/' + email)
      .then((res) => {
        if (res.status === 200) {
          const data = res.data;
          if (!data) {
            console.log('Email is not registered');
            alert('Email is not registered');
            return;
          }

          Hasher(pass)
            .then((hashedPassword) => {
              if (hashedPassword === data.password) {
              
                localStorage.setItem('id', data._id);
                localStorage.setItem('email',data.email);
                localStorage.setItem('islogged', true);

                redirectToHome();
              } else {
                console.log('Login Failed (incorrect password or email)');
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


  return (
    <div className='container'>
      <form>
        <center className='row '>
          <form>
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
              className='btn btn-success d-flex justify-content-center'
              style={{ margin: '0px auto' }}
              onClick={submit}
            >
              Login
            </button>
          </form>
          <p>
            Don't have an account?{' '}
            <Link to='/signin' >Sign up here</Link>
          </p>
        </center>
      </form>
    </div>
  );
}

export default Login;