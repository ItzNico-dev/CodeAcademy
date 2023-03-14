import React from 'react';
import Title from '../Title/Title';
import styles from './Footer.module.css';
import Container from '../Container/Container.jsx';

export default function Footer() {
  return (
    <footer>
      <Container>
        {' '}
        <Title text='Contacts' />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ratione
          odit iste quaerat maxime maiores molestiae culpa saepe quibusdam odio
          labore impedit corporis dolorum sit cum voluptas ullam, mollitia eius!
        </p>
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quasi
        possimus unde quis praesentium similique fugit fugiat excepturi
        distinctio libero voluptatum ex. Facilis aliquam sunt cumque. Quas
        repellat delectus facilis!
      </Container>
    </footer>
  );
}
