import { useState } from 'react';

export default function useFormInput(initial) {
  const [value, setValue] = useState(initial);

  function onChange(e) {
    setValue(e.target.value);
  }

  return { value, onchange };
}
