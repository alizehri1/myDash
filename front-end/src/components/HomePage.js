import React from 'react';
// import './home.css';

function HomePage() {
  const backgroundImageUrl =
    'https://static.wixstatic.com/media/5bfb6f_26f1a5c736e544e09c63c82a4c792645~mv2_d_3839_1306_s_2.jpg/v1/fill/w_1898,h_653,al_b,q_85,usm_0.66_1.00_0.01,enc_auto/5bfb6f_26f1a5c736e544e09c63c82a4c792645~mv2_d_3839_1306_s_2.jpg';
  const divStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    height: '80vh',
    width: '100%',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    color: '#fafafa',
    fontFamily: 'Open Sans',
    position: 'relative',
    backgroundRepeat: 'no-repeat',
    marginTop: '-15px',
  };
  const paragraphStyle = {
    fontSize: '24px',
  };
  const contentStyle = {
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'absolute',
    left: '33%',
    top: '10%',
    padding: '10px',
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
      <h1 className='text-center my-5' style={{ color: '#088178' }}>
        LATEST BLOGS
      </h1>

      <section id='main' className='container'>
        {/* Add content for the latest blogs section */}
      </section>
    </div>
  );
}

export default HomePage;
