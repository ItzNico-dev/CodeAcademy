import './App.css';
// import Greeting from './components/Greeting/Greeting.jsx';
import Hero from './components/Hero/Hero.jsx';
import { posts } from './data/posts.js';
import Post from './components/Post/Post';

function App() {
  return (
    <div className='container'>
      {/* <Greeting isLoggedIn={true} /> */}
      <Hero />
      <div className='flex-container'>
        {posts.map((post) => {
          return <Post img={post.url} text={post.text} />;
        })}
      </div>
    </div>
  );
}
export default App;
