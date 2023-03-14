import React, { Component } from 'react';
import ClassButton from '../ClassButton/ClassButton.jsx';
import styles from './ClassDiv.module.css';

export default class ClassDiv extends Component {
  render() {
    return (
      <div>
        <h3>Labas</h3>
        <p className={styles.green}>{this.props.tekstas}</p>
        <ClassButton />
      </div>
    );
  }
}
