import React from "react";

const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        className="form-input"
        onChange={handleChange}
        name={name}
        type={type}
        value={value}
      />
    </div>
  );
};

export default FormRow;
