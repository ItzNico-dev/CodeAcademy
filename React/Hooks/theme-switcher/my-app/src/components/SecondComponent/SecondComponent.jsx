import React, { useContext } from 'react';
import { themesContext, darkModeContext } from '../../App';

export default function SecondComponent() {
  const themes = useContext(themesContext);
  const isDarkMode = useContext(darkModeContext);

  const styles = {
    background: isDarkMode ? themes.dark.background : themes.light.background,
    color: isDarkMode ? themes.dark.foreground : themes.light.foreground,
  };
  return (
    <div style={styles}>
      <p style={styles}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, vel
        quae necessitatibus, ut sunt reprehenderit molestias ipsam provident non
        voluptates amet magnam velit consequatur aliquid, alias in dolorum error
        excepturi?
      </p>
    </div>
  );
}
