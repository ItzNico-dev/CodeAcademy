import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import About from './components/About/About.jsx';
import Home from './components/Home/Home.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import SignIn from './components/SignIn/SignIn.jsx';
import AuthHeader from './components/AuthHeader/AuthHeader.jsx';
import User from './components/User/User.jsx';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
  return (
    <div>
      <header>
        <nav>
          <Link to={'/home'}>Home</Link>
          <Link to={'/About'}>About</Link>
          <Link to={'/signup'}>Sign Up</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/auth' element={<AuthHeader />}>
          <Route path='signin' element={<SignIn />} />
          <Route path='signup' element={<SignUp />} />
        </Route>
        <Route path='/user/:id' element={<User />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
