import React from 'react';
//import M from 'materialize-css';

export default function Select({
  values = ['A', 'B', 'C'],
  selectedValue = 'C',
  onChange,
}) {
  // Se quiser usar o JavaScript do Materialize
  // Retire o className 'browser-default'
  // React.useEffect(() => {
  //   M.AutoInit();
  // }, []);

  const handleSelectChange = ({ target }) => {
    const newValue = target.value;
    onChange(newValue);
  };

  return (
    <select
      className="browser-default"
      value={selectedValue}
      onChange={handleSelectChange}
    >
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
