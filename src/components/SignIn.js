import React, { useState } from 'react';
import Axios from 'axios';
import Hasher from './hasher'; 

function SignIn() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (pass !== confirmPass) {
      alert('Passwords do not match');
      return;
    }

    Hasher(pass)
      .then((hashedPassword) => {
        console.log('Hashed Password:', hashedPassword);

        const data = {
          email: email,
          password: hashedPassword,
        };

        Axios.post('http://localhost:4000/loginRoute/register/', data)
          .then((res) => {
            if (res.status === 200) {
              alert('Registration successful. You can now log in.');
            } else {
              Promise.reject();
            }
          })
          .catch((err) => alert(err))
          .finally(() => {
            event.target.reset();
          });
      })
      .catch((error) => {
        console.error('Error hashing password:', error);
      });
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
            {confirmPass && (
              <input
                type='password'
                id='confirmPassword'
                onChange={(event) => setConfirmPass(event.target.value)}
                className='form-control mb-3 col-8'
                placeholder='Confirm your password'
              />
            )}
            <button type='submit' className='btn btn-success d-flex justify-content-center' style={{ margin: '0px auto' }}>
              Register
            </button>
          </form>
        </center>
      </form>
    </div>
  );
}

export default SignIn;
