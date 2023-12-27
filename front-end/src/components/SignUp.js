import React, { useState } from 'react';
// import './signup.css';
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
        .post('http://localhost:5000/api/signup', {
          name: data.name,
          email: data.email,
          password: data.password,
        })
        .then((result) => {
          console.log(result, 'gaya data');
          navigate('/');
        })
        .catch((err) => {
          console.log(err);
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

  const mainStyle = {
    width: '50%', // Adjusted width for responsiveness
    maxWidth: '410px',
    margin: '0 ',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow:
      '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    // border: '1px solid red',
    // position: 'absolute',
    // top: '30%',
    // left: '30%', // Center the container horizontally
    transform: 'translateX(100%)', // Center the container horizontally
  };
  const paragraphStyles = {
    fontSize: '20px',
    marginTop: '18px',
  };
  const boxInputStyle = {
    width: '100%', // Set width to 100% for responsiveness
    height: '45px',
    margin: '10px',
    marginBottom: '20px', // Adjusted bottom margin for spacing
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
    width: '100%', // Adjusted width for responsiveness
    cursor: 'pointer',
  };
  const h5 = {
    fontSize: '70px',
    lineHeight: '64px',
    fontWeight: '700',
    color: '#1976d2', // Changed the color
    textAlign: 'center', // Center the text
    margin: '0', // Remove margin to better fit smaller screens
    padding: '0', // Remove padding to better fit smaller screens
  };
  const logLink = {
    textDecoration: 'none',
    color: 'black',
    fontFamily: 'arial',
    fontSize: '25px',
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
    width: '90%',
    margin: '0 auto',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flexEnd',
  };

  return (
    <main style={responsiveMainStyle} className='mainBox'>
      <div style={container}>
        <h5 style={h5}>Lets Connect</h5>
      </div>
      <div style={mainStyle}>
        <form action='POST' onSubmit={collectData}>
          <input
            type='text'
            name='name'
            placeholder='Enter Your First Name'
            required
            style={boxInputStyle}
            value={data.name}
            onChange={changeHandler}
          />

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

        <Link style={logLink} to='/login'>
          Already have an account
        </Link>
      </div>
    </main>
  );
};

export default SignUp;
