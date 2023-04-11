import React, { useState } from 'react';

export default function VisibilityToggleWrapper({ render }) {
  const [isVisible, setisVisible] = useState(true);

  function toggleVisibility() {
    setisVisible((prev) => !prev);
  }

  return <>{render(isVisible, toggleVisibility)}</>;
}
