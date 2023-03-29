import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/news'>News</Link>
      <Link to='/services'>Services</Link>
      <Link to='/previous-work'>Previous Work</Link>
      <Link to='/contacts'>Contacts</Link>
    </nav>
  );
}
