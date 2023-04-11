import './App.css';
import Counter1 from './components/Counter1/Counter1';
import Counter2 from './components/Counter2/Counter2';
import CounterWrapper from './components/CounterWrapper/CounterWrapper';

function App() {
  return (
    <div>
      <CounterWrapper
        render={(count, increment) => {
          return <Counter1 count={count} increment={increment} />;
        }}
      />
      <CounterWrapper
        render={(count, increment) => {
          return <Counter2 count={count} increment={increment} />;
        }}
      />
    </div>
  );
}

export default App;
