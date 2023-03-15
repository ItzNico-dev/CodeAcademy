import React from 'react';
import styles from './LowerNavCard.module.css';

export default function LowerNavCard() {
  return (
    <div className={styles.flex}>
      <a href='#'>Home</a>
      <a href='#'>Product</a>
      <a href='#'>Company</a>
      <a href='#'>Contact</a>
    </div>
  );
}
