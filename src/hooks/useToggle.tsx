import React from 'react';

export default function useToggle(defaultValue: boolean = false) {
  const [value, setValue] = React.useState(defaultValue);
  const toggle = React.useCallback(() => setValue(v => !v), []);
  return [value, toggle] as const;
}
