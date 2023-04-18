import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ArticleList from '../ArticleList/ArticleList';

export default function NavBar() {
  return (
    <nav>
      <Routes>
        <Route path='/apple' element={<ArticleList category='apple' />}>
          Home
        </Route>
      </Routes>
    </nav>
  );
}
