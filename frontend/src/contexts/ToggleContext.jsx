import React, {useState} from "react";

const ToggleContext = React.createContext();

const ToggleProvider = ({children}) => {
  const [create, setCreate] = useState(false);

  const toggleCreate = () => {
    setCreate(!create);
  };

  return (
    <ToggleContext.Provider value={{ create, toggleCreate }}>
      {children}
    </ToggleContext.Provider>
  );
}

export { ToggleContext, ToggleProvider };