import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import ArticleList from './components/Navigation/ArticleList/ArticleList';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/:category' element={<ArticleList />} />
      </Routes>
    </div>
  );
}

export default App;
