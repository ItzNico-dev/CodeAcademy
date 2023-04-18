import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ArticleList from '../ArticleList/ArticleList';

export default function NavBar() {
  return (
    <nav>
      <Routes>
        <Route path='/tesla' element={<ArticleList category='tesla' />} />
        <Route path='/business' element={<ArticleList category='business' />} />
        <Route path='/tech' element={<ArticleList category='tech' />} />
      </Routes>
    </nav>
  );
}
