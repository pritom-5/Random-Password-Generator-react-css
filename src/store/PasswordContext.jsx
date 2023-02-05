import { createContext, useContext, useState } from "react";
import { charactersArray, strengthCalcFn } from "../helper/helper";

const passwordContext = createContext({
  password: "",
  lengthState: 0,
  strength: "",
  checks: [],
  checkHandler: () => {},
  lengthHandler: () => {},
  generatePasswordFn: () => {},
});

//////
//checkboxes objArr
const checkboxes = [
  {
    id: 1,
    checked: true,
    name: "uppercase",
    label: "Include Uppercase Letters",
  },
  {
    id: 2,
    checked: true,
    name: "lowercase",
    label: "Include Lowercase Letters",
  },
  { id: 3, checked: false, name: "numbers", label: "Include Numbers" },
  { id: 4, checked: false, name: "symbols", label: "Include Symbols" },
];

export function PasswordContextProvider(props) {
  const [checks, setChecks] = useState(checkboxes);
  const [lengthState, setLength] = useState(8);
  const [password, setPassword] = useState("Password");
  const [strength, setStrength] = useState();

  const checkHandler = (arr) => {
    setChecks(arr);
  };
  const lengthHandler = (length) => {
    setLength(length);
  };
  const generatePasswordFn = () => {
    setPassword(charactersArray(checks, lengthState));
    setStrength(strengthCalcFn(checks, lengthState));
  };

  return (
    <passwordContext.Provider
      value={{
        password,
        checks,
        lengthState,
        strength,
        checkHandler,
        lengthHandler,
        generatePasswordFn,
      }}
    >
      {props.children}
    </passwordContext.Provider>
  );
}

export default passwordContext;
