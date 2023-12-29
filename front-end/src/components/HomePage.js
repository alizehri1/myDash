import React, { useEffect, useState } from 'react';

import axios from 'axios';
// import './home.css';

function HomePage() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:5001/api/readBlogs')
      .then((blogs) => {
        setBlogs(blogs.data);
      })
      .catch((err) => {
        console.log(err);
      });  }, []);
  console.log(blogs);
  const backgroundImageUrl =
    'https://static.wixstatic.com/media/5bfb6f_26f1a5c736e544e09c63c82a4c792645~mv2_d_3839_1306_s_2.jpg/v1/fill/w_1898,h_653,al_b,q_85,usm_0.66_1.00_0.01,enc_auto/5bfb6f_26f1a5c736e544e09c63c82a4c792645~mv2_d_3839_1306_s_2.jpg';
  const divStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    minHeight: '80vh',
    height: 'auto',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fafafa',
    fontFamily: 'Open Sans',
    position: 'relative',
    backgroundRepeat: 'no-repeat',
    marginTop: '-15px',
  };
  const paragraphStyle = {
    fontSize: '24px',
    padding: '10px',
    fontWeight: 'bold',
  };
  const contentStyle = {
    height: '80%',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'absolute',
    left: '30%',
    top: '10%',
    padding: '10px',
  };
  const container = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: '20px',
    backgroundColor: '#fff',
  };
  const blogContainerStyle = {
    width: '300px',
    marginBottom: '30px',
    padding: '20px',
    boxShadow: '0 4px 8px 0 rgba(0,0,01,0.2)',
    transition: '0.3s',
    borderRadius: '5px',
    backgroundColor: '#fff',
    color: '#333',
  };
  const blogSubtitleStyle = {
    marginTop: '0',
    fontSize: '18px',
  };
  const blogTitleStyle = {
    marginTop: '10px',
    fontSize: '24px',
  };

  const blogContentStyle = {
    marginTop: '10px',
    fontSize: '16px',
  };
  const emailStyle = {
    fontWeight: 'bold',
    color: '#088178',
    marginTop: '10px',
  };
  const homeHead = {
    fontSize: '45px',
    color: '#088178',
    textAlign: 'center',
    margin: '15px',
  };

  return (
    <div>
      <div style={divStyle}>
        <div style={contentStyle}>
          <p style={paragraphStyle}>Travel Blog</p>
          <h1>
            Tell A <span style={{ color: '#088178' }}>Tale.</span>
          </h1>
          <p style={paragraphStyle}>
            99 Destinations, 99 Stories, One Incredible{' '}
            <span style={{ color: '#088178' }}>Blog</span>
          </p>
        </div>
      </div>
      <h1 className='text-center my-5' style={homeHead}>
        LATEST BLOGS
      </h1>

      <section id='main' className='container'>
        {blogs.map((data)=>{
          return(
            <div>
            <span>{data.email}</span><br>
            </br>
            <h4>{data.name}</h4>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default HomePage;
