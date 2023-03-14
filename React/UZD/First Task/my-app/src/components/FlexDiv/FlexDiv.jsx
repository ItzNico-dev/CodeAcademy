import React from 'react';
import styles from './FlexDiv.module.css'

export default function FlexDiv(props) {
  const { children } = props;
  return <div className={styles.flex}>{children}</div>;
}
