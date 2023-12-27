import React from 'react';
import './home.css';

function HomePage() {
  return (
    <div>
      <section id='hero'>
        <div className='content'>
          <p>Travel Blog</p>
          <h1>
            Tell A <span style={{ color: '#088178' }}>Tale.</span>
          </h1>
          <p>
            99 Destinations, 99 Stories, One Incredible{' '}
            <span style={{ color: '#088178' }}>Blog</span>
          </p>
        </div>
      </section>

      {/* <section id='blog-form'>
        <div className='container'>
          <h1 className='my-4' style={{ color: '#088178' }}>
            ADD YOUR BLOG
          </h1>
          <form className='add-blog'>
            <div className='mb-3'>
              <label htmlFor='name' className='form-label'>
                Full Name
              </label>
              <input
                type='text'
                className='form-control'
                id='name'
                name='name'
                placeholder='Enter name'
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>
                Email Address
              </label>
              <input
                type='text'
                className='form-control'
                id='email'
                name='email'
                placeholder='Enter Email'
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='date' className='form-label'>
                Blog Date
              </label>
              <input
                type='date'
                className='form-control'
                id='date'
                name='date'
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='title' className='form-label'>
                Blog Title
              </label>
              <input
                type='text'
                className='form-control'
                id='title'
                name='title'
                placeholder='Blog Title'
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='blog' className='form-label'>
                Blog:
              </label>
              <input
                type='text'
                className='form-control'
                id='blog'
                name='blog'
                placeholder='Write Your Blog'
                required
              />
            </div>

            <button type='submit' className='btn btn-success'>
              Add Blog
            </button>
          </form>
        </div>
      </section> */}

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
