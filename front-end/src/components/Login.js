import React, { useState } from 'react';

const Login = () => {
  const [names, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const collectData = (e) => {
    e.preventDefault();

    console.log(names, email, pass);
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
  const h5 = {
    fontSize: '50px',
    lineHeight: '64px',
    fontWeight: '700',
    color: '#088178',
    margin: '0',
    padding: '0',
  };
  const container = {
    position: 'absolute',
    top: '30%',
    left: '30%',
    transform: 'translateX(-100%)',
    fontSize: '25px',
    marginLeft: '25px',
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
  return (
    <main style={responsiveMainStyle} className='mainBox'>
      <div style={container}>
        <h5 style={h5}>Login To Proceed </h5>
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
          <button style={loginBtnStyle}>Submit</button>
        </form>
      </div>
    </main>
  );
};

export default Login;
