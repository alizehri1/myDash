import React, { useState } from 'react';
// import './signup.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
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
        .post('http://localhost:5001/api/login', {
          email: data.email,
          password: data.password,
        })
        .then((result) => {
          console.log(result, 'gaya data');
          localStorage.setItem('token', result.data.authToken);
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
      email: '',
      password: '',
    });
  };

  const mainStyle = {
    width: '50%',
    maxWidth: '410px',
    margin: '0 ',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow:
      '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',

    transform: 'translateX(100%)',
  };

  const boxInputStyle = {
    width: '100%',
    height: '45px',
    margin: '10px',
    marginBottom: '20px',
    padding: '5px 8px',
    borderRadius: '7px',
    boxSizing: 'border-box', // Ensure padding and border are included in the width
    fontSize: '16px', // Adjust font size for smaller screens
  };

  const loginBtnStyle = {
    textAlign: 'center',
    marginTop: '10px',
    borderRadius: '7px',
    backgroundColor: '#088178',
    color: 'white',
    border: 'none',
    fontSize: '20px',
    lineHeight: '48px',
    padding: '0 16px',
    width: '100%',
    cursor: 'pointer',
  };

  const responsiveMainStyle = {
    width: '90%',
    height: '100vh',
    margin: '0 auto',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flexEnd',
  };
  const text = {
    fontSize: '16px',
    textAlign: 'center',
  };
  return (
    <main style={responsiveMainStyle} className='mainBox'>
      <div style={mainStyle}>
        <form action='POST' onSubmit={collectData}>
          <input
            type='email'
            name='email'
            placeholder='Enter Your Email Address'
            required
            style={boxInputStyle}
            value={data.email}
            onChange={changeHandler}
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            required
            style={boxInputStyle}
            value={data.password}
            onChange={changeHandler}
          />

          <button style={loginBtnStyle}>Submit</button>
        </form>

        <Link to='/login'>
          <p style={text}>Already have an account?</p>
        </Link>
      </div>
    </main>
  );
};

export default Login;
