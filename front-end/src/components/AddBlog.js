import React, { useState } from 'react';
import './adp.css';
import axios from 'axios';
const AddBlog = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    title: '',
    description: '',
  });

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post('http://localhost:5001/api/blogs', {
        name: data.name,
        email: data.email,
        title: data.email,
        description: data.description,
      })
      .then((result) => {
        console.log(result);
        alert(result.data.msg);
      })
      .catch((err) => {
        console.log(err);
      });

    setData({
      name: '',
      email: '',
      title: '',
      description: '',
    });

    // Add logic to handle form submission here
  };

  return (
    <div className='main-1'>
      <section id='blog-form'>
        <div className='container'>
          <h1 className='title-1'>Add Your Own Blog</h1>
          <form className='add-blog' onSubmit={handleSubmit}>
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
                value={data.name}
                onChange={changeHandler}
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
                value={data.email}
                onChange={changeHandler}
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
                value={data.title}
                onChange={changeHandler}
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
                name='description'
                placeholder='Write Your Blog'
                required
                value={data.description}
                onChange={changeHandler}
              />
            </div>

            <button type='submit' className='btn btn-success'>
              Add Blog
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddBlog;
