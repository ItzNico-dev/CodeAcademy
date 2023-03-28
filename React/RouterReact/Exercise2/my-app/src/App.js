import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/posts'>Posts</Route>
        <Route path='/comments'>Comments</Route>
        <Route path='/todo'>Todo</Route>
      </Routes>
    </div>
  );
}

export default App;
