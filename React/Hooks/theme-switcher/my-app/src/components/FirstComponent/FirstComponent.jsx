import React, { useContext } from 'react';
import { themesContext, darkModeContext } from '../../App';
import SecondComponent from '../SecondComponent/SecondComponent';

export default function FirstComponent({}) {
  const themes = useContext(themesContext);
  const isDarkMode = useContext(darkModeContext);
  const styles = {
    background: isDarkMode ? themes.dark.background : themes.light.background,
    color: isDarkMode ? themes.dark.foreground : themes.light.foreground,
  };

  return (
    <div style={styles}>
      <h1>Hello</h1>
      <SecondComponent />
    </div>
  );
}
