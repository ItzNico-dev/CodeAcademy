import React from 'react';
import styles from './Main.module.css';
import Title from '../Title/Title.jsx';
import Container from '../Container/Container.jsx';

export default function Main() {
  return (
    <main>
      <Container>
        <div>
          <img
            className={styles['windows-image']}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuTWGW8BMxGEo82IyJw8lcC2pceS1k81MMTA&usqp=CAU'
            alt='Microsoft wallpaper'
          />
          <Title text='About' />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
            architecto explicabo debitis eos, labore aut consectetur, dolorem
            sunt possimus nostrum et illo dolorum recusandae reprehenderit velit
            enim dolores, laboriosam dignissimos.
          </p>
        </div>
      </Container>
    </main>
  );
}
