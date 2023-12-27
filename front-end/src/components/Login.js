import React, { useState } from 'react';
// import './signup.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
  
  let navigate=useNavigate()
  // const [names, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [pass, setPass] = useState('');
  // const [conpass, setConPass] = useState('');
  const [data, setData] = useState({
    name: '', email: '',
    password: ''
  })
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const collectData = (e) => {
    e.preventDefault();

    // console.log(names, email, pass, conpass);
    try {
      axios.post('http://localhost:5000/api/login', {  
        email: data.email,
        password: data.password
      }).then((result)=>{
        console.log(result, 'gaya data')
        localStorage.setItem('token', result.data.authToken)
        navigate('/')

      }).catch((err)=>{
        console.log("axios me masla")
        alert('Wrong credentials')
      });
     
    } catch (e) {
      console.log(e);
    }
    setData({
    
      email: '',
      password: ''
    })
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
    backgroundColor: '#1976d2',
    color: 'white',
    border: 'none',
    fontSize: '20px',
    lineHeight: '48px',
    padding: '0 16px',
    width: '100%',
    cursor: 'pointer',
  };
  const h5 = {
    fontSize: '50px',
    lineHeight: '64px',
    fontWeight: '700',
    color: '#1976d2',

    margin: '0',
    padding: '0',
  };
  const container = {
    position: 'absolute',
    top: '30%',
    left: '30%', // Center the container horizontally
    transform: 'translateX(-100%)', // Center the container horizontally
    fontSize: '25px',
    marginLeft: '25px',
  };
  const responsiveMainStyle = {
    width: '90%', // Adjusted width for smaller screens
    height: '100vh',
    margin: '0 auto', // Center the main container horizontally
    padding: '20px', // Added padding for spacing
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flexEnd',
  };
  return (
    <main style={responsiveMainStyle} className='mainBox'>
      <div style={container}>
        <h5 style={h5}>Login To Proceed </h5>
      </div>
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
          {/* <input type='button' value='signup' style={loginBtnStyle} /> */}
        </form>
        <p >or</p>
        <br />
        <Link  to='/login'>
          Already have an account
        </Link>
      </div>
    </main>
  );
};

export default Login;
