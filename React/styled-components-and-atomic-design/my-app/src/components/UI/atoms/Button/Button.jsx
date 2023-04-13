import React from 'react';
import { StylesButton } from './Button.styled';
import { StylesDiv } from './Button.styled';

export default function Button() {
  return (
    <div>
      <StylesButton>Hello</StylesButton>

      <StylesDiv>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          nihil eligendi temporibus, perferendis repellendus officia nam
          doloribus maxime possimus tempora atque doloremque ipsa, minima
          officiis maiores facilis voluptas repellat. Dolor!
        </p>
      </StylesDiv>
    </div>
  );
}
