import React from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

export default function Footer() {
  const location = useLocation();
  return (
    <div>
      <Navigation />
      <p>All rights reserved © </p>
      <p>current page {location.pathname}</p>
    </div>
  );
}
