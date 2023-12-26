// import React, { useState } from 'react';
// import './adp.css';

// const TotalProducts = () => {
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
//       <h2 className='headings'>Search Product</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor='productName'>Product Name:</label>
//           <input
//             type='text'
//             id='productName'
//             value={productName}
//             onChange={(e) => setProductName(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor='price'>Filter Price:</label>
//           <input
//             type='number'
//             id='price'
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor='description'>Advance Features:</label>
//           <textarea
//             id='description'
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//           />
//         </div>
//         <button type='submit'>Search Product</button>
//       </form>
//     </div>
//   );
// };

// export default TotalProducts;
import React from 'react';
// import './YourComponent.css';

function HomePage() {
  return (
    <div>
      <section id='search-box'>
        <div className='sbox'>
          <div className='searchbox'>{/* Your search box content */}</div>
        </div>
      </section>

      <div className='top'>
        <h2>
          <span className='top1'>TOP</span> CATEGORIES
        </h2>
      </div>

      <section id='slider'>
        <ul id='autoWidth' className='cs-hidden'>
          {/* List of items */}
          {/* Repeat this block for each item */}
          <li className='item-a'>
            <div className='box1'>{/* Item content */}</div>
          </li>
          {/* End of item block */}
        </ul>

        <div className='shop-button'>
          <button className='shop-btn'>
            <a href='shop.html'> Find More </a>
          </button>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
