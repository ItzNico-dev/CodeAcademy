import React from 'react';
import styles from './Post.module.css';

export default function Post(props) {
  const { img, text } = props;
  return (
    <div className={styles.container}>
      <img src={img} alt='kazkas' />
      text={text}
    </div>
  );
}
