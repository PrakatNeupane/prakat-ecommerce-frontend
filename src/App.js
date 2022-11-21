import { Button } from 'react-bootstrap';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import RegistrationPage from './pages/register-login/Registration';
import LoginPage from './pages/register-login/Login';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import EmailVerification from './pages/register-login/EmailVerification';
import Dashboard from './pages/dashboard/Dashboard';
import AdminProfile from './pages/admin-profile/AdminProfile';
import Categories from './pages/categories/Categories';
import Product from './pages/product/Product';
import NewProduct from './pages/product/NewProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Private router */}
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/admin-profile" element={<AdminProfile />}></Route>

          <Route path='/categories' element={<Categories />}></Route>

          <Route path='/products' element={<Product />}></Route>
          <Route path='/product/new' element={<NewProduct />}></Route>

          <Route path='/register' element={<RegistrationPage />}></Route>
          <Route path='/' element={<LoginPage />}></Route>
          <Route path='/admin/verify-email' element={<EmailVerification />}></Route>
          <Route path='*' element={<h1>404 not found</h1>}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div >
  );
}

export default App;
