import React, { useState } from 'react';
import './signup.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const SignUp = () => {
  let navigate = useNavigate();
  // const [names, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [pass, setPass] = useState('');
  // const [conpass, setConPass] = useState('');
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const collectData = (e) => {
    e.preventDefault();

    // console.log(names, email, pass, conpass);
    try {
      axios
        .post('http://localhost:5001/api/signup', {
          name: data.name,
          email: data.email,
          password: data.password,
        })
        .then((result) => {
          console.log(result);
          navigate('/');
        })
        .catch((err) => {
          console.log(err);
          alert(err.response.data.msg);
        });
    } catch (e) {
      console.log(e);
    }
    setData({
      name: '',
      email: '',
      password: '',
    });
  };

  return (
    <main className='main'>
      <h5 className='heading-5'>Lets Connect</h5>

      <div className='container'>
        <form action='POST' onSubmit={collectData}>
          <input
            type='text'
            name='name'
            placeholder='Enter Your First Name'
            required
            className='box-input '
            value={data.name}
            onChange={changeHandler}
          />

          <input
            type='email'
            name='email'
            placeholder='Enter Your Email Address'
            required
            className='box-input '
            value={data.email}
            onChange={changeHandler}
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            required
            className='box-input '
            value={data.password}
            onChange={changeHandler}
          />

          <button className='login-btn '>Submit</button>
          <div className='log-2'>
            <Link className='log-link' to='/login'>
              Already have an account
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default SignUp;
