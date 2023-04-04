import './App.css';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Header />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
