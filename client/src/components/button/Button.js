import React from "react";
import "./button.css";
const Button = ({ title, onClick, className }) => {
  return (
    <div className={"button_container " + className} onClick={onClick}>
      {title}
    </div>
  );
};

export default Button;
