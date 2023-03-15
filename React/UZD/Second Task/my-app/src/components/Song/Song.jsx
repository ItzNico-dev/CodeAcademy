import React from 'react';
import PropTypes from 'prop-types';

export default function Song(props) {
  const { title, artist, duration } = props;
  return (
    <div>
      <h2>{title}</h2>
      <h2>{artist}</h2>
      <h3>{duration}</h3>
    </div>
  );
}

Song.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  duration: PropTypes.string,
};
