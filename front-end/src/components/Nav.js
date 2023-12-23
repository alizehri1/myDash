import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';

const Nav = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          <ul
            className='Nav-ul'
            style={{ listStyle: 'none', padding: 0, margin: 0 }}
          >
            <li style={{ display: 'inline', marginRight: '10px' }}>
              <Link to='/'>Products</Link>
            </li>
            <li style={{ display: 'inline', marginRight: '10px' }}>
              <Link to='/add'>Add Products</Link>
            </li>
            {/* <li style={{ display: 'inline', marginRight: '10px' }}>
              <Link to='/update'>Update Products</Link>
            </li> */}
            <li style={{ display: 'inline', marginRight: '10px' }}>
              <Link to='/login'>logIn</Link>
            </li>

            <li style={{ display: 'inline', marginRight: '10px' }}>
              <Link to='/logout'>Logout</Link>
            </li>

            <li
              className='reg'
              style={{
                marginRight: '10px',
                display: 'inline',
                marginLeft: 'auto',
              }}
            >
              <Link to='/signup'>Register Here</Link>
            </li>
          </ul>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
