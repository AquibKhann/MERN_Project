import React from 'react'
import { Routes, Route } from 'react-router-dom';

import AuthLayout from './components/auth/layout'
import AuthLogin from './pages/auth/login'
import AuthRegister from './pages/auth/register'
import AdminLayout from './components/admin-view/layout';
import AdminProducts from './pages/admin-view/products';
import AdminFeature from './pages/admin-view/features';
import AdminDashboard from './pages/admin-view/dashboard';
import AdminOrders from './pages/admin-view/order';

const App = () => {
  return (

    <div className="flex flex-col overflow-hidden bg-white">

      <h1 className="text-black bg-white">Header component</h1>

      <Routes>
        <Route path="auth" element={<AuthLayout />}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />} >
          <Route path="products" element={<AdminProducts />} />
          <Route path="features" element={<AdminFeature />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="orders" element={<AdminOrders />} />
        </Route>


      </Routes>
    </div >

  )
}

export default App
