import React, { useState } from 'react';
import Axios from 'axios';
import Hasher from './hasher'; 

function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const redirectToHome = () => {
    window.location.href = '/';
  };

  const submit= (email, password) => {
    setLoading(true);

    Axios.get('http://localhost:4000/loginRoute/get-password/' + email)
      .then((res) => {
        if (res.status === 200) {
          const data = res.data;
          if (!data) {
            setMessage("Email is not registered");
            setLoading(false);
            return;
          }

          Hasher(password)
            .then((hashedPassword) => {
              if (hashedPassword === data.password) {
                localStorage.setItem('username', data.name);
                localStorage.setItem('id', data._id);
                localStorage.setItem('islogged', true);

                redirectToHome();
              } else {
                setMessage("Login Failed(incorrect password or email)");
                setLoading(false);
              }
            })
            .catch((error) => {
              console.error('Error hashing password:', error);
              setLoading(false);
            });
        } else {
          setLoading(false);
        }
      })
      .catch((err) => {
        alert(err);
        setLoading(false);
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
            <button type='submit' className='btn btn-success d-flex justify-content-center' style={{ margin: '0px auto' }}>
              Login
            </button>
          </form>
        </center>
      </form>
    </div>
  );
}

export default Login;
