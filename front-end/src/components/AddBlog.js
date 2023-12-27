// import React, { useState } from 'react';
// import './adp.css';

// const AddBlog = () => {
//   const [productName, setProductName] = useState('');
//   const [price, setPrice] = useState('');
//   const [description, setDescription] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can perform actions with the form data like sending it to an API
//     console.log('Product Name:', productName);
//     console.log('Price:', price);
//     console.log('Description:', description);
//     // Add your logic to send this data to the backend or perform other operations
//   };

//   return (
//     <div>
//       <section id='hero'>
//         <div className='content'>
//           <p>Travel Blog</p>
//           <h1>
//             Tell A <span style={{ color: '#088178' }}>Tale.</span>
//           </h1>
//           <p>
//             99 Destinations, 99 Stories, One Incredible{' '}
//             <span style={{ color: '#088178' }}>Blog</span>
//           </p>
//         </div>
//       </section>

//       <section id='blog-form'>
//         <div className='container'>
//           <h1 className='my-4' style={{ color: '#088178' }}>
//             ADD YOUR BLOG
//           </h1>
//           <form className='add-blog'>
//             <div className='mb-3'>
//               <label htmlFor='name' className='form-label'>
//                 Full Name
//               </label>
//               <input
//                 type='text'
//                 className='form-control'
//                 id='name'
//                 name='name'
//                 placeholder='Enter name'
//                 required
//               />
//             </div>
//             <div className='mb-3'>
//               <label htmlFor='email' className='form-label'>
//                 Email Address
//               </label>
//               <input
//                 type='text'
//                 className='form-control'
//                 id='email'
//                 name='email'
//                 placeholder='Enter Email'
//                 required
//               />
//             </div>
//             <div className='mb-3'>
//               <label htmlFor='date' className='form-label'>
//                 Blog Date
//               </label>
//               <input
//                 type='date'
//                 className='form-control'
//                 id='date'
//                 name='date'
//                 required
//               />
//             </div>
//             <div className='mb-3'>
//               <label htmlFor='title' className='form-label'>
//                 Blog Title
//               </label>
//               <input
//                 type='text'
//                 className='form-control'
//                 id='title'
//                 name='title'
//                 placeholder='Blog Title'
//                 required
//               />
//             </div>
//             <div className='mb-3'>
//               <label htmlFor='blog' className='form-label'>
//                 Blog:
//               </label>
//               <input
//                 type='text'
//                 className='form-control'
//                 id='blog'
//                 name='blog'
//                 placeholder='Write Your Blog'
//                 required
//               />
//             </div>

//             <button type='submit' className='btn btn-success'>
//               Add Blog
//             </button>
//           </form>
//         </div>
//       </section>

//       <h1 className='text-center my-5' style={{ color: '#088178' }}>
//         LATEST BLOGS
//       </h1>

//       <section id='main' className='container'>
//         {/* Add content for the latest blogs section */}
//       </section>
//     </div>
//   );
// };

// export default AddBlog;

import React, { useState } from 'react';
import './adp.css';

const AddBlog = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [blog, setBlog] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Full Name:', name);
    console.log('Email:', email);
    console.log('Blog Date:', date);
    console.log('Blog Title:', title);
    console.log('Blog:', blog);
    // Add logic to handle form submission here
  };

  return (
    <div>
      {/* ...existing code */}
      <section id='blog-form'>
        <div className='container'>
          <h1 className='my-4' style={{ color: '#088178' }}>
            ADD YOUR BLOG
          </h1>
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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={date}
                onChange={(e) => setDate(e.target.value)}
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                value={blog}
                onChange={(e) => setBlog(e.target.value)}
              />
            </div>

            <button type='submit' className='btn btn-success'>
              Add Blog
            </button>
          </form>
        </div>
      </section>
      {/* ...existing code */}
    </div>
  );
};

export default AddBlog;
