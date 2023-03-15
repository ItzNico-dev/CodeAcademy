import React from 'react';
import styles from './DivContentBox.module.css';

export default function DivContentBox(props) {
  const { titleText, mainText, children } = props;

  return (
    <div className={styles.style}>
      <h3>{titleText}</h3>
      <p>{mainText}</p>
      {children}
    </div>
  );
}
