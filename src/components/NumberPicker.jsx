import { func, number, oneOf, string } from "prop-types";
import { picker, pickerButton, pickerInput } from "./NumberPicker.module.css";

const NumberPicker = ({ value, setValue, id, name = id }) => {
  const buttonClasses = `${pickerButton} styled icon`;

  const min = 1;
  function handleValueChange(newValue) {
    if (newValue < min) return;
    setValue(newValue);
  }
  return (
    <div className={picker}>
      <button
        onClick={() => handleValueChange(value - 1)}
        type="submit"
        className={buttonClasses}
        aria-label="decrement"
      >
        -
      </button>
      <input
        value={value}
        onChange={(e) => handleValueChange(Number(e.target.value))}
        min={1}
        type="number"
        className={pickerInput}
        name={name}
        id={id}
      />
      <button
        onClick={() => handleValueChange(value + 1)}
        type="submit"
        className={buttonClasses}
        aria-label="increment"
      >
        +
      </button>
    </div>
  );
};
NumberPicker.propTypes = {
  value: number.isRequired,
  setValue: func.isRequired,
  id: string.isRequired,
  name: string,
  buttons: oneOf(["button", "submit", "reset"]),
};

export default NumberPicker;
