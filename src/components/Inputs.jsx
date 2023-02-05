import { useContext, useRef, useState } from "react";
import passwordContext from "../store/PasswordContext";

//slider
export function Slider() {
  const { lengthHandler, lengthState } = useContext(passwordContext);

  const changeHandler = (e) => {
    lengthHandler(e.target.value);
  };

  return (
    <div>
      <input
        type={"range"}
        min={2}
        max={15}
        step={1}
        value={lengthState}
        onChange={changeHandler}
        className="slider"
      />
    </div>
  );
}

//checkboxes
export function Checkboxes() {
  const { checkHandler, checks } = useContext(passwordContext);

  const changeHandler = (id) => {
    const updatedCheckboxObjArr = [...checks].map((item) => {
      if (item.id === id) return { ...item, ["checked"]: !item.checked };
      return item;
    });

    checkHandler(updatedCheckboxObjArr);
  };

  return (
    <div className="checkbox">
      {checks.map((item) => (
        <div key={item.id} className="checkboxItem">
          <input
            type={"checkbox"}
            id={item.name}
            name={item.name}
            checked={item["checked"]}
            onChange={changeHandler.bind(this, item.id)}
          />
          <label htmlFor={item.name}>{item.label}</label>
        </div>
      ))}
    </div>
  );
}
