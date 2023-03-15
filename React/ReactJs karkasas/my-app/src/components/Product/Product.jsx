import React from 'react';
import PropTypes from 'prop-types';
import styles from './Product.module.css';

export default function Product(props) {
  const { category, name, price } = props;

  return (
    <div>
      <p className={styles.category}>{category}</p>
      <p>{name}</p>
      <p>⭐⭐⭐⭐⭐</p>
      <b>
        <p>{price}</p>
      </b>
    </div>
  );
}

Product.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
