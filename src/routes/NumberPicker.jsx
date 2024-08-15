import { string } from "prop-types";
import { picker, pickerButton, pickerInput } from "./NumberPicker.module.css";
import { useState } from "react";

const NumberPicker = ({ id }) => {
  const buttonClasses = `${pickerButton} styled icon`;

  const [value, setValue] = useState(1);

  const min = 1;
  function handleValueChange(newValue) {
    if (newValue < min) return;
    setValue(newValue);
  }
  return (
    <div className={picker}>
      <button
        onClick={() => handleValueChange(value - 1)}
        className={buttonClasses}
        aria-label="decrement"
      >
        -
      </button>
      <input
        value={value}
        onChange={(e) => handleValueChange(e.target.value)}
        min={1}
        type="number"
        className={pickerInput}
        name={id}
        id={id}
      />
      <button
        onClick={() => handleValueChange(value + 1)}
        className={buttonClasses}
        aria-label="increment"
      >
        +
      </button>
    </div>
  );
};
NumberPicker.propTypes = {
  id: string,
};

export default NumberPicker;
