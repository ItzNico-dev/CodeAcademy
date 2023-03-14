import React from 'react';
import styles from './Nav.module.css';

export default function nav(props) {
  const { children } = props;

  return (
    <div className={styles.navigation}>
      <nav>{children}</nav>
    </div>
  );
}
