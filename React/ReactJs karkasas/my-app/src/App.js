import './App.css';
import MathButton from './components/MathButton/MathButton';

function App() {
  return (
    <div>
      <MathButton
        text='Show 5 + 6 answer'
        action={(a, b) => a + b}
        array={[5, 6]}
        // array={[1, 2, 'asd']}
        // textOrNumber={2}
        // person={{ name: 'Matt', age: 21 }}
        // header = {123}
      />
      <MathButton
        text='Show 10 - 6 answer'
        action={(a, b) => a - b}
        array={[10, 6]}
      />
    </div>
  );
}

export default App;
