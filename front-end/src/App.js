import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import Login from './components/Login';
import AddProducts from './components/AddProducts';
import TotalProducts from './components/TotalProducts';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<TotalProducts />} />
          <Route path='/add' element={<AddProducts />} />
          {/* <Route path='/update' element={<h1>Update Product Component</h1>} /> */}
          <Route path='/logout' element={<h1>Logout |Product Component</h1>} />

          <Route
            path='/signup'
            element={
              <h1>
                <SignUp />
              </h1>
            }
          />
          <Route
            path='login'
            element={
              <h1>
                <Login />
              </h1>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
