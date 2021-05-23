import React from "react";

const Button = ({
  label,
  disabled,
  type = "button",
  className = "",
  onClick
}) =>
  onClick ? (
    <button
      className={`button ${className}`}
      type={type}
      disabled={disabled}
      onClick={() => onClick()}
    >
      {label}
    </button>
  ) : (
    <button className={`button ${className}`} type={type} disabled={disabled}>
      {label}
    </button>
  );

export default Button;
