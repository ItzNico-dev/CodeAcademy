import './App.css';
import Content from './components/Content/Content';
import Feature from './components/Feature/Feature';
import Header from './components/Header/Header';
import SignUp from './components/SignUp/SignUp';
import TopBar from './components/TopBar/TopBar';

function App() {
  return (
    <div>
      <TopBar />
      <div className='grid-container'>
        <Header />
        <Content />
        <SignUp />
        <Feature color={'yellow'} />
        <Feature color={'red'} />
        <Feature color={'purple'} />
      </div>
    </div>
  );
}

export default App;
