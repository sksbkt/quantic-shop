
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Layout from './components/Layout';
import Home from './components/Home';
import SkeletonProducts from './components/Products/skeleton/SkeletonProducts';

const Login = lazy(() => import('./features/Auth/Login'));
const SingUp = lazy(() => import('./features/Auth/SingUp'));
const ProductPreview = lazy(() => import('./components/ProductPreview'));
const Products = lazy(() => import('./components/Products'));

const Profile = lazy(() => import('./components/Profile'));
const UserInformation = lazy(() => import('./components/Profile/UserInformation'));
const ShoppingCartHistory = lazy(() => import('./components/Profile/ShoppingCartHistory'));
const ShoppingCart = lazy(() => import('./components/Profile/ShoppingCart'));

const NotFound = lazy(() => import('./components/NotFound'))

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
        <Route path="SignUp" element={
          <SingUp />
        } />
        <Route path="login" element={
          <Login />
        } />

        {/* PrivateRoute  */}
        <Route path="Profile/:username" element={<Profile />} >
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
