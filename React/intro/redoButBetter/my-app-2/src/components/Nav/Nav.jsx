import React from 'react';
import styles from './Nav.module.css';

export default function Nav(props) {
  const { children } = props;

  return <nav className={styles.navigation}>{children}</nav>;
}
