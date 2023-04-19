import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <div>
      <Link to={'/apple'}>Apple</Link>
      <Link to={'/samsung'}>Samsung</Link>
      <Link to={'/tesla'}>Tesla</Link>
    </div>
  );
}
