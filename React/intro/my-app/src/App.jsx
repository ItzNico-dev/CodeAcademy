import './App.css';

function App() {
  return (
    <div>
      <header>
        <img
          className='microsoft-logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png'
          alt='microsoft logo'
        />
      </header>
      <nav>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Contacts</a>
      </nav>
      <main>
        <div>
          <img
            className='desert-image'
            src='https://wallpapers.microsoft.design/images/wallpapers.jpg'
            alt='microsoft logo'
          />
        </div>
        <div className='green-background about'>
          <h3>About</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolore
            molestiae deleniti magnam voluptates incidunt delectus perferendis
            voluptatum et sequi ipsa ex maxime dignissimos vero, quidem rem
            eveniet eligendi nisi.
          </p>
        </div>
      </main>
      <footer>
        <div>
          <div>
            <h3>Contacts</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia a
            iste, placeat reprehenderit totam tempore enim labore. Quisquam,
            dolor porro. Magnam quibusdam inventore corporis aspernatur ut quae
            consequatur repellendus sunt!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            obcaecati quo porro magnam facere repellendus eius consequatur
            fugiat? Delectus blanditiis nam earum commodi eaque eos dolorum
            pariatur incidunt maxime deserunt?
            <br />
            <br />
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
