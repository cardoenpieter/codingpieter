//import { useContext, createContext } from "react";

const ButtonLightDarkMode = ({ onClick }) => {
  return (
    <div>
      <button className="button-light-dark" onClick={onClick}>
        <span className="button-top"> Light/Dark Mode</span>
      </button>
    </div>
  );
};

export default ButtonLightDarkMode;
