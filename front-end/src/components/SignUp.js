import React, { useState } from 'react';
// import './signup.css';
import { Link } from 'react-router-dom';
// import axios from 'axios';
const SignUp = () => {
  const [names, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [conpass, setConPass] = useState('');
  const collectData = (e) => {
    e.preventDefault();

    console.log(names, email, pass, conpass);
    // try {
    //   axios.post('http://localhost:000/create', {
    //     names,
    //     email,
    //     pass,
    //   });
    // } catch (e) {
    //   console.log(e);
    // }
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
    width: '90%', // Adjusted width for smaller screens
    // maxWidth: '410px', // Added a max-width for larger screens
    margin: '0 auto', // Center the main container horizontally
    padding: '20px', // Added padding for spacing
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
            value={names}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type='email'
            name='email'
            placeholder='Enter Your Email Address'
            required
            style={boxInputStyle}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            name='pass'
            placeholder='Password'
            required
            style={boxInputStyle}
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <input
            type='password'
            name='cpass'
            placeholder='Confirm Password'
            required
            style={boxInputStyle}
            value={conpass}
            onChange={(e) => setConPass(e.target.value)}
          />
          <button style={loginBtnStyle}>Submit</button>
          {/* <input type='button' value='signup' style={loginBtnStyle} /> */}
        </form>
        <p style={paragraphStyles}>or</p>
        <br />
        <Link style={logLink} to='/login'>
          Already have an account
        </Link>
      </div>
    </main>
  );
};

export default SignUp;
