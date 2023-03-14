import React from 'react';
import FuncButton from '../FuncButton/FuncButton.jsx';
import styles from './FuncDiv.module.css';

export default function FuncDiv(props) {
  const { tekstas } = props;

  return (
    <div>
      <h3>Labas</h3>
      <p className={styles.green}>{tekstas}</p>
      <FuncButton />
    </div>
  );
}
