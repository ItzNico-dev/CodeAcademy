import React from 'react';
import styles from './BigContainerCard.module.css';
import DivContentBox from '../DivContentBox/DivContentBox.jsx';

export default function BigContainerCard(props) {
  const { children } = props;

  return <div className={styles.container}>{children}</div>;
}
