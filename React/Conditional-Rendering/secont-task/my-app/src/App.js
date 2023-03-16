import './App.css';
import TopBar from './components/TopBar/TopBar';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import SignUp from './components/SignUp/SignUp';
import Feature from './components/Feature/Feature';

function App() {
  return (
    <div>
      <TopBar />
      <div className='grid-container'></div>
      <Header />
      <Content />
      <SignUp />
      <Feature color={'yellow'} />
      <Feature color={'red'} />
      <Feature color={'purple'} />
    </div>
  );
}

export default App;
