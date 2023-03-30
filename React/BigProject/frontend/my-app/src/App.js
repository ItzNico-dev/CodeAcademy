import './App.css';
import React, { useEffect } from 'react';
import MainLayout from './components/layouts/MainLayout/MainLayout';
import { Routes, Route, useNavigate } from 'react-router-dom';
import RegistrationLayout from './components/layouts/RegistrationLayout/RegistrationLayout';
import SignInLayout from './components/layouts/SignInLayout/SignInLayout';
import Page404 from './components/layouts/Page404/Page404';

function App() {
  // const navigate = useNavigate();

  // function checkIfLoggedIn() {
  //   const loggedInUser = localStorage.getItem('loggedInUser');
  //   if (loggedInUser) {
  //     navigate('/home');
  //   } else {
  //     navigate('/auth/signin');
  //   }
  // }

  // useEffect(() => {
  //   checkIfLoggedIn();
  // }, []);

  return (
    <div>
      <Routes>
        <Route path='/' element={<MainLayout />} />
        <Route path='/auth'>
          <Route path='signin' element={<SignInLayout />} />
          <Route path='signup' element={<RegistrationLayout />} />
        </Route>
        <Route path='*' element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
