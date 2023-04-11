import './App.css';
import VisibilityToggleWrapper from './components/VisibilityToggleWrapper/VisibilityToggleWrapper';
import Paragraph from './components/Paragraph/Paragraph';
import Card from './components/Card/Card';
import List from './components/List/List';

function App() {
  const people = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'Dave' },
    { id: 5, name: 'Eve' },
  ];

  return (
    <div>
      <VisibilityToggleWrapper
        render={(isVisible, toggle) => {
          return <Paragraph isVisible={isVisible} toggle={toggle} />;
        }}
      />
      <VisibilityToggleWrapper
        render={(isVisible, toggle) => {
          return (
            <Card
              isVisible={isVisible}
              toggle={toggle}
              source={''}
              header={'this is header'}
              bodyText={'some body text'}
            />
          );
        }}
      />
      <VisibilityToggleWrapper
        render={(isVisible, toggle) => {
          return <List isVisible={isVisible} toggle={toggle} people={people} />;
        }}
      />
    </div>
  );
}

export default App;
