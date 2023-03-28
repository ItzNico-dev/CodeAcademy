import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import About from './components/About/About.jsx';
import News from './components/News/News';
import Services from './components/Services/Services';
import PreviousWork from './components/PreviousWork/PreviousWork';
import Contacts from './components/Contacts/Contacts';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/news' element={<News />} />
        <Route path='/services' element={<Services />} />
        <Route path='/PreviousWork' element={<PreviousWork />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
