import React from "react";

const CheckBox = ({ text, ...labelAttribute }) => {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label {...labelAttribute}>
      <input type="checkbox" id={labelAttribute.htmlFor} /> {text}
    </label>
  );
};

export default CheckBox;
