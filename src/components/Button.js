import React from "react";
import "./Button.css";
// const Button = ({ text, onClick, type = "button" }) => {
//   return (
//     <button type={type} onClick={onClick} className={`my-btn`}>
//       {text}
//     </button>
//   );
// };
const Button = ({ text, onClick, type = "button", className = "" }) => {
  return (
    <button type={type} onClick={onClick} className={`my-btn ${className}`}>
      {text}
    </button>
  );
};

export default Button;
