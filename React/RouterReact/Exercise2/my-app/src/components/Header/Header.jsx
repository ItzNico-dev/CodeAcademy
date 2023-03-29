import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to={'/todos'}></Link>
      <Link to={'/comments'}></Link>
      <Link to={'/posts'}></Link>
      <Outlet />
    </header>
  );
}
