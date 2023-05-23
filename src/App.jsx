
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Layout from './pages/components/Layout';
import Home from './pages/Home';

import useInput from './hooks/useInput';
import { useDispatch } from 'react-redux';
import { login } from './Redux/Slices/UserSlice';

// const Login = lazy(() => import('./features/Auth/Login'));
// const SingUp = lazy(() => import('./features/Auth/SingUp'));
const Login = lazy(() => import('./pages/Auth/Login'));
const Register = lazy(() => import('./pages/Auth/Register'));
const ProductPreview = lazy(() => import('./pages/ProductPreview'));
const Products = lazy(() => import('./pages/Products'));

const Profile = lazy(() => import('./pages/Profile'));
const UserInformation = lazy(() => import('./pages/Profile/UserInformation'));
const ShoppingCardHistory = lazy(() => import('./pages/Profile/ShoppingCardHistory'));
const ShoppingCard = lazy(() => import('./pages/Profile/ShoppingCard'));

const NotFound = lazy(() => import('./pages/NotFound'))
function App() {
  const dispatch = useDispatch();
  //? custom hook for testing
  //? could be simply replace with local storage functions direct call
  const [storeUser, setStoreUser, resetUser, userAttr] = useInput('userName', '');
  useEffect(() => {
    if (storeUser != null && storeUser != '') {
      dispatch(login({
        userName: storeUser,
        loggedIn: true
      }))
    }
    return () => {
    };
  }, [storeUser]);

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
        <Route path="ShoppingCard/:id" element={
          <ShoppingCard />
        } />

        <Route path="register" element={
          <Register />
        } />
        {/* PrivateRoute  */}
        <Route path="Profile" element={<Profile />} >
          {/* <Route path="login" element={
            <Login />
          } /> */}
          <Route index element={<UserInformation />} />
          <Route path="ShoppingCard" element={<ShoppingCard />} />
          <Route path="ShoppingCardHistory/:page?" element={<ShoppingCardHistory />} />
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
