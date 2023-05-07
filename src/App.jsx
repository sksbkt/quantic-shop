
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Layout from './pages/components/Layout';
import Home from './pages/Home';
import SkeletonProducts from './pages/skeletons/SkeletonProducts';

// const Login = lazy(() => import('./features/Auth/Login'));
// const SingUp = lazy(() => import('./features/Auth/SingUp'));
const Login = lazy(() => import('./pages/Auth/Login'));
const Register = lazy(() => import('./pages/Auth/Register'));
const ProductPreview = lazy(() => import('./pages/ProductPreview'));
const Products = lazy(() => import('./pages/Products'));

const Profile = lazy(() => import('./pages/Profile'));
const UserInformation = lazy(() => import('./pages/Profile/UserInformation'));
const ShoppingCartHistory = lazy(() => import('./pages/Profile/ShoppingCartHistory'));
const ShoppingCart = lazy(() => import('./pages/Profile/ShoppingCart'));

const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  return (

    <Routes>
      <Route path='/' element={<Layout />}>
        {/* Public Routes */}
        <Route index element={<Home />} />
        <Route path="login" element={
          <Login />
        } />
        <Route path="products/:page?" element={
          <Products />
        } />
        <Route path="ProductPreview" element={
          <ProductPreview />
        } />
        <Route path="ShoppingCart/:id" element={
          <ShoppingCart />
        } />

        <Route path="register" element={
          <Register />
        } />
        {/* PrivateRoute  */}
        <Route path="Profile" element={<Profile />} >
          <Route path="login" element={
            <Login />
          } />
          <Route index element={<UserInformation />} />
          <Route path="ShoppingCart/:id" element={<ShoppingCart />} />
          <Route path="ShoppingCartHistory/:page?" element={<ShoppingCartHistory />} />
        </Route>
        {/* 404 */}
        <Route path="*" element={
          <NotFound />
        } />
      </Route>
    </Routes>

  )

}

export default App
