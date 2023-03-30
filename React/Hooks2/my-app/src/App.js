import './App.css';
import Memo from './components/Memo/Memo.jsx';
import Callback from './components/Callback/Callback';

//! useCallback issaugoja fukncijos cashe
//! useMemo issaugoja funkcijos rezultata

function App() {
  return (
    <div>
      <Memo />
      <Callback />
    </div>
  );
}

export default App;
