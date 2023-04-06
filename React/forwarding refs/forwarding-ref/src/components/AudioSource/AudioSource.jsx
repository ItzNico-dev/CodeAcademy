import React from 'react';

export default React.forwardRef(function AudioSource( props, ref ) {
  const { source } = props;

  return (
    <div>
      <audio ref={ref} src={source}></audio>
    </div>
  );
});
