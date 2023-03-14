import './App.css';
import FuncDiv from './components/FuncDiv/FuncDiv.jsx';
import ClassDiv from './components/ClassDiv/ClassDiv.jsx';

function App() {
  return (
    <div>
      <FuncDiv tekstas='Cia yra tekstas perduotas per props' />
      <ClassDiv tekstas='Cia yra tekstas perduotas per props' />
    </div>
  );
}

export default App;
