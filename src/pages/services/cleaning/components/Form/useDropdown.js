import React, { useState } from "react";

const useDropdown = (label, defaultState, options) => {
  const [state, updateState] = useState(defaultState);
  const id = `use-dropdown-${label.toLowerCase()}`;
  const Dropdown = () => (
    <>
      <label htmlFor={id} />
      <select
        className="form__item"
        id={id}
        value={state}
        onChange={e => updateState(parseInt(e.target.value))}
        onBlur={e => updateState(parseInt(e.target.value))}
      >
        {options.map(option => (
          <option value={option[0]} key={`${option[0]}label`}>
            {option[1]}
          </option>
        ))}
      </select>
    </>
  );
  return [state, Dropdown, updateState];
};

export default useDropdown;
