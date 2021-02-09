import React from 'react';
import M from 'materialize-css';

export default function Select({ values, selectedValue, onChange }) {
  React.useEffect(() => {
    M.AutoInit();
  }, []);

  const handleSelectChange = ({ target }) => {
    const { value: newValue } = target;
    onChange(newValue);
  };

  return (
    <select value={selectedValue} onChange={handleSelectChange}>
      {values.map(({ id, description, value }) => {
        return (
          <option key={id} value={value}>
            {description}
          </option>
        );
      })}
    </select>
  );
}
