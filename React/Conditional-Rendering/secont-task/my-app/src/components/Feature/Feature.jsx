import React from 'react';
import styles from './Feature.module.css';

export default function Feature({ color }) {
  return (
    <div style={{ 'background-color': color }} className={styles.feature}>
      Feature
    </div>
  );
}
