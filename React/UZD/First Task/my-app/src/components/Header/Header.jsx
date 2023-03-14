import React from 'react';
import styles from './Header.module.css';
import Nav from '../Nav/Nav.jsx';
import Container from '../Container/Container.jsx';

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <img
          className={styles.image}
          src='data:image/png;base64,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'
          alt='logo'
        />
        <Nav>
          <a href='#'>Home</a>
          <a href='#'>Product</a>
          <a href='#'>Company</a>
          <a href='#'>Contact</a>
        </Nav>
      </Container>
    </header>
  );
}
