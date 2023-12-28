import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  createTheme,
  ThemeProvider,
} from '@mui/material';

const Nav = () => {
  const customTheme = createTheme({
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px 80px',
            backgroundColor: '#e0e4f8',
            boxShadow: '0px 5px 15px rgba(41, 16, 16, 0.5)',
            zIndex: 999,
            position: 'sticky',
            top: 0,
            left: 0,
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            fontFamily: 'Poppins',
            fontSize: '30px',
            fontWeight: 800,
          },
          h6: {
            fontFamily: 'Georgia, Times, serif',
            color: '#088178',
            fontWeight: 900,
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            textDecoration: 'none',
            fontWeight: 900,
            color: '#088278',
            fontSize: '16px',
            transition: '0.3s ease',
          },
          underlineHover: {
            '&:hover': {
              color: '#088178',
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={customTheme}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <ul
              className='Nav-ul'
              style={{ listStyle: 'none', padding: 0, margin: 0 }}
            >
              <li style={{ display: 'inline', marginRight: '10px' }}>
                <Typography variant='h6'>
                  {' '}
                  <Link to='/'>Blogs</Link>
                </Typography>
              </li>
              <li style={{ display: 'inline', marginRight: '10px' }}>
                <Link to='/add'>Add Blogs</Link>
              </li>
              <li style={{ display: 'inline', marginRight: '10px' }}>
                <Link to='/signup'>Register</Link>
              </li>
              <li style={{ display: 'inline', marginRight: '10px' }}>
                <Link to='/login'>Log-In</Link>
              </li>
              {/* Add other menu items */}
            </ul>
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Nav;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   createTheme,
//   ThemeProvider,
// } from '@mui/material';

// const Nav = () => {
//   const customTheme = createTheme({
//     components: {
//       MuiAppBar: {
//         styleOverrides: {
//           root: {
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             padding: '20px 80px',
//             backgroundColor: '#',
//             boxShadow: '0px 5px 15px rgba(41, 16, 16, 0.5)',
//             zIndex: 999,
//             position: 'sticky',
//             top: 0,
//             left: 0,
//           },
//         },
//       },
//       MuiTypography: {
//         styleOverrides: {
//           root: {
//             fontFamily: 'Poppins',
//             fontSize: '30px',
//             fontWeight: 800,
//           },
//           h6: {
//             fontFamily: 'Georgia, Times, serif',
//             color: '#088178',
//             fontWeight: 900,
//           },
//         },
//       },
//       MuiLink: {
//         styleOverrides: {
//           root: {
//             textDecoration: 'none',
//             fontWeight: 600,
//             color: '#1a1a1a',
//             fontSize: '16px',
//             transition: '0.3s ease',
//           },
//           underlineHover: {
//             '&:hover': {
//               color: '#088178',
//               textDecoration: 'none',
//             },
//           },
//         },
//       },
//     },
//   });

//   return (
//     <ThemeProvider theme={customTheme}>
//       <AppBar position='static'>
//         <Toolbar>
//           <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
//             <ul
//               className='Nav-ul'
//               style={{ listStyle: 'none', padding: 0, margin: 0 }}
//             >
//               <li style={{ display: 'inline', marginRight: '10px' }}>
//                 <Typography
//                   variant='h6'
//                   component={Link}
//                   to='/'
//                   sx={{ textDecoration: 'none', color: '#1a1a1a' }}
//                 >
//                   Blogs
//                 </Typography>
//               </li>
//               <li style={{ display: 'inline', marginRight: '10px' }}>
//                 <Typography
//                   variant='h6'
//                   component={Link}
//                   to='/add'
//                   sx={{ textDecoration: 'none', color: '#1a1a1a' }}
//                 >
//                   Add Blogs
//                 </Typography>
//               </li>
//               <li style={{ display: 'inline', marginRight: '10px' }}>
//                 <Typography
//                   variant='h6'
//                   component={Link}
//                   to='/signup'
//                   sx={{ textDecoration: 'none', color: '#1a1a1a' }}
//                 >
//                   Register
//                 </Typography>
//               </li>
//             </ul>
//           </Typography>
//         </Toolbar>
//       </AppBar>
//     </ThemeProvider>
//   );
// };

// export default Nav;
